import { motion } from 'framer-motion';
import { StarBackground } from './Components/StarBackground';
import { TechSphere } from './Components/TechSphere';
import { ProjectCard } from './Components/ProjectCard';
import { Contact } from './Components/Contact';
import { Hero } from './Components/Hero';
import projects from './projects.json';
import { Analytics } from '@vercel/analytics/react';
function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* 1) Gradient behind everything */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black via-purple-900 to-black" />

      {/* 2) Star canvas above the gradient, behind content */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <StarBackground />
      </div>

      {/* 3) Main content on top */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-white">
        <Hero />

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Digital Cosmos
          </h2>
          <div className="flex justify-center">
            <TechSphere />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-4xl font-bold text-center mb-16 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index}/>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">
            Contact
          </h2>
          <Contact />
        </motion.section>
      </div>
      <Analytics />
    </div>
  );
}

export default App;
