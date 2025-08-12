'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* ---------------- DESKTOP / LAPTOP (md and up) — unchanged ---------------- */}
      <div className="relative z-10 hidden md:flex flex-col items-center justify-center px-4 py-4 md:py-24 text-center mt-10">
        <motion.h1
          className="font-['Playfair_Display'] font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          INVEST IN DUBAI
        </motion.h1>

        <motion.p
          className="mt-3 max-w-xl text-sm sm:text-base md:text-lg text-gray-600"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          Make your Dubai Real Estate dream a reality
        </motion.p>

        <motion.div
          className="mt-6"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-full bg-[#9F3349] px-6 py-3 sm:px-8 sm:py-4 text-white font-medium shadow-lg transition hover:bg-black/90"
          >
            <span className="text-sm sm:text-base md:text-lg">Explore Opportunities</span>
            <motion.span
              className="text-base sm:text-lg md:text-xl"
              animate={{ x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              aria-hidden="true"
            >
              ➜
            </motion.span>
          </button>
        </motion.div>
      </div>

      {/* Skyline image for DESKTOP / LAPTOP */}
      <div className="relative hidden md:block w-full min-h-[50vh] md:min-h-[80vh]">
        <Image
          src="/images/dubai-skyline.png"
          alt="Dubai Skyline"
          fill
          priority
          className="object-cover object-bottom"
        />
        {/* top fade to white so text blends nicely */}
        <div className="pointer-events-none absolute left-0 top-0 h-[20vh] w-full bg-gradient-to-b from-white to-transparent" />
      </div>

      {/* ---------------- MOBILE & TABLET (below md) — text/button relative ---------------- */}
      <div className="relative md:hidden w-full min-h-[70vh]">
        {/* Text + CTA stays RELATIVE (not absolutely positioned) */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-16 pb-8">
          <motion.h1
            className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl text-gray-900"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            INVEST IN DUBAI
          </motion.h1>

          <motion.p
            className="mt-3 max-w-[26rem] text-base sm:text-lg text-gray-700"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            Make your Dubai Real Estate dream a reality
          </motion.p>

          <motion.div
            className="mt-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.35 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 rounded-full bg-[#9F3349] px-6 py-3 text-white font-medium shadow-lg transition hover:bg-black/90"
            >
              <span className="text-base">Explore Opportunities</span>
              <motion.span
                className="text-lg"
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                aria-hidden="true"
              >
                ➜
              </motion.span>
            </button>
          </motion.div>
        </div>

        {/* Background image fills the section behind the relative text */}
        <Image
          src="/images/dubai-skyline.png"
          alt="Dubai Skyline"
          fill
          priority
          className="object-cover object-bottom"
        />

        {/* Subtle gradient to help text readability on small screens */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-white/30 to-transparent" />
      </div>
    </section>
  );
}
