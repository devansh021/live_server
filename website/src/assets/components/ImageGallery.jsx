import React from 'react';
import { motion } from 'framer-motion';

const ImageGallery = () => {
  const mediaItems = [
    { type: 'image', src: '/images/image1.jpg' },
    { type: 'image', src: '/images/image2.jpg' },
    { type: 'image', src: '/images/image3.jpg' },
    { type: 'video', src: '/videos/vdo1.mp4' },
    { type: 'image', src: '/images/image4.jpg' },
    { type: 'video', src: '/videos/vdo2.mp4' },
  ];

  const images = mediaItems.filter(item => item.type === 'image');
  const videos = mediaItems.filter(item => item.type === 'video');

  return (
    <div className="py-24 bg-gradient-to-b from-[#0e0e0e] to-[#2c2c2c] text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12"
      >
        Explore the Vision
      </motion.h2>

      {/* IMAGES SCROLL ROW */}
      <div className="container mx-auto px-6 overflow-x-auto">
        <div className="flex gap-6">
          {images.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 4px 20px rgba(0, 255, 255, 0.3)',
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="min-w-[300px] h-64 bg-white/10 border border-white/20 rounded-xl shadow-lg overflow-hidden"
            >
              <img src={item.src} alt={`Gallery ${i}`} className="object-cover w-full h-full" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* VIDEO SECTION BELOW */}
      <div className="mt-20 flex flex-col items-center gap-12 px-6">
        {videos.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 4px 20px rgba(0, 255, 255, 0.3)',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl rounded-2xl overflow-hidden border border-white/20 shadow-lg"
          >
            <video src={item.src} controls className="w-full h-auto" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
