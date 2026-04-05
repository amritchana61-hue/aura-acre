import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [showHeadline, setShowHeadline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeadline(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/path-to-your-video.mp4"
        autoPlay
        loop
        muted
      />

      {/* Navbar Placeholder */}
      <nav className="absolute top-0 left-0 w-full p-4 text-white">
        Navbar
      </nav>

      {/* Headline */}
      {showHeadline && (
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white text-4xl font-bold"
        >
          Find what moves you
        </motion.h1>
      )}
    </section>
  );
};

export default Hero;