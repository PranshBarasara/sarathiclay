"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 45, stiffness: 200, mass: 0.6 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150); // half of glow size (300px)
      mouseY.set(e.clientY - 150);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isMounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 h-[300px] w-[300px] rounded-full mix-blend-screen"
      style={{
        x: glowX,
        y: glowY,
        opacity: isVisible ? 0.15 : 0,
        background: "radial-gradient(circle, rgba(200, 169, 107, 0.45) 0%, rgba(200, 169, 107, 0.05) 50%, rgba(0,0,0,0) 100%)",
        filter: "blur(20px)",
      }}
      transition={{ opacity: { duration: 0.4 } }}
    />
  );
}
