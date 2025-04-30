"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  title: string
  description: string
  image: string
  skills: string[]
  github: string
  demo?: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative h-[500px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card outer glow */}
      <div
        className="absolute -inset-0.5 rounded-2xl opacity-75 group-hover:opacity-100 transition duration-500 blur-sm"
        style={{
          background: "linear-gradient(45deg, #6366f1, #8b5cf6, #d946ef)",
          filter: "blur(8px)",
        }}
      />

      {/* Card container */}
      <div className="relative h-full rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 shadow-xl">
        {/* Project image with parallax effect */}
        <div className="h-1/2 overflow-hidden">
          <motion.div
            className="relative w-full h-full"
            animate={{
              y: isHovered ? -10 : 0,
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.7 }}
          >
            {/* Image */}
            <img
              src={project.image || `/placeholder.svg?height=600&width=800`}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90" />

            {/* Project title */}
            <motion.h3
              className="absolute bottom-4 left-6 right-6 text-2xl font-bold text-white"
              animate={{
                y: isHovered ? -10 : 0,
                opacity: isHovered ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>
          </motion.div>
        </div>

        {/* Project details */}
        <div className="relative h-1/2 p-6 flex flex-col">
          {/* Title (visible only on hover) */}
          <motion.h3
            className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-auto">
            {project.skills.map((skill, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs font-medium rounded-full text-purple-200 bg-purple-900/30 border border-purple-700/30 backdrop-blur-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 mt-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-white bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition duration-300"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <Github size={16} />
              <span className="font-medium">GitHub</span>
            </motion.a>

            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <ExternalLink size={16} />
                <span className="font-medium">Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>

        {/* Animated border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            boxShadow: "0 0 40px 5px rgba(139, 92, 246, 0.3) inset",
          }}
        />
      </div>
    </motion.div>
  )
}
