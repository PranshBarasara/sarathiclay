"use client";

import { motion } from "framer-motion";

interface ChartDataPoint {
  label: string;
  value: number; // percentage (0-100)
}

interface ChartProps {
  data: ChartDataPoint[];
  title?: string;
}

export default function Chart({ data, title = "Chemical Analysis (%)" }: ChartProps) {
  return (
    <div className="w-full bg-[#111111]/85 rounded-2xl border border-gold/15 p-6 md:p-8 font-sans">
      {title && (
        <h4 className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-6 pb-4 border-b border-white/5">
          {title}
        </h4>
      )}
      
      <div className="flex flex-col gap-5">
        {data.map((item, idx) => (
          <div key={item.label} className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-xs tracking-wider">
              <span className="text-white font-medium">{item.label}</span>
              <span className="text-gold font-light font-mono">{item.value.toFixed(2)}%</span>
            </div>
            
            {/* Bar Track */}
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
              {/* Animated Progress Bar */}
              <motion.div
                className="absolute top-0 left-0 h-full bg-gold-gradient rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center text-[8px] md:text-[9px] tracking-[0.2em] text-mutedText uppercase">
        <span>XRF spectrometer analysis</span>
        <span>certified lab batch</span>
      </div>
    </div>
  );
}
