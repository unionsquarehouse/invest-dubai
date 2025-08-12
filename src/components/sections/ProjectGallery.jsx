'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Townsquare',
    priceLabel: 'Starting From',
    price: '$204k',
    location: 'Business Bay, Dubai',
    image: '/assets/townsquare.webp',
    description:
      'Modern apartments in a vibrant family-oriented community with world-class amenities.',
  },
  {
    id: 2,
    title: 'Grand Polo',
    priceLabel: 'Starting From',
    price: ' $1.6M',
    location: 'Dubai Sports City',
    image: '/assets/grand-polo.webp',
    description:
      'Designed with elegant curves and architectural symmetry, Avana blends organic form with timeless sophistication.',
  },
   {
    id: 3,
    title: 'Avana',
    priceLabel: 'Starting From',
    price: '$200k',
    location: 'Jumeirah Village Circle',
    image: '/assets/avana.webp',
    description:
      'Luxury villas and townhouses overlooking luxurious equestrian communitiy with premium amenities.',
  },
  
  {
    id: 4,
    title: 'Lumena',
    priceLabel: 'Starting From',
    price: '$7.08M',
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
    <section className="bg-white pt-12 pb-10 xl:pb-40">
      <div className="mx-auto w-[93vw] xl:w-[80vw] text-center">
        <h2 className="text-center text-4xl sm:text-6xl  font-['Playfair_Display'] mb-14 text-gray-800">
          Premium Projects
        </h2>

        <motion.div
          key={p.title}
          initial={{ opacity: 0.6, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="relative h-80 sm:h-96 md:h-[70vh] rounded-2xl overflow-hidden text-left"
        >
          {/* Background image */}
          <Image src={p.image} alt={p.title} fill priority className="object-cover" sizes="100vw" />

          {/* Overlay gradient (top subtle, bottom strong) */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
            {/* Top-left project title */}
            <div className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl drop-shadow font-['Manrope']">
              {p.title}
            </div>

            {/* Bottom content */}
            <div className="text-white font-['Manrope']">
              {/* Price */}
              <div className="mb-3">
                <div className="text-xs sm:text-sm md:text-base text-white/80">{p.priceLabel}</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                  {p.price}
                </div>
              </div>

              {/* Location + pager + arrows */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-white/80" />
                  <span className="text-xs sm:text-sm md:text-base">{p.location}</span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Prev */}
                  <button
                    aria-label="Previous"
                    onClick={() => go(-1)}
                    className="grid place-items-center h-9 w-9 rounded-full bg-white/15 hover:bg-white/25 transition"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
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
                      <span className="text-xs sm:text-sm font-semibold">
                        {String(i + 1).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Next */}
                  <button
                    aria-label="Next"
                    onClick={() => go(+1)}
                    className="grid place-items-center h-9 w-9 rounded-full bg-white/15 hover:bg-white/25 transition"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
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
              <p className="mt-2 text-xs sm:text-sm md:text-base text-white/90 max-w-4xl">
                {p.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
