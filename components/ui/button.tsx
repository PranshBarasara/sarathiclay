"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ComponentPropsWithoutRef<typeof motion.button> {
  variant?: "primary" | "secondary" | "outline";
  children?: React.ReactNode;
}

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Smooth magnetic pull limit
    setPosition({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center rounded-full text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase transition-all duration-350 select-none overflow-hidden px-6 md:px-8 py-3.5 md:py-4.5 font-bold";
  
  const variants = {
    primary: "bg-gold-gradient text-black hover:shadow-[0_0_20px_rgba(200,169,107,0.4)] border border-transparent",
    secondary: "bg-[#111111] text-white hover:bg-white hover:text-black border border-gold/20 hover:border-transparent",
    outline: "bg-transparent text-white border border-gold/30 hover:border-gold hover:shadow-[0_0_15px_rgba(200,169,107,0.2)]",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.1 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "outline" && (
        <div className="absolute inset-0 -translate-x-full hover:translate-x-0 bg-gold/5 transition-transform duration-500" />
      )}
    </motion.button>
  );
}
