'use client';

import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// Professional palette
const COLORS = ['#1a5276', '#148f77', '#f1c40f']; // Navy, Teal, Gold
const FADES = ['#1a527655', '#148f7755', '#f1c40f55'];
const ACCENT = '#0F172A';
const TEXT_COLOR = '#4B5563';

const SLICE_INFO = [
  {
    title: 'Golden Visa',
    text: 'Long-term residency with world-class lifestyle benefits and family inclusion.',
    features: [
      '10-Year Residency',
      '4 Family Members',
      'Global Mobility',
      'Premium Healthcare',
      'Education Access',
    ],
  },
  {
    title: 'Zero Tax Haven',
    text: 'No personal income or capital gains tax with strong legal protection.',
    features: [
      'No Income Tax',
      'No Capital Gains Tax',
      '100% Repatriation',
      'Stable Currency',
      'Global Legal Framework',
    ],
  },
  {
    title: 'Strategic Location',
    text: 'Gateway between East & West with unparalleled global connectivity.',
    features: [
      '8-hr reach to 2/3 of world',
      'Ultra-modern airports',
      'World’s busiest hub',
      'Premium logistics',
      'Stable policy',
    ],
  },
];

export default function PremiumAdvantagesClean() {
  const chartRef = useRef(null);
  const [active, setActive] = useState(null);
  const [locked, setLocked] = useState(false);

  const data = useMemo(() => {
    const bg = (i) => (active == null ? COLORS[i] : i === active ? COLORS[i] : FADES[i]);

    return {
      labels: SLICE_INFO.map((s) => s.title),
      datasets: [
        {
          data: [33, 33, 34], // Equal parts for a balanced look
          backgroundColor: [bg(0), bg(1), bg(2)],
          borderColor: '#FFFFFF',
          borderWidth: 2,
          hoverBackgroundColor: COLORS,
          hoverBorderColor: '#FFFFFF',
          hoverBorderWidth: 2,
        },
      ],
    };
  }, [active]);

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      rotation: -90,
      plugins: {
        legend: { display: false },
        tooltip: {
          enabled: true,
          displayColors: false,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          titleColor: ACCENT,
          titleFont: { weight: 'bold', size: 16 },
          bodyColor: TEXT_COLOR,
          bodyFont: { size: 14 },
          borderColor: '#E5E7EB',
          borderWidth: 1,
          padding: 12,
          callbacks: {
            label: (ctx) => ` ${ctx.label}: ${ctx.formattedValue}%`,
            title: (ctx) => SLICE_INFO[ctx[0].dataIndex].title,
          },
        },
      },
      animation: { duration: 300, easing: 'easeOutQuad' },
      events: ['mousemove', 'mouseout', 'click'],
      onHover: (evt, elements) => {
        if (locked) return;
        if (elements && elements.length) {
          setActive(elements[0].index);
        } else {
          setActive(null);
        }
      },
      onClick: (evt, elements) => {
        if (elements && elements.length) {
          const idx = elements[0].index;
          setActive((prev) => (prev === idx && locked ? null : idx));
          setLocked((prevLocked) => (active === idx ? !prevLocked : true));
        } else {
          setLocked(false);
          setActive(null);
        }
      },
    }),
    [locked, active]
  );

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setLocked(false);
        setActive(null);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Determine which info to show based on active slice
  const infoToShow = active !== null ? SLICE_INFO[active] : null;

  return (
    <section className="py-16 px-4 md:px-8 w-full w-[80vw] xl:w-[92vw] mx-auto font-sans">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-[#111827] tracking-wide">
        PREMIUM ADVANTAGES
      </h2>
      <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-16">
        Explore the key benefits that make this a premier destination for investment and lifestyle.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Pie Chart */}
        <div className="flex flex-col items-center">
          <div className="w-[360px] h-[360px] md:w-[450px] md:h-[450px]">
            <Pie ref={chartRef} data={data} options={options} />
          </div>
          <div className="mt-8 text-xl text-gray-500 font-semibold text-center">
            {active !== null ? SLICE_INFO[active].title : 'Hover to learn more'}
            {locked && ' (click to unlock)'}
          </div>
        </div>

        {/* Right: Info Display */}
        <div className="flex flex-col items-start px-4">
          <div className="w-full transition-opacity duration-300">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              {infoToShow?.title || 'Select an Advantage'}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {infoToShow?.text ||
                'Hover over a section of the pie chart to see detailed information and key features. Click to lock your selection.'}
            </p>
          </div>

          {infoToShow && (
            <div className="mt-8 w-full">
              <h4 className="text-xl font-semibold text-gray-700 mb-3">Key Features</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-base text-gray-800">
                {infoToShow.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 flex-shrink-0"
                      fill={COLORS[active]}
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
