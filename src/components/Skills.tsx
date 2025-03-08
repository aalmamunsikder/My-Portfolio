"use client";

import { useState } from 'react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
    color: 'primary' | 'secondary';
  }[];
  tools: string[];
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categories: SkillCategory[] = [
    {
      name: "Web Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0 0a9 9 0 0 0 9-9m-9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
        </svg>
      ),
      skills: [
        { name: "Frontend Development", level: 95, color: 'primary' },
        { name: "Backend Development", level: 85, color: 'secondary' },
        { name: "Responsive Design", level: 90, color: 'primary' },
        { name: "API Development", level: 88, color: 'secondary' }
      ],
      tools: [
        "React/Next.js",
        "TypeScript",
        "Node.js",
        "TailwindCSS",
        "MongoDB",
        "PostgreSQL",
        "RESTful APIs",
        "GraphQL"
      ]
    },
    {
      name: "App Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      skills: [
        { name: "Mobile Development", level: 85, color: 'primary' },
        { name: "Cross-Platform", level: 88, color: 'secondary' },
        { name: "App Performance", level: 82, color: 'primary' },
        { name: "Native Features", level: 80, color: 'secondary' }
      ],
      tools: [
        "React Native",
        "Flutter",
        "Firebase",
        "Redux",
        "Native APIs",
        "App Store Deploy",
        "Play Store Deploy"
      ]
    },
    {
      name: "UI/UX Design",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
        </svg>
      ),
      skills: [
        { name: "User Interface", level: 90, color: 'primary' },
        { name: "User Experience", level: 92, color: 'secondary' },
        { name: "Wireframing", level: 88, color: 'primary' },
        { name: "Prototyping", level: 85, color: 'secondary' }
      ],
      tools: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "Photoshop",
        "Illustrator",
        "InVision",
        "Principle"
      ]
    },
    {
      name: "Tech Solutions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </svg>
      ),
      skills: [
        { name: "System Configuration", level: 95, color: 'primary' },
        { name: "Performance Tuning", level: 92, color: 'secondary' },
        { name: "Troubleshooting", level: 90, color: 'primary' },
        { name: "System Integration", level: 88, color: 'secondary' }
      ],
      tools: [
        "Hackintosh",
        "Windows Custom Images",
        "Linux",
        "Shell Scripting",
        "System Optimization",
        "Hardware Integration"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">My Expertise</h2>
          <p className="max-w-2xl mx-auto text-foreground/70">
            Specialized in creating digital solutions with a focus on modern technologies and exceptional user experience.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeCategory === index 
                    ? 'bg-primary text-foreground' 
                    : 'bg-background/30 text-foreground/70 hover:bg-background/50'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skills & Progress */}
            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-primary">Skills & Proficiency</h3>
              <div className="space-y-6">
                {categories[activeCategory].skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className={`text-${skill.color}`}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-background/50 rounded-full h-2.5">
                      <div 
                        className={`bg-${skill.color} h-2.5 rounded-full transition-all duration-500`} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {categories[activeCategory].tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 