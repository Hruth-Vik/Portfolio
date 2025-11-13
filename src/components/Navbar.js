import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import HireMeModal from './HireMeModal';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hireOpen, setHireOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', path: '/' },
    { name: 'About', href: '#about', path: '/about' },
    { name: 'Skills', href: '#skills', path: '/skills' },
    { name: 'Projects', href: '#projects', path: '/projects' },
    { name: 'Experience', href: '#experience', path: '/experience' },
    { name: 'Contact', href: '#contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (location.pathname === '/') {
        const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (currentSection) setActiveSection(currentSection);
      } else {
        const key = location.pathname.replace('/', '') || 'home';
        setActiveSection(key);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

 const scrollToContact = () => {
   setHireOpen(true);
 };

 const scrollToSection = (href) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: href } });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsOpen(false);
  };

  return (<>
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary-900/90 backdrop-blur border-b border-secondary-800/70' : 'bg-transparent'}` }
    >
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-mono font-bold text-xl lg:text-2xl gradient-text cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            &lt;HN/&gt;
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === (location.pathname === '/' ? item.href.slice(1) : (item.path.replace('/', '') || 'home'));
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                >
                  {item.name}
                  {isActive && <span className="nav-underline" />}
                </button>
              );
            })}
            
            <button onClick={() => navigate('/resume')} className="btn-secondary">Resume</button>
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="btn-primary ml-2"
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-secondary-300 hover:text-white transition-colors"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-secondary-800 bg-secondary-900/95 backdrop-blur-md"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === (location.pathname === '/' ? item.href.slice(1) : (item.path.replace('/', '') || 'home'));
                  return (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.07 }}
                      onClick={() => scrollToSection(item.href)}
                      className={`nav-link block w-full text-left ${isActive ? 'nav-link-active' : ''}`}
                    >
                      {item.name}
                      {isActive && <span className="nav-underline" />}
                    </motion.button>
                  );
                })}
                
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  onClick={scrollToContact}
                  className="w-full mt-4 btn-primary"
                >
                  Hire Me
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
   </motion.nav>
   <HireMeModal open={hireOpen} onClose={() => setHireOpen(false)} />
   </>
  );
};

export default Navbar;