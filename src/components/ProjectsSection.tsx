"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "NeuroGuard AI",
    description: "Clinical decision support for 3D MRI brain tumor segmentation using Swin-UNETR architecture.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80&fm=webp",
    tags: ["Python", "PyTorch", "Swin-UNETR", "AI Research"],
    github: "",
    live: "",
    featured: true,
  },
  {
    title: "Best Fire Services",
    description: "Deployed freelance platform for fire safety equipment at bestfireservices.in",
    image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?w=800&q=80",
    tags: ["HTML", "CSS", "JavaScript", "Freelance"],
    github: "",
    live: "https://bestfireservices.in",
    featured: true,
  },
  {
    title: "Hospital Bed Management System",
    description: "Full-stack medical resource management solution built with the MERN Stack.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80&fm=webp",
    tags: ["MERN Stack", "React", "Node.js", "MongoDB"],
    github: "https://github.com/iamabhrajit24/Hospital-Bed-Management",
    live: "",
    featured: true,
  },
  {
    title: "Sign Language Recognition Master",
    description: "AI-powered real-time sign language translation.",
    image: "/sign-language-icon.svg",
    tags: ["Python", "Computer Vision", "AI", "Real-time"],
    github: "https://github.com/iamabhrajit24/Sign-Language-Recognition",
    live: "",
    featured: true,
  }
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-neon-blue">03.</span> Featured Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass-card rounded-3xl overflow-hidden relative"
            >
              <div className="h-60 overflow-hidden relative">
                <div className="absolute inset-0 bg-neon-blue/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-8 relative z-20 bg-background/80 backdrop-blur-md border-t border-white/5 h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 shrink-0">
                    {project.github && (
                      <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} className="text-gray-400 hover:text-neon-blue transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-xs font-mono text-neon-purple px-2 py-1 bg-neon-purple/10 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="#" className="inline-flex items-center gap-2 text-white hover:text-neon-blue font-display font-medium transition-colors group">
            View Full Archive
            <ArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
