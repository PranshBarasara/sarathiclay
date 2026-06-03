import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export default function Card({ children, className = "", glow = true, ...props }: CardProps) {
  return (
    <div
      className={`glassmorphic glassmorphic-hover rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-500 group ${className}`}
      {...props}
    >
      {/* Dynamic Gold Top Glow Accent Line */}
      {glow && (
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold/45 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-750 origin-center" />
      )}
      
      {/* Background Soft Golden Light on Hover */}
      <div className="absolute -inset-px bg-gradient-to-br from-gold/5 via-transparent to-bronze/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
