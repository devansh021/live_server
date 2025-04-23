import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tilt from 'react-parallax-tilt';
import { MessageCircle, HelpCircle, Heart, Users } from 'lucide-react';

const Contact = () => {
  const [queryType, setQueryType] = useState('general');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const queryOptions = [
    { value: 'general', label: 'General', icon: <HelpCircle className="w-5 h-5 mr-1" /> },
    { value: 'support', label: 'Support', icon: <Users className="w-5 h-5 mr-1" /> },
    { value: 'feedback', label: 'Feedback', icon: <Heart className="w-5 h-5 mr-1 text-pink-500" /> },
    { value: 'collab', label: 'Collaboration', icon: <MessageCircle className="w-5 h-5 mr-1 text-purple-400" /> },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const payload = { name, email, message, queryType };

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        e.target.reset(); // clear form
        setQueryType('general'); // reset type
      } else {
        alert(data.error || 'Submission failed.');
      }
    } catch (err) {
      alert('Something went wrong. Try again.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-6 py-20">
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.05}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="w-full max-w-4xl"
      >
        <div
          className="relative w-full backdrop-blur-xl bg-black/50 p-10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10 transition-transform duration-500"
          data-aos="zoom-in"
        >
          <h1 className="text-5xl font-extrabold text-center mb-6 text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text">
            Contact Us
          </h1>
          <p className="text-center text-gray-400 mb-12 text-lg font-medium">
            Got questions? Drop us a message and we'll get back to you soon.
          </p>

          {/* Query Type Selector */}
          <div className="mb-10 flex justify-center flex-wrap gap-4">
            {queryOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setQueryType(opt.value)}
                className={`flex items-center gap-1 px-4 py-2 rounded-full border transition duration-300 ${
                  queryType === opt.value
                    ? 'border-purple-500 bg-purple-500/20 text-white'
                    : 'border-gray-600 hover:border-purple-400 text-gray-400 hover:text-white'
                }`}
              >
                {opt.icon}
                {opt.label}
              </button>
            ))}
          </div>

          {/* Form */}
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                required
                className="peer w-full bg-transparent border border-gray-700 text-white rounded-lg px-6 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-transparent"
                placeholder="Your Name"
              />
              <label
                htmlFor="name"
                className="absolute left-6 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400"
              >
                Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                required
                className="peer w-full bg-transparent border border-gray-700 text-white rounded-lg px-6 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-transparent"
                placeholder="you@example.com"
              />
              <label
                htmlFor="email"
                className="absolute left-6 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400"
              >
                Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="peer w-full bg-transparent border border-gray-700 text-white rounded-lg px-6 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-transparent resize-none"
                placeholder="Your Message"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-6 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400"
              >
                Message
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 px-10 py-4 rounded-full text-white font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-pink-500/40 hover:scale-105"
              >
                🚀 Send Message
              </button>
            </div>
          </form>

          {/* Summary Bubble */}
          <div className="mt-10 text-center text-sm text-gray-400">
            ✨ You're reaching out about:{' '}
            <span className="text-purple-400 font-medium capitalize">{queryType}</span>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Contact;
