"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsDone(true), 650);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-between bg-[#070707] p-10 md:p-20 font-serif"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          <div className="w-full flex justify-between items-center text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase">
            <span>Sarathi Clay</span>
            <span>Est. 1999</span>
          </div>

          <div className="flex flex-col items-center max-w-lg text-center">
            {/* Elegant SVG mineral geometry */}
            <motion.svg
              width="60"
              height="60"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-8"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            >
              <polygon
                points="50,5 90,30 90,70 50,95 10,70 10,30"
                stroke="#C8A96B"
                strokeWidth="1.5"
                strokeDasharray="10 5"
              />
              <polygon
                points="50,20 75,35 75,65 50,80 25,65 25,35"
                stroke="#A77A3C"
                strokeWidth="1"
              />
              <circle cx="50" cy="50" r="6" fill="#C8A96B" />
            </motion.svg>

            <motion.h1
              className="text-2xl md:text-3xl tracking-[0.15em] uppercase text-white font-light leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Transforming <br />
              <span className="text-reveal-gold font-bold">Natural Resources</span> <br />
              Into Excellence
            </motion.h1>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="flex justify-between items-end text-sm text-gold">
              <span className="tracking-[0.2em] uppercase font-sans text-[9px] md:text-[10px] text-mutedText">
                Engineering Minerals / Custom Formulations
              </span>
              <span className="text-2xl md:text-3xl font-light font-sans tabular-nums">
                {progress}%
              </span>
            </div>
            
            {/* Premium Gold Loading Bar */}
            <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gold-gradient"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
