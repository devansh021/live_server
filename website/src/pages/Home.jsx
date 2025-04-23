import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { FaRobot, FaEye, FaVolumeUp } from 'react-icons/fa';

// Particle background config
const particlesConfig = {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    shape: { type: 'circle' },
    size: { value: 5 },
    move: { enable: true, speed: 1.5, direction: 'none', random: true },
    line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.3 },
  },
};

// HERO SECTION
const HeroSection = () => (
  <div className="relative min-h-screen bg-gradient-to-r from-[#1c1c1c] to-[#6a4dff] flex items-center justify-center overflow-hidden">
    <Particles className="absolute top-0 left-0 w-full h-full z-0" options={particlesConfig} />
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="z-10 text-center text-white px-6 py-12 bg-gradient-to-br from-[#141414] via-[#222222] to-[#333333] backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 max-w-4xl mx-auto"
    >
      <motion.h1
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-5xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6"
      >
        AR Glasses for a More Inclusive World
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg md:text-xl text-gray-200 mb-8"
      >
        Redefining accessibility with AI, AR, and voice feedback for visually impaired individuals.
      </motion.p>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#features"
        className="inline-block bg-gradient-to-r from-teal-500 to-indigo-500 text-white py-4 px-8 rounded-full font-semibold shadow-lg transition-all"
      >
        Discover Features
      </motion.a>
    </motion.div>
  </div>
);

// FEATURES SECTION
const FeaturesSection = () => {
  const features = [
    { icon: <FaEye />, title: 'Object Detection', desc: 'Identifying objects in real-time to assist visually impaired users.' },
    { icon: <FaVolumeUp />, title: 'Voice Feedback', desc: 'Voice-assisted guidance for seamless interaction.' },
    { icon: <FaRobot />, title: 'Gesture Support', desc: 'Control your device with simple hand movements.' },
  ];

  return (
    <div id="features" className="py-24 bg-[#121212] text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16"
      >
        Revolutionary Features
      </motion.h2>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            className="bg-gradient-to-br from-[#333333] to-[#444444] p-8 rounded-xl shadow-xl text-center border border-white/10 hover:scale-105 transition-transform"
          >
            <div className="text-5xl text-teal-400 mb-4">{f.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-300">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// IMAGE GALLERY SECTION - Revamped UI
const ImageGallery = () => {
  const mediaItems = [
    { type: 'image', src: '/images/image1.jpg',  },
    { type: 'image', src: '/images/image2.jpg', },
    { type: 'image', src: '/images/image3.jpg',  },
    { type: 'video', src: '/videos/vdo1.mp4',  },
    { type: 'image', src: '/images/image4.jpg',  },
    { type: 'video', src: '/videos/vdo2.mp4',  },
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-[#0e0e0e] to-[#2c2c2c] text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16"
      >
        Explore the Vision
      </motion.h2>

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {mediaItems.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative group bg-white/5 border border-white/20 rounded-xl overflow-hidden shadow-lg"
          >
            {item.type === 'image' ? (
              <img src={item.src} alt={`Image ${i}`} className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105" />
            ) : (
              <video src={item.src} controls className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105" />
            )}
            <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-sm px-4 py-2 backdrop-blur-md">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ABOUT SECTION
const AboutSection = () => (
  <div className="py-24 bg-[#121212] text-white">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl md:text-5xl font-extrabold text-center mb-10"
    >
      Powered by NPCs
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed"
    >
      Our revolutionary AR glasses harness the power of AI to detect and analyze your surroundings,
      providing visually impaired individuals with real-time feedback, voice assistance, and seamless interaction.
    </motion.p>
  </div>
);

// MAIN HOME COMPONENT
const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ImageGallery />
    </div>
  );
};

export default Home;
