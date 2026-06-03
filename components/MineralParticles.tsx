"use client";

import { useEffect, useRef } from "react";

export default function MineralParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
      const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      angle: number;
      spinSpeed: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const particleCount = 45;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1.5,
        speedY: -(Math.random() * 0.35 + 0.1),
        speedX: Math.random() * 0.2 - 0.1,
        opacity: Math.random() * 0.3 + 0.1,
        angle: Math.random() * Math.PI * 2,
        spinSpeed: Math.random() * 0.008 - 0.004,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.beginPath();
        
        const sides = 6;
        const r = p.size;
        for (let i = 0; i < sides; i++) {
          const angle = (i * 2 * Math.PI) / sides;
          const xVal = r * Math.cos(angle);
          const yVal = r * Math.sin(angle);
          if (i === 0) ctx.moveTo(xVal, yVal);
          else ctx.lineTo(xVal, yVal);
        }
        
        ctx.closePath();
        ctx.fillStyle = `rgba(200, 169, 107, ${p.opacity})`;
        ctx.fill();
        ctx.restore();

        p.y += p.speedY;
        p.x += p.speedX;
        p.angle += p.spinSpeed;

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10 || p.x > canvas.width + 10) {
          p.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10 w-full h-full"
    />
  );
}
