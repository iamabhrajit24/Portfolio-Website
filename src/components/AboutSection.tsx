"use client";
import { motion } from "framer-motion";
import { Code, Cpu, Globe, Rocket } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { label: "Developer & Learner", value: "Active" },
    { label: "Projects Completed", value: "5+" },
    { label: "Freelance Projects", value: "Real-World" },
    { label: "& AI Focus", value: "Full-Stack" },
  ];

  const features = [
    { icon: <Globe size={24} />, title: "Web Dev", desc: "Building scalable, responsive, and modern web applications." },
    { icon: <Cpu size={24} />, title: "AI & ML", desc: "Integrating intelligent models to solve complex problems." },
    { icon: <Rocket size={24} />, title: "Automation", desc: "Streamlining workflows to save time and reduce errors." },
    { icon: <Code size={24} />, title: "Clean Code", desc: "Writing maintainable, efficient, and well-documented code." },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-neon-purple">01.</span> About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6 font-light">
              Hello! I'm <span className="text-white font-medium">Abhrajit Chakraborty</span>, a passionate Full Stack Developer and AI enthusiast. I enjoy creating things that live on the internet, from simple websites to complex web applications and AI-driven solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 font-light">
              My journey started with a curiosity for how things work, which quickly turned into a deep passion for software engineering. I strive to build highly performant, accessible, and visually stunning digital experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="glass-card p-4 rounded-2xl text-center">
                  <h4 className="text-xl md:text-2xl font-display font-bold text-neon-blue mb-1">{stat.value}</h4>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 text-neon-purple group-hover:scale-110 group-hover:text-neon-cyan transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
