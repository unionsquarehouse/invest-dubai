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
  { name: 'Term of Service', href: 'https://ushre.com/terms-condition' },
  { name: 'Privacy Policy', href: 'https://ushre.com/privacy-policy' },
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
     

      {/* Bottom Bar */}
      <div className="">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; Copyright 2025, All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
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