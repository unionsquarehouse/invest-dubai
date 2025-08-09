"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// Animation variants for Framer Motion
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const FOOTER_LINKS = [
  { name: 'FAQ', href: '#' },
  { name: 'Term of Service', href: '#' },
  { name: 'Privacy Policy', href: '#' },
];

const SOCIAL_LINKS = [
  { icon: <FaFacebookF />, href: '#' },
  { icon: <FaTwitter />, href: '#' },
  { icon: <FaInstagram />, href: '#' },
  { icon: <FaLinkedinIn />, href: '#' },
];

function Footer() {
  return (
    <footer className="w-full bg-black text-white font-inter">
      {/* Main Footer Section */}
      <div className="w-[80vw] mx-auto px-6 py-16 sm:py-20 lg:py-24">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {/* Left Column: Get in Touch & Newsletter */}
          <motion.div className="flex flex-col gap-6" variants={fadeInUp}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-satoshi">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-lg">
              Have questions or need assistance? We're here to help!
            </p>

            {/* Newsletter Subscription */}
            <motion.div
              className="mt-4 flex flex-col sm:flex-row gap-4"
              whileHover={{ scale: 1.01 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto flex-1 bg-gray-800 text-gray-300 placeholder-gray-500 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 hover:bg-gray-800 text-gray-500 hover:text-white font-semibold rounded-xl px-8 py-4 transition-colors"
              >
                Subscribe
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Info & Socials */}
          <motion.div className="flex flex-col md:flex-row gap-8 lg:gap-16 justify-between" variants={staggerContainer}>
            {/* Contact Details */}
            <motion.div className="flex flex-col gap-8" variants={fadeInUp}>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold uppercase text-gray-500">Phone</span>
                <a href="tel:[303] 873-2983" className="text-lg font-medium hover:text-blue-500 transition-colors">
                  [303] 873-2983
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold uppercase text-gray-500">Email</span>
                <a href="mailto:hallo.Cultivo@gmail.com" className="text-lg font-medium hover:text-blue-500 transition-colors">
                  hallo.Cultivo@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Social Media Links */}
            <motion.div className="flex flex-col gap-6" variants={fadeInUp}>
              <span className="text-sm font-bold uppercase text-gray-500">Follow Us</span>
              <div className="flex items-center gap-4">
                {SOCIAL_LINKS.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="text-gray-400 hover:text-blue-500 transition-all text-xl"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; Copyright 2025, All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;