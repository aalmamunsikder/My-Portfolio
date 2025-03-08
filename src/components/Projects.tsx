"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink: string;
}

const projects: ProjectData[] = [
  {
    id: 1,
    title: "Portfolio 2024",
    description: "Modern portfolio website with Next.js 14, Server Actions, and Animations",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    codeLink: "https://github.com/yourusername/portfolio",
    demoLink: "https://your-portfolio.com"
  },
  {
    id: 2,
    title: "AI Chat App",
    description: "Real-time chat application with AI-powered responses and voice commands",
    image: "/projects/chat.jpg",
    tags: ["React", "Socket.io", "OpenAI"],
    codeLink: "https://github.com/yourusername/ai-chat"
  },
  {
    id: 3,
    title: "E-Commerce Store",
    description: "Full-stack e-commerce platform with Stripe payments and admin dashboard",
    image: "/projects/store.jpg",
    tags: ["Next.js", "Prisma", "Stripe"],
    codeLink: "https://github.com/yourusername/store",
    demoLink: "https://your-store.com"
  },
  {
    id: 4,
    title: "Task Management Dashboard",
    description: "Collaborative task management platform with real-time updates and analytics",
    image: "/projects/dashboard.jpg",
    tags: ["React", "Redux", "Firebase", "Material-UI"],
    codeLink: "https://github.com/yourusername/task-dashboard",
    demoLink: "https://your-dashboard.com"
  },
  {
    id: 5,
    title: "Social Media Analytics",
    description: "Data visualization platform for social media metrics and engagement tracking",
    image: "/projects/analytics.jpg",
    tags: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
    codeLink: "https://github.com/yourusername/social-analytics",
    demoLink: "https://your-analytics.com"
  },
  {
    id: 6,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking app with workout plans and progress monitoring",
    image: "/projects/fitness.jpg",
    tags: ["React Native", "GraphQL", "AWS", "TypeScript"],
    codeLink: "https://github.com/yourusername/fitness-app",
    demoLink: "https://your-fitness-app.com"
  }
];

export default function Projects() {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      <div className="container relative mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold md:text-5xl gradient-text"
          >
            {t('projects.title')}
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setActiveProject(project.id)}
              onHoverEnd={() => setActiveProject(null)}
              className="group relative"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl glass-effect border border-white/10 group-hover:border-primary/20 transition-all duration-300">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <div
                    className="h-full w-full transform bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/95 via-background/70 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="mb-2 text-2xl font-bold gradient-text">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-foreground/90">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tag}
                        className={`rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm ${
                          tagIdx % 2 === 0
                            ? 'bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20'
                            : 'bg-secondary/10 text-secondary border border-secondary/30 hover:bg-secondary/20'
                        } transition-colors duration-300`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-primary p-2 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-primary/90 hover:scale-110 hover:shadow-primary/20"
                      aria-label={t('projects.viewDemo')}
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-secondary p-2 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-secondary/90 hover:scale-110 hover:shadow-secondary/20"
                    aria-label={t('projects.viewCode')}
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card Reflection Effect */}
              <div className={`absolute inset-0 -z-10 translate-y-4 scale-[0.95] rounded-2xl ${
                idx % 2 === 0
                  ? 'bg-gradient-to-br from-primary/20 via-primary/10 to-transparent'
                  : 'bg-gradient-to-br from-secondary/20 via-secondary/10 to-transparent'
              } opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70`} />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white transition-all duration-300 hover:bg-primary/90 hover:scale-105"
          >
            <span>{t('projects.viewMore')}</span>
            <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        </motion.div>
      </div>
    </section>
  );
} 