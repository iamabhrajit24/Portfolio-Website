"use client";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 relative border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <a href="#" className="text-xl font-display font-bold text-white">
            AC<span className="text-neon-cyan">.</span>
          </a>
        </div>
        
        <p className="text-sm text-gray-500 font-mono text-center md:text-left mb-4 md:mb-0">
          Designed & Built by Abhrajit Chakraborty &copy; {new Date().getFullYear()}
        </p>
        
        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
