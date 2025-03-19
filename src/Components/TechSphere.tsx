import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPython,
  SiCplusplus, SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiTailwindcss, SiBootstrap, SiMongodb, SiPostgresql, SiGit,
  SiGithub, SiDocker, SiRedis, SiRedux, SiPostman, SiJest
} from 'react-icons/si';
import { BiCloud } from 'react-icons/bi';

const icons = [
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPython,
  SiCplusplus, SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiTailwindcss, SiBootstrap, SiMongodb, SiPostgresql, SiGit,
  SiGithub, SiDocker, SiRedis, SiRedux, SiPostman, BiCloud,
  SiJest
];

export const TechSphere = () => {
  const containerRef = useRef<HTMLDivElement>(null);
 
  const positionsRef = useRef<{ x: number; y: number; z: number }[]>([]);

  const computePositions = () => {
    const container = containerRef.current;
    if (!container) return;
    const { width, height } = container.getBoundingClientRect();
    const radius = (Math.min(width, height) / 2) * 0.8;
    const total = icons.length;
    const positions = [];
    for (let i = 0; i < total; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / total);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      positions.push({ x, y, z });
    }
    positionsRef.current = positions;
  };

  useEffect(() => {
    computePositions();
    const handleResize = () => computePositions();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let animationFrameId: number;
    let angle = 0;
    const animate = () => {
      angle += 0.005;
      const iconsElements = container.children;
      const { width, height } = container.getBoundingClientRect();
      const currentRadius = (Math.min(width, height) / 2) * 0.8;
      const total = iconsElements.length;
      for (let i = 0; i < total; i++) {
        const icon = iconsElements[i] as HTMLElement;
        const pos = positionsRef.current[i];
        const rotatedX = pos.x * Math.cos(angle) - pos.z * Math.sin(angle);
        const rotatedZ = pos.x * Math.sin(angle) + pos.z * Math.cos(angle);
        const y = pos.y;
        const scale = (rotatedZ + currentRadius) / (2 * currentRadius);
        const opacity = Math.max(0.3, scale);
        icon.style.transform = `translate3d(${rotatedX}px, ${y}px, ${rotatedZ}px) scale(${scale})`;
        icon.style.opacity = opacity.toString();
        icon.style.zIndex = `${Math.floor(scale * 100)}`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] flex items-center justify-center"
      style={{ perspective: '1000px' }}
    >
      <div
        ref={containerRef}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {icons.map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ color: `hsl(${(index * 360) / icons.length}, 70%, 60%)` }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>
    </div>
  );
};


