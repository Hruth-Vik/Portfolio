import React from 'react';
import { motion } from 'framer-motion';
import { HiHeart } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/hruthviknaik',
      color: 'hover:text-blue-500',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/hruthviknaik',
      color: 'hover:text-gray-400',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      href: 'https://twitter.com/hruthviknaik',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://instagram.com/hruthviknaik',
      color: 'hover:text-pink-500',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative py-12 bg-secondary-900/50 border-t border-secondary-800/50">
      <div className="container-width section-padding">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-mono font-bold text-2xl gradient-text cursor-pointer inline-block mb-4"
              onClick={scrollToTop}
            >
              &lt;HN/&gt;
            </motion.div>
            <p className="text-secondary-400 text-sm leading-relaxed">
              Building the future with clean code and innovative solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-lg bg-secondary-800/50 border border-secondary-700/50 text-secondary-400 ${social.color} transition-all duration-300 hover:border-primary-500/50`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-secondary-400 text-sm flex items-center justify-center md:justify-end gap-1">
              Made with 
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ['#ef4444', '#f97316', '#ef4444']
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <HiHeart className="w-4 h-4" />
              </motion.span>
              by Hruthvik Naik
            </p>
            <p className="text-secondary-500 text-xs mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8 pt-8 border-t border-secondary-800/50"
        >
          <p className="text-secondary-500 text-sm">
            Designed & Developed by <span className="text-primary-400 font-semibold">Hruthvik Naik</span>
          </p>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;