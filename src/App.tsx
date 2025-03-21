import { motion } from 'framer-motion';
import { StarBackground } from './Components/StarBackground';
import { TechSphere } from './Components/TechSphere';
import { ProjectCard } from './Components/ProjectCard';
import { Contact } from './Components/Contact';
import { Hero } from './Components/Hero';
import projects from './projects.json';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white overflow-x-hidden">
      <StarBackground />

      <div className="container mx-auto px-4 py-20 relative z-20">
      
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
              <ProjectCard key={index} project={project} />
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
    </div>
  );
}

export default App;