"use client";
import { motion } from "framer-motion";
import { Trophy, Award, Target, Star } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    { icon: <Trophy />, title: "Hackathon Participant", desc: "SIH 2024 (Smart India Hackathon) & Synapse 2024", count: "2+" },
    { icon: <Award />, title: "Certifications", desc: "Edunet, Udemy, Microsoft, SAP, and Google Cloud", count: "2-3+" },
    { icon: <Target />, title: "MUN Attended", desc: "Participant in Model UN", count: "1" },
    { icon: <Star />, title: "Independent Project Developer", desc: "Developing real-world and research projects", count: "5+" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achieve, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl text-center group hover:bg-white/5 transition-colors duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-neon-blue/10 text-neon-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-neon-blue group-hover:text-black transition-all duration-300">
                {achieve.icon}
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-2">{achieve.count}</h3>
              <h4 className="text-lg font-semibold text-gray-200 mb-2">{achieve.title}</h4>
              <p className="text-sm text-gray-400">{achieve.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
