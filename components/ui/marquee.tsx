import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

export default function Marquee({ children, direction = "left", pauseOnHover = true }: MarqueeProps) {
  return (
    <div className="relative w-full overflow-hidden py-4 select-none">
      {/* Edge gradient overlays for smooth fade-in/fade-out */}
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#070707] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#070707] to-transparent z-10 pointer-events-none" />
      
      <div className={`flex w-max items-center gap-12 animate-marquee-slow ${
        direction === "right" ? "[animation-direction:reverse]" : ""
      } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}>
        <div className="flex items-center gap-12">
          {children}
        </div>
        <div className="flex items-center gap-12">
          {children}
        </div>
      </div>
    </div>
  );
}
