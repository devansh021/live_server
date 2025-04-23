import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

import ModelViewer from '../assets/components/ModelViewer';

const features = [
  {
    title: '🎯 Real-Time Object Detection',
    desc: 'Instantly recognize objects around you using AI-powered vision, helping users navigate environments with awareness and confidence.',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    title: '🔊 Voice Feedback System',
    desc: 'Every detected object is read aloud using smart voice synthesis — bridging the communication gap with the real world.',
    color: 'from-pink-500 to-red-500',
  },
  {
    title: '🧠 Intelligent AR Overlay',
    desc: 'Information is projected directly onto a transparent OLED display — allowing intuitive interaction without distraction.',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    title: '🔋 Ultra-Low Power Design',
    desc: 'Optimized for long use with efficient power management — perfect for continuous assistive support throughout the day.',
    color: 'from-green-400 to-emerald-500',
  },
];

const FeaturesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-black text-white px-6 xl:px-24 pt-16 pb-24 overflow-x-hidden">
      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 leading-tight">
          Unlock the Magic of Assistive AR
        </h1>
        <p className="mt-6 text-lg sm:text-xl xl:text-2xl text-gray-300 max-w-3xl mx-auto tracking-wide leading-snug font-light text-balance">
          Our glasses are more than tech — they're a lifeline, a guide, a voice. Dive into each feature below and see how we’re changing lives.
        </p>
      </div>

      {/* 3D Model Section */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        className="relative w-full max-w-5xl mx-auto mb-20 px-2"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-3xl overflow-hidden shadow-[0_0_60px_#3b82f680] border border-cyan-600 bg-black"
        >
          <h2
            className="text-4xl sm:text-5xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
            data-aos="fade-up"
          >
            Explore the AR Glasses in 3D
          </h2>
          <ModelViewer />
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-br ${feature.color} p-8 rounded-3xl shadow-xl transform transition-all duration-500`}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.06, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
          >
            <h2 className="text-2xl xl:text-3xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-base xl:text-lg text-white/90 leading-relaxed tracking-wide font-light">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* AR Glasses Technology Section */}
      <div className="mt-24">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
          The Technology Behind the AR Glasses
        </h2>
        <p className="mt-6 text-lg sm:text-xl xl:text-2xl text-gray-300 text-center mx-auto max-w-3xl">
          These AR glasses combine cutting-edge technologies to enhance daily life for deaf-blind individuals. With real-time object detection, intelligent AR overlays, and voice feedback, they offer a truly immersive assistive experience.
        </p>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Display Technology */}
          <div className="bg-gray-800 p-8 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-gradient-to-r from-cyan-500 to-blue-600">Display Technology</h3>
            <p className="text-lg text-gray-300">
              The micro-OLED transparent display ensures users see the real world while being presented with critical information directly in their line of sight.
            </p>
          </div>

          {/* Object Detection */}
          <div className="bg-gray-800 p-8 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-gradient-to-r from-indigo-500 to-purple-600">Object Detection</h3>
            <p className="text-lg text-gray-300">
              Our AI-powered object detection system recognizes the surroundings and provides real-time verbal descriptions of objects detected, making users more aware of their environment.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Connectivity */}
          <div className="bg-gray-800 p-8 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-gradient-to-r from-yellow-400 to-orange-500">Bluetooth Connectivity</h3>
            <p className="text-lg text-gray-300">
              With Bluetooth 5.0, our glasses easily sync with other smart devices, making them an integrated part of your connected life.
            </p>
          </div>

          {/* Voice Feedback */}
          <div className="bg-gray-800 p-8 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-gradient-to-r from-red-500 to-pink-500">Voice Feedback</h3>
            <p className="text-lg text-gray-300">
              Voice synthesis provides clear, immediate feedback, describing the world around the user to enhance their navigation and awareness.
            </p>
          </div>
        </div>
      </div>

      {/* Comparison with Traditional Devices */}
      <div className="mt-24 bg-gray-900 p-12 rounded-3xl shadow-lg">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          Comparing AR Glasses to Traditional Assistive Devices
        </h2>
        <p className="mt-6 text-lg sm:text-xl xl:text-2xl text-gray-300 text-center mx-auto max-w-3xl">
          Unlike traditional devices like white canes or guide dogs, our AR glasses provide detailed, real-time feedback, enabling users to navigate more effectively in various environments.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-24" data-aos="fade-up">
        <p className="text-xl sm:text-2xl text-gray-400 font-light">And this is just the beginning.</p>
        <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mt-6 animate-pulse">
          Your future is one glance away 👓✨
        </h2>
      </div>
    </div>
  );
};

export default FeaturesPage;
