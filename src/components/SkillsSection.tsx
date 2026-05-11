"use client";
import { motion } from "framer-motion";

const skills = [
  { category: "Frontend & Full Stack", items: ["MERN Stack", "React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Python (FastAPI)", "Node.js", "Express", "PHP", "Django"] },
  { category: "Database & Automation", items: ["MongoDB", "MySQL", "n8n Automation", "Redis"] },
  { category: "AI / ML", items: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "OpenCV"] },
  { category: "Tools & DevOps", items: ["Git", "Docker", "Linux", "Figma"] },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-right flex flex-col items-end"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Skills & Expertise <span className="text-neon-cyan">.02</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-l from-neon-cyan to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-neon-cyan/20 transition-colors duration-500"></div>
              
              <h3 className="text-2xl font-display font-semibold mb-6 text-white group-hover:text-neon-cyan transition-colors">
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, j) => (
                  <span
                    key={j}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-neon-cyan/50 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
