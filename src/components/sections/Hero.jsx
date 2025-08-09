"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Top White Section with Text */}
      <div className="relative z-10 flex flex-col items-center justify-center py-20 text-center px-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['Playfair_Display'] text-gray-900"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          INVEST IN DUBAI
        </motion.h1>

        <motion.p
          className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 max-w-lg"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          Where visionary investments meet infinite possibilities in the world&apos;s most dynamic
          financial hub
        </motion.p>

        <motion.div
          className="mt-6"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-medium shadow-lg hover:bg-gray-900 transition">
            Explore Opportunities
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ➜
            </motion.span>
          </button>
        </motion.div>
      </div>

      {/* Skyline Image Section */}
      <div className="relative w-full h-[80vh]">
        <Image
          src="/images/dubai-skyline.png" // Replace with your image
          alt="Dubai Skyline"
          fill
          className="object-cover object-bottom"
          priority
        />
        {/* Top fade to white */}
        <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}
