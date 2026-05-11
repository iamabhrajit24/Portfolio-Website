"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Silhouette Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-10 overflow-hidden">
        <Image 
          src="/tech-silhouette.svg" 
          alt="Tech Professional Silhouette"
          width={800}
          height={1000}
          priority
          unoptimized
          className="h-[80vh] w-auto object-contain"
          style={{
            filter: 'drop-shadow(0 0 25px rgba(0,243,255,1)) drop-shadow(0 0 45px rgba(157,78,221,1))'
          }}
        />
      </div>

      {/* Static Background - Temporarily disabled 3D Canvas due to React Three Fiber compatibility issues */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-neon-blue font-mono mb-4 tracking-widest uppercase text-sm">Hello, World! I am</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Abhrajit</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan text-glow-purple">Chakraborty</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-4xl text-white font-semibold mb-4">
            Full Stack Developer | AI Solutions Architect
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Bridging the gap between scalable full-stack applications and applied AI intelligence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden w-full sm:w-auto"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-blue to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Download Resume</span>
          </a>
          <a
            href="#projects"
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-neon-purple transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
}
