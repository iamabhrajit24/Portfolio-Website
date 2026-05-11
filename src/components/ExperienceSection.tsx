"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Dreamer Technologies",
      duration: "May 2026 - Present",
      description: "Developed and maintained custom CRM solutions. Collaborated with cross-functional teams to integrate APIs and optimize database queries.",
      tech: ["Angular", "SuiteCRM8", "MySQL", "PHP"]
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      duration: "Jan 2026 - Present",
      description: "Designed and built responsive websites for local businesses, improving their online presence and customer engagement.",
      tech: ["React", "Node.js", "Tailwind CSS", "MongoDB"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-neon-purple">04.</span> Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-transparent"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center justify-between mb-16 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[9px] md:left-1/2 top-0 md:top-1/2 w-4 h-4 bg-neon-purple rounded-full md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_15px_rgba(157,78,221,0.8)] z-10 border-2 border-background"></div>

              <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                <div className="glass-card p-8 rounded-3xl hover:border-neon-purple/50 transition-colors duration-300 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/5 rounded-full blur-2xl group-hover:bg-neon-purple/20 transition-colors duration-500"></div>
                  
                  <div className={`flex items-center gap-3 mb-2 ${i % 2 !== 0 ? "md:justify-end" : ""}`}>
                    <Briefcase size={18} className="text-neon-purple" />
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  </div>
                  
                  <div className={`flex items-center gap-2 mb-4 text-sm font-mono text-gray-400 ${i % 2 !== 0 ? "md:justify-end" : ""}`}>
                    <span className="text-neon-cyan">{exp.company}</span>
                    <span>|</span>
                    <span>{exp.duration}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className={`flex flex-wrap gap-2 ${i % 2 !== 0 ? "md:justify-end" : ""}`}>
                    {exp.tech.map((tech, j) => (
                      <span key={j} className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-300 border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
