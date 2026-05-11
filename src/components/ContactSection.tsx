"use client";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[150px] pointer-events-none translate-y-1/2"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm font-mono text-neon-cyan mb-4 tracking-widest uppercase">What's Next?</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">Get In Touch</h3>
          <p className="text-gray-400 text-lg">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold text-white mb-6">Contact Information</h4>
                <div className="space-y-6">
                  <a href="mailto:abhrajitchakraborty24@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-neon-cyan transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">abhrajitchakraborty24@gmail.com</p>
                    </div>
                  </a>
                  <a href="https://wa.me/916353862733" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-neon-cyan transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">WhatsApp</p>
                      <p className="font-medium">+91 6353862733</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <Github size={20} />, href: "https://github.com/iamabhrajit24" },
                    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/ContactAbhrajit" },
                  ].map((social, i) => (
                    <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="glass-card p-8 rounded-3xl space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                  placeholder="Abhrajit"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                  placeholder="Abhrajit@gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all resize-none"
                  placeholder="Hello Abhrajit..."
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-bold text-white flex items-center justify-center gap-2 hover:opacity-90 hover:shadow-[0_0_20px_rgba(157,78,221,0.5)] transition-all duration-300 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
