'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// ---- Sample data (add price + count to match UI) ----

const projects = [
  {
    id: 1,
    title: 'Townsquare',
    priceLabel: 'Starting From',
    price: 'AED 1.14M',
    location: 'Business Bay, Dubai',
    image: '/assets/townsquare.webp',
    description:
      'Modern apartments in a vibrant family-oriented community with world-class amenities.',
  },
  {
    id: 2,
    title: 'Grand Polo',
    priceLabel: 'Starting From',
    price: 'AED 5.67M',
    location: 'Dubai Sports City',
    image: '/assets/grand-polo.jpeg',

    description:
      'Luxury villas and townhouses overlooking luxurious equestrian communitiy with premium amenities.',
  },
  {
    id: 3,
    title: 'Aviaan',
    priceLabel: 'Starting From',
    price: 'AED 1.3M',
    location: 'Dubai South',
    image: '/assets/aviaan.jpg',

    description:
      'Premium hotel apartments with guaranteed rental returns and world-class hospitality services.',
  },
  {
    id: 4,
    title: 'Lumena',
    priceLabel: 'Starting From',
    price: 'AED 2.5M',
    location: 'Business Bay',
    image: '/assets/lumena.webp',
    description:
      "Premium commercial spaces in the heart of Dubai's business district with exceptional returns.",
  },
];

export default function ProjectGallery() {
  const [i, setI] = useState(0);
  const p = projects[i];

  const go = (dir) => setI((prev) => (prev + dir + projects.length) % projects.length);

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(+1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="w-[92vw] xl:w-[80vw] mx-auto py-32  ">
      <h2 className="text-[34px] md:text-5xl font-['Playfair_Display']  text-center mb-4 uppercase">
        PREMIUM PROJECTS
      </h2>

      <motion.div
        key={p.title}
        initial={{ opacity: 0.6, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="relative h-[320px] sm:h-[420px] md:h-[70vh] rounded-2xl overflow-hidden"
      >
        {/* Background image */}
        <Image
          src={p.image}
          alt={p.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 92vw, 80vw"
        />

        {/* Overlay gradient (top subtle, bottom strong) */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
          {/* Top-left brand title (white) */}
          <div className="text-white font-extrabold text-2xl sm:text-3xl drop-shadow">
            {p.title}
          </div>

          {/* Bottom content */}
          <div className="text-white">
            {/* Price */}
            <div className="mb-3">
              <div className="text-[11px] sm:text-xs md:text-sm text-white/80">{p.priceLabel}</div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                {p.price}
              </div>
            </div>

            {/* Location + pager + arrows */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/80 inline-block" />
                <span className="text-xs sm:text-sm md:text-base">{p.location}</span>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                {/* Prev */}
                <button
                  aria-label="Previous"
                  onClick={() => go(-1)}
                  className="hidden sm:grid place-items-center h-9 w-9 rounded-full bg-white/15 hover:bg-white/25 transition"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 19l-7-7 7-7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Pager circle */}
                <div className="relative grid place-items-center">
                  <div className="h-12 w-12 sm:h-20 sm:w-20 rounded-full bg-[#FF5A1F] shadow-[0_0_0_10px_rgba(251,87,17,0.3)]" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="text-[11px] sm:text-xs font-semibold">
                      {String(i + 1).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Next */}
                <button
                  aria-label="Next"
                  onClick={() => go(+1)}
                  className="hidden sm:grid place-items-center h-9 w-9 rounded-full bg-white/15 hover:bg-white/25 transition"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 5l7 7-7 7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="mt-2 text-[11px] sm:text-sm md:text-base text-white/90 max-w-4xl">
              {p.description}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
