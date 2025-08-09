'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = ['hero', 'excellence', 'advantages', 'projects', 'invest', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm py-4 px-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'shadow-md py-3' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="text-xl font-bold text-primary" whileHover={{ scale: 1.05 }}>
        Dubai Estates
      </motion.div>
      <div className="hidden md:flex space-x-8">
        {['hero', 'excellence', 'advantages', 'projects', 'invest', 'contact'].map((section) => (
          <motion.button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`capitalize font-medium ${activeSection === section ? 'text-primary' : 'text-gray-medium'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {section === 'hero' ? 'Home' : section}
          </motion.button>
        ))}
      </div>
      <motion.button
        className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => scrollToSection('invest')}
      >
        Invest Now
      </motion.button>
    </motion.nav>
  );
}

export default Navigation;
