'use client';

import React from 'react';
import { motion } from 'framer-motion';

function ProvenExcellence() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const stagger = {
    animate: { transition: { staggerChildren: 0.08 } },
  };

  const stats = [
    { value: '150%', label: 'Capital Appreciation', prefix: 'Up to' },
    { value: '8-12%', label: 'Avg Rental Yield' },
    { value: '2500+', label: 'Global Investors', red: true },
    { value: '168,000+', label: 'Properties Sold Last Year', red: true },
  ];

  return (
    <section
      id="excellence"
      className="w-full border-b border-gray-200 bg-white py-32"
    >
      <div className="w-[92vw] xl:w-[80vw] mx-auto">
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
            className="text-[34px] md:text-5xl leading-tight tracking-[0.02em] font-['Playfair_Display'] text-center mb-6 md:mb-8 uppercase"
          >
            What’s Inside Dubai Real Estate
          </motion.h2>

          {/* Stats row */}
          <motion.div
            variants={stagger}
            className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 pt-1"
          >
            {stats.map((s, i) => (
              <React.Fragment key={s.label}>
                <motion.div variants={fadeInUp} className="flex flex-col items-center">
                  {/* number + optional small prefix */}
                  <div className="relative">
                    <div className="flex justify-center items-center gap-2">
                      {s.prefix && (
                        <span className="text-base tracking-tight text-gray-500">
                          {s.prefix}
                        </span>
                      )}
                      <span
                        className={[
                          'font-semibold tracking-tight',
                          'text-[22px] sm:text-[24px] md:text-4xl',
                          
                          "font-['Manrope']",
                        ].join(' ')}
                      >
                        {s.value}
                      </span>
                    </div>
                    
                     
                  </div>

                  {/* caption */}
                  <span className="mt-1 text-[11px] sm:text-[12px] md:text-base text-gray-500">
                    {s.label}
                  </span>
                </motion.div>

                {/* vertical divider (hide after last) */}
                {i < stats.length - 1 && <div className="hidden sm:block h-6 w-px bg-gray-200" />}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProvenExcellence;
