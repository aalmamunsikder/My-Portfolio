"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const particleCount = 40;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }));
    setParticles(newParticles);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth) * 100,
      y: (clientY / innerHeight) * 100,
    });
  }, []);

  return (
    <div 
      className="fixed inset-0 -z-10 overflow-hidden bg-background"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <AnimatePresence>
        {particles.map((particle) => {
          const distance = Math.hypot(
            particle.x - mousePosition.x,
            particle.y - mousePosition.y
          );
          const isNearMouse = distance < 20;

          return (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                background: `linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)`,
              }}
              initial={{
                x: `${particle.x}%`,
                y: `${particle.y}%`,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                x: [
                  `${particle.x}%`,
                  `${particle.x + (Math.random() * 8 - 4)}%`,
                  `${particle.x}%`,
                ],
                y: [
                  `${particle.y}%`,
                  `${particle.y + (Math.random() * 8 - 4)}%`,
                  `${particle.y}%`,
                ],
                opacity: isNearMouse ? [0.4, 0.8, 0.4] : [0.2, 0.4, 0.2],
                scale: isNearMouse ? [1, 1.5, 1] : [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </AnimatePresence>

      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(var(--primary-rgb), 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(var(--primary-rgb), 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
} 