"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function ParticlesBackground() {
  const { theme } = useTheme();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleCount = 50;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              background: theme === 'dark' 
                ? 'rgba(255, 255, 255, 0.2)'
                : 'rgba(0, 0, 0, 0.2)',
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
                `${particle.x + (Math.random() * 10 - 5)}%`,
                `${particle.x}%`,
              ],
              y: [
                `${particle.y}%`,
                `${particle.y + (Math.random() * 10 - 5)}%`,
                `${particle.y}%`,
              ],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </AnimatePresence>

      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: theme === 'dark'
            ? 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)'
            : 'linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
} 