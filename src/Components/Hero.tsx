
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center mb-20 relative"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <div className="w-full h-full bg-gradient-radial from-blue-500 via-purple-600 to-pink-500 animate-gradient-x"></div>
      </motion.div>

      <motion.h1
        className="text-6xl md:text-8xl font-bold mb-4 font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
      >
        Bhavik Joshi
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl font-light mb-6 text-blue-200"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Passionate about building impactful web applications.
      </motion.p>

      <motion.div
        className="text-2xl md:text-4xl font-light text-blue-200 mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6, type: 'spring', stiffness: 120 }}
      >
        <TypeAnimation
          sequence={[
            'Full Stack Developer',
            2000,
            'Backend Developer',
            2000,
            'Frontend Developer',
            2000,
          ]}
          repeat={Infinity}
          wrapper="span"
          className="font-mono"
        />
      </motion.div>

      <motion.div
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transition duration-300"
        >
          Download Resume
        </a>
      </motion.div>
    </motion.div>
  );
};
