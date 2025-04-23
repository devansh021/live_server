import { motion } from "framer-motion";
import { Brain, Eye, Mic, Bluetooth, Laptop, Text } from "lucide-react";

export default function About() {
  const techItems = [
    { icon: <Eye className="w-12 h-12 text-[#00bcd4]" />, text: "Real-Time Object Detection" },
    { icon: <Mic className="w-12 h-12 text-[#f50057]" />, text: "Voice Feedback for Alerts" },
    { icon: <Text className="w-12 h-12 text-yellow-400" />, text: "OCR to Read Text Instantly" },
    { icon: <Brain className="w-12 h-12 text-purple-500" />, text: "AI-Based Analysis" },
    { icon: <Bluetooth className="w-12 h-12 text-blue-500" />, text: "Bluetooth Integration" },
    { icon: <Laptop className="w-12 h-12 text-green-400" />, text: "Web-App Synchronization" },
  ];

  return (
    <section className="relative w-full min-h-screen parallax-bg text-white px-6 py-20 sm:py-28 md:py-32 font-[Poppins] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#0f0f0f] via-black/90 to-black z-0" />
      <div className="relative z-10 px-6 sm:px-10 md:px-20 py-28">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto space-y-8"
        >
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00bcd4] to-[#f50057] drop-shadow-lg">
            Redefining Accessibility with AR
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Our <span className="text-[#00bcd4] font-semibold">AI-powered AR Glasses</span> combine cutting-edge technologies to assist those with{" "}
            <span className="text-[#f50057] font-semibold">visual</span> and{" "}
            <span className="text-[#f50057] font-semibold">hearing impairments</span>.
          </p>
        </motion.div>

        {/* Tech Cards Grid */}
        <div className="mt-24 max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
          >
            Technology Highlights
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {techItems.map((tech, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
                className="group bg-[#1f1f1f] p-6 rounded-xl shadow-xl border border-gray-800 hover:border-[#00bcd4]/60 hover:shadow-[0_0_25px_#00bcd4] hover:scale-105 transition-all duration-300 transform"
              >
                <div className="flex items-center space-x-4">
                  <div className="transition-transform group-hover:rotate-6 duration-300">{tech.icon}</div>
                  <p className="text-gray-200 text-lg font-medium">{tech.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
