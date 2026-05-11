"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Only run on client
    setIsMounted(true);
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName?.toLowerCase() === 'a' || 
          (e.target as HTMLElement).tagName?.toLowerCase() === 'button' ||
          (e.target as HTMLElement).closest('a') ||
          (e.target as HTMLElement).closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Render placeholder on server to avoid hydration mismatch
  if (!isMounted) {
    return <div className="hidden md:block" aria-hidden="true" />;
  }

  return (
    <div className="hidden md:block">
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-neon-blue rounded-full pointer-events-none z-[9999] mix-blend-screen shadow-[0_0_10px_#00f3ff]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 40, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-neon-blue rounded-full pointer-events-none z-[9998] mix-blend-screen"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(0, 243, 255, 0.1)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.5 }}
      />
    </div>
  );
}
