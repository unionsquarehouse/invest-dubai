'use client';

import React from 'react';
import { motion } from 'framer-motion';

function ProvenExcellence() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const stagger = { animate: { transition: { staggerChildren: 0.08 } } };

  const stats = [
    { value: '8-12%', label: 'Rental Yield' },
    { value: '45%', label: 'Capital Appreciation' },
    { value: '0%', label: 'Taxation Policy' },
    { value: '16.5%', label: 'Increase In Residential Price Index' },
  ];

  return (
    <section id="excellence" className="w-full border-b border-gray-200 bg-white py-16 sm:py-20 md:py-24">
      <div className="w-[93vw] xl:w-[80vw] mx-auto">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col items-center gap-2 md:gap-3"
        >
          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] text-center md:mb-8"
          >
            What’s Inside Dubai Real Estate
          </motion.h2>

          {/* Stats grid */}
          <motion.div
            variants={stagger}
            className="w-full grid grid-cols-4 gap-6 sm:gap-8 pt-1"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeInUp}
                className="flex flex-col items-center text-center col-span-2 lg:col-span-1"
              >
                {/* number */}
                <div className="flex items-center justify-center gap-2 text-[#9F3349]">
                  <span className="font-semibold text-3xl md:text-4xl xl:text-5xl">
                    {s.value}
                  </span>
                </div>

                {/* caption */}
                <span
                  className="mt-1 text-xs sm:text-sm md:text-base font-bold"
                  style={{ fontFamily: 'Manrope' }}
                >
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProvenExcellence;
