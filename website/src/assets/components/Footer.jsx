// src/assets/components/Footer.jsx
import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-12 shadow-xl border-t border-gray-700 overflow-hidden">
      {/* Floating Scroll-to-Top Button */}
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-pink-500 text-white shadow-lg hover:bg-pink-600 transition duration-300"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          ↑
        </motion.button>
      )}

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            GLITCH
          </h1>
          <p className="text-gray-400 text-sm mt-1">© {currentYear} All rights reserved</p>
        </motion.div>

        <motion.div
          className="flex space-x-8 text-3xl text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="hover:text-pink-400"
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Designed with ❤️ NPC's #Glitch Out From The Matrix
      </motion.div>
    </footer>
  );
};

export default Footer;
  