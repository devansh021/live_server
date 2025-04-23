// src/assets/components/Features.jsx
import React from 'react';
import Lottie from 'lottie-react';
import objectDetection from '../lottie/object-detection.json';
import signLanguage from '../lottie/sign-language.json';
import speechToText from '../lottie/speech-to-text.json';
import batterySaver from '../lottie/battery.json';

const features = [
  {
    title: '✅ Real-Time Object Detection',
    desc: 'Instantly recognize objects using AI-powered vision.',
    animation: objectDetection,
    color: 'from-indigo-500 to-purple-600',
  },
  {
    title: '🤟 Sign Language Recognition',
    desc: 'Accurately interprets hand gestures into digital text.',
    animation: signLanguage,
    color: 'from-pink-500 to-red-500',
  },
  {
    title: '🎙 Speech to Text Converter',
    desc: 'Translates speech into readable text instantly.',
    animation: speechToText,
    color: 'from-yellow-400 to-orange-500',
  },
  {
    title: '🔋 Ultra-Low Power Latency',
    desc: 'Optimized for longer battery life and faster processing.',
    animation: batterySaver,
    color: 'from-green-400 to-emerald-500',
  },
];

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br ${feature.color} text-white rounded-2xl p-6 shadow-xl transform transition hover:scale-105 hover:rotate-1`}
        >
          <Lottie
            animationData={feature.animation}
            loop
            className="h-40 mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
          <p className="text-sm">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
