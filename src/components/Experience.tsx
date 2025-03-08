"use client";

import React, { useState } from 'react';

interface ExperienceData {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  isActive: boolean;
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'skills' | 'education' | 'certifications'>('experience');
  const [selectedExperience, setSelectedExperience] = useState<number>(0);

  const experiences: ExperienceData[] = [
    {
      id: 0,
      title: "Full Stack Developer",
      company: "Freelance & Personal Projects",
      period: "2022 - Present",
      description: [
        "Developing custom web applications and e-commerce solutions for clients across various industries.",
        "Building responsive, accessible, and performant user interfaces using modern frontend frameworks.",
        "Implementing secure backend systems with robust API architectures and database designs."
      ],
      skills: ["React", "Next.js", "Node.js", "TypeScript", "TailwindCSS", "MongoDB", "PostgreSQL"],
      isActive: true
    },
    {
      id: 1,
      title: "Web Developer",
      company: "Tech Solutions Agency",
      period: "2020 - 2022",
      description: [
        "Developed and maintained client websites and web applications using modern JavaScript frameworks.",
        "Collaborated with designers to implement responsive, pixel-perfect interfaces from design mockups.",
        "Optimized website performance and implemented SEO best practices to improve client search rankings."
      ],
      skills: ["JavaScript", "React", "CSS/SCSS", "WordPress", "PHP", "MySQL", "Git"],
      isActive: false
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Digital Creative Studio",
      period: "2018 - 2020",
      description: [
        "Created user-centered designs for websites and mobile applications.",
        "Conducted user research and usability testing to improve product experiences.",
        "Developed interactive prototypes and wireframes to communicate design concepts."
      ],
      skills: ["Figma", "Adobe XD", "Sketch", "Wireframing", "Prototyping", "User Testing"],
      isActive: false
    }
  ];

  const specializedSkills = [
    {
      category: "Web & App Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        "Frontend: React, Next.js, Vue.js, JavaScript/TypeScript, HTML5, CSS3/SCSS, TailwindCSS",
        "Backend: Node.js, Express, PHP, RESTful APIs, GraphQL",
        "Mobile: React Native, Progressive Web Apps",
        "Database: MongoDB, PostgreSQL, MySQL, Firebase"
      ]
    },
    {
      category: "UI/UX Design",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
        </svg>
      ),
      skills: [
        "Design Tools: Figma, Adobe XD, Sketch, Photoshop",
        "Methodologies: User Research, Wireframing, Prototyping, Usability Testing",
        "Principles: Responsive Design, Accessibility, Information Architecture"
      ]
    },
    {
      category: "Technical Solutions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </svg>
      ),
      skills: [
        "Hackintosh Installation & Optimization",
        "Custom Windows Image Building & Deployment",
        "System Performance Tuning",
        "Hardware & Software Troubleshooting"
      ]
    }
  ];

  const education = {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    period: "2014 - 2018",
    description: "Graduated with honors. Specialized in software engineering and web technologies.",
    skills: ["Software Engineering", "Web Development", "Database Systems", "UI/UX Design"]
  };

  const certifications = [
    {
      title: "Full Stack Web Development",
      provider: "Udemy",
      description: "Comprehensive course covering modern web development technologies and best practices."
    },
    {
      title: "UI/UX Design Fundamentals",
      provider: "Coursera",
      description: "In-depth training on user interface design principles and user experience methodologies."
    },
    {
      title: "Advanced React & Next.js",
      provider: "Frontend Masters",
      description: "Specialized training in building scalable applications with React and Next.js."
    },
    {
      title: "System Administration",
      provider: "Linux Foundation",
      description: "Professional certification in system administration and configuration."
    }
  ];

  const TabButton = ({ 
    tab, 
    label, 
    icon 
  }: { 
    tab: 'experience' | 'skills' | 'education' | 'certifications', 
    label: string,
    icon: React.ReactNode
  }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
        activeTab === tab 
          ? 'bg-primary text-foreground' 
          : 'bg-background/30 text-foreground/70 hover:bg-background/50'
      }`}
    >
      <span className="mr-2">{icon}</span>
      <span>{label}</span>
    </button>
  );

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Professional Journey</h2>
          <p className="max-w-2xl mx-auto text-foreground/70">
            Explore my professional background, skills, and qualifications.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <TabButton 
            tab="experience" 
            label="Experience" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            } 
          />
          <TabButton 
            tab="skills" 
            label="Skills" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            } 
          />
          <TabButton 
            tab="education" 
            label="Education" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            } 
          />
          <TabButton 
            tab="certifications" 
            label="Certifications" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            } 
          />
        </div>

        {/* Experience Tab Content */}
        {activeTab === 'experience' && (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Experience Navigation */}
              <div className="md:col-span-1">
                <div className="glass-effect p-4 rounded-lg">
                  {experiences.map((exp) => (
                    <button
                      key={exp.id}
                      onClick={() => setSelectedExperience(exp.id)}
                      className={`w-full text-left p-4 mb-2 rounded-lg transition-all duration-300 ${
                        selectedExperience === exp.id 
                          ? 'bg-primary/10 border-l-4 border-primary' 
                          : 'hover:bg-background/30'
                      }`}
                    >
                      <h3 className="font-bold">{exp.title}</h3>
                      <p className="text-sm text-foreground/70">{exp.company}</p>
                      <p className="text-xs text-foreground/60 mt-1">{exp.period}</p>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Experience Details */}
              <div className="md:col-span-2">
                <div className="glass-effect p-6 rounded-lg h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-primary">
                        {experiences[selectedExperience].title}
                      </h3>
                      <p className="text-foreground/70">
                        {experiences[selectedExperience].company}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {experiences[selectedExperience].period}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Responsibilities & Achievements</h4>
                    <ul className="space-y-3">
                      {experiences[selectedExperience].description.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-secondary mr-2">•</span>
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {experiences[selectedExperience].skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Tab Content */}
        {activeTab === 'skills' && (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specializedSkills.map((category, index) => (
                <div key={index} className="glass-effect p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.category}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span className="text-foreground/80">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Skill Bars */}
            <div className="mt-12 glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Proficiency Levels</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Frontend Development</span>
                    <span className="text-primary">95%</span>
                  </div>
                  <div className="w-full bg-background/50 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Backend Development</span>
                    <span className="text-primary">85%</span>
                  </div>
                  <div className="w-full bg-background/50 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">UI/UX Design</span>
                    <span className="text-secondary">90%</span>
                  </div>
                  <div className="w-full bg-background/50 rounded-full h-2.5">
                    <div className="bg-secondary h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Technical Solutions</span>
                    <span className="text-secondary">92%</span>
                  </div>
                  <div className="w-full bg-background/50 rounded-full h-2.5">
                    <div className="bg-secondary h-2.5 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Education Tab Content */}
        {activeTab === 'education' && (
          <div className="max-w-3xl mx-auto">
            <div className="glass-effect p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-primary">{education.degree}</h3>
                  <p className="text-foreground/70">{education.institution}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {education.period}
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-foreground/80">{education.description}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3">Key Areas of Study</h4>
                <div className="flex flex-wrap gap-2">
                  {education.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-foreground/10">
                <h4 className="text-lg font-semibold mb-4">Academic Achievements</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-foreground/80">Graduated with honors (GPA: 3.8/4.0)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-foreground/80">Dean's List for all semesters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-foreground/80">Senior project: Developed a full-stack web application for student resource management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Certifications Tab Content */}
        {activeTab === 'certifications' && (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="glass-effect p-6 rounded-lg flex">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold">{cert.title}</h3>
                    <p className="text-foreground/70 text-sm mb-2">{cert.provider}</p>
                    <p className="text-foreground/80 text-sm">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Continuous Learning
              </h3>
              
              <p className="text-foreground/80 mb-4">
                I'm committed to continuous learning and staying updated with the latest technologies and best practices in web development, UI/UX design, and technical solutions. Some of my current learning focuses include:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Advanced React Patterns</h4>
                  <p className="text-foreground/70 text-sm">Exploring advanced React patterns and performance optimization techniques.</p>
                </div>
                
                <div className="bg-secondary/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-secondary mb-2">Web Accessibility</h4>
                  <p className="text-foreground/70 text-sm">Deepening knowledge of WCAG guidelines and accessible web development practices.</p>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">System Architecture</h4>
                  <p className="text-foreground/70 text-sm">Studying scalable system architecture and microservices design patterns.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience; 