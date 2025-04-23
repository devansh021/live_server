import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGlasses, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = ['Home', 'About', 'Features', 'OurTeam', 'Contact'];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  let lastScrollY = window.scrollY;

  const controlNavbar = () => {
    if (window.scrollY < lastScrollY) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: showNavbar ? 0 : -80 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl shadow-xl border-b border-cyan-500/30"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="flex items-center gap-3 text-3xl font-bold text-white glitch"
          >
            <FaGlasses className="text-cyan-400 animate-pulse" />
            <span className="glitch-text">
              G<span aria-hidden="true">L</span>I<span aria-hidden="true">T</span>C<span aria-hidden="true">H</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10">
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Link
                to={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                className="relative text-white font-semibold tracking-wide hover:text-cyan-400 transition-all duration-300 group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl p-2 rounded-full border border-cyan-400 text-cyan-400 bg-black/40 hover:scale-110 transition-all"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden overflow-hidden bg-black/70 backdrop-blur-lg text-white text-center py-6 space-y-4 shadow-inner border-t border-cyan-500/30"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <Link
                  to={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                  className="block text-lg font-medium hover:text-cyan-400 transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
