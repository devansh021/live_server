import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaTools, FaCrown, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

// Team data
const teams = {
  leader: [
    {
      name: '~Shriyukt Gupta~',
      role: 'Team Lead | AI/ML Developer',
      image: 'public/images/team/shri.jpg',
      linkedin: 'https://www.linkedin.com/in/shriyukt-gupta-12b665277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/shriyuktt?igsh=djNtZHl0cW9oMTNj',
    },
  ],
  software: [
    {
      name: '~Devansh Arya~',
      role: 'Full Stack Developer',
      image: 'public/images/team/devansh.jpg',
      linkedin: 'https://www.linkedin.com/in/devansh-arya-415378305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/devansh_arya021/profilecard/?igsh=MWkyMGZ5a3ZyYWFjaA==',
    },
    {
      name: '~Shubhanshi Negi~',
      role: 'AI/ML Developer',
      image: 'public/images/team/shubi.jpg',
      linkedin: 'https://www.linkedin.com/in/shubhanshi-negi-0a4352338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/shubhanshi_negi16?igsh=YXc5c3Rja2FuOHp0',
    },
    {
      name: '~Ankit Bisht~',
      role: 'Object Detection & Hardware Developer',
      image: 'public/images/team/ankit.jpg',
      linkedin: 'https://www.linkedin.com/in/ankit-bisht-8a0b372a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/divya.adhikari_87?igsh=OHR3czAyazE1d2p0',
    },
  ],
  hardware: [
    {
      name: '~Kritika Sharma~',
      role: 'Hardware Engineer',
      image: 'public/images/team/kritika.jpg',
      linkedin: 'https://www.linkedin.com/in/kritika-sharma-geu',
      instagram: 'https://www.instagram.com/kritikabairagi_03/profilecard/?igsh=MWltbXc0djdpY3Y1YQ==',
    },
    {
      name: '~Divya Adhikari~',
      role: 'AI/ML and Hardware Developer',
      image: 'public/images/team/divya.jpg',
      linkedin: 'https://www.linkedin.com/in/divya-adhikari-213269325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/divya.adhikari_87?igsh=OHR3czAyazE1d2p0',
    },
  ],
};

// Social Icons
const SocialIcons = ({ member }) => (
  <div className="flex gap-4 mt-4 justify-center text-white">
    {member.github && (
      <motion.a
        href={member.github}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.3 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FaGithub size={20} />
      </motion.a>
    )}
    {member.linkedin && (
      <motion.a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.3 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
      >
        <FaLinkedin size={20} />
      </motion.a>
    )}
    {member.instagram && (
      <motion.a
        href={member.instagram}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.3 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
      >
        <FaInstagram size={20} />
      </motion.a>
    )}
  </div>
);

// Card
const Card = ({ member, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
  >
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      className="w-[300px] h-[380px] bg-white/5 border border-pink-600 hover:border-pink-400 rounded-2xl p-6 text-center backdrop-blur-sm transition-all duration-300 shadow-[0_0_25px_#f472b6] hover:shadow-[0_0_40px_#f472b6] font-serif"
    >
      <div className="relative w-24 h-24 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 blur-lg opacity-70 animate-pulse z-0" />
        <img
          src={member.image}
          alt={member.name}
          className="relative z-10 w-full h-full rounded-full border-2 border-white shadow-md"
        />
      </div>
      <h3 className="text-lg font-semibold text-white">{member.name}</h3>
      <p className="text-pink-300 text-sm mb-2">{member.role}</p>
      <SocialIcons member={member} />
    </Tilt>
  </motion.div>
);

// Leader Card
const LeaderCard = ({ member }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      scale={1.05}
      className="w-[400px] h-[460px] bg-white/5 border border-yellow-400 hover:border-yellow-200 rounded-2xl p-10 flex flex-col items-center backdrop-blur-sm transition-all duration-300 shadow-[0_0_50px_#facc15] hover:shadow-[0_0_80px_#fde047]"
    >
      <div className="relative w-40 h-40 mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600 blur-2xl opacity-60 animate-pulse z-0" />
        <img
          src={member.image}
          alt={member.name}
          className="relative z-10 w-full h-full rounded-full border-4 border-white shadow-lg"
        />
      </div>
      <h3 className="text-3xl font-bold text-white">{member.name}</h3>
      <p className="text-yellow-300 text-lg mt-2">{member.role}</p>
      <SocialIcons member={member} />
    </Tilt>
  </motion.div>
);

// Team Section
const TeamSection = ({ title, icon, members, delayOffset = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: delayOffset, duration: 0.8 }}
    className="mb-20 text-center"
  >
    <h2 className="text-3xl font-bold text-pink-400 flex items-center justify-center gap-3 mb-10 font-serif">
      {icon} {title}
    </h2>
    <div className="flex flex-wrap justify-center gap-8">
      {members.map((member, i) => (
        <Card key={i} member={member} delay={0.2 * i + delayOffset} />
      ))}
    </div>
  </motion.div>
);

// Final Component
const OurTeamPage = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-6 py-16 text-white overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse font-serif">
          Meet Our Team 👨‍💻
        </h1>
        <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto font-serif">
          A team of passionate developers and engineers building innovative tech!
        </p>
      </motion.div>

      {/* Leader */}
      <div className="flex justify-center mb-28">
        <LeaderCard member={teams.leader[0]} />
      </div>

      {/* Software Team */}
      <TeamSection title="Software Team" icon={<FaLaptopCode />} members={teams.software} delayOffset={0.4} />

      {/* Hardware Team */}
      <TeamSection title="Hardware Team" icon={<FaTools />} members={teams.hardware} delayOffset={0.6} />
    </motion.div>
  );
};

export default OurTeamPage;
