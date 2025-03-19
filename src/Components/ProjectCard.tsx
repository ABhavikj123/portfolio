import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Github, Globe, ChevronDown, ChevronUp } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  skills: string[];
  github: string;
  demo?: string;
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

export const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();

  const toggleExpand = useCallback(
    (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
      e.stopPropagation();
      if (isMobile) setIsExpanded(prev => !prev);
    },
    [isMobile]
  );

  return (
    <motion.div
      className="group relative w-full rounded-xl overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={isMobile ? toggleExpand : undefined}
    >
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 p-4 sm:p-6 flex flex-col justify-end min-h-[200px] sm:min-h-[300px] md:min-h-[400px]">
        <motion.h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
          {project.title}
        </motion.h3>
        <motion.p className="text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </motion.p>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobile ? (isExpanded ? 1 : 0) : (isHovered ? 1 : 0),
            height: isMobile ? (isExpanded ? 'auto' : 0) : (isHovered ? 'auto' : 0),
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20"
            >
              <Github size={18} /> GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 hover:bg-blue-500/30"
              >
                <Globe size={18} /> Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {isMobile && (
          <motion.button
            className="mt-4 flex items-center justify-center text-white"
            onClick={toggleExpand}
          >
            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};
