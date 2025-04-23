// src/assets/data/features.js
import objectDetection from '../lottie/object-detection.json';
import voiceFeedback from '../lottie/voice-feedback.json';
import arOverlay from '../lottie/ar-overlay.json';
import batterySaver from '../lottie/battery.json';

const features = [
  {
    title: '🎯 Real-Time Object Detection',
    desc: 'Instantly recognize objects around you using AI-powered vision, helping users navigate environments with awareness and confidence.',
    animation: objectDetection,
    color: 'from-indigo-500 to-purple-600',
  },
  {
    title: '🔊 Voice Feedback System',
    desc: 'Every detected object is read aloud using smart voice synthesis — bridging the communication gap with the real world.',
    animation: voiceFeedback,
    color: 'from-pink-500 to-red-500',
  },
  {
    title: '🧠 Intelligent AR Overlay',
    desc: 'Information is projected directly onto a transparent OLED display — allowing intuitive interaction without distraction.',
    animation: arOverlay,
    color: 'from-yellow-400 to-orange-500',
  },
  {
    title: '🔋 Ultra-Low Power Design',
    desc: 'Optimized for long use with efficient power management — perfect for continuous assistive support throughout the day.',
    animation: batterySaver,
    color: 'from-green-400 to-emerald-500',
  },
];

export default features;
