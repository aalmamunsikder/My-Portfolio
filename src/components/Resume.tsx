import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    description: [
      'Led development of enterprise-level web applications using Next.js and Node.js',
      'Implemented microservices architecture and improved system performance by 40%',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Innovations Ltd.',
    period: '2019 - 2021',
    description: [
      'Developed and maintained multiple client projects using React and Express',
      'Integrated third-party APIs and implemented real-time features',
      'Reduced application load time by 60% through optimization techniques',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Web Agency',
    period: '2017 - 2019',
    description: [
      'Built responsive web applications using React and Redux',
      'Collaborated with designers to implement pixel-perfect UI',
      'Improved website accessibility and SEO performance',
    ],
  },
];

const education = [
  {
    degree: 'Master of Computer Science',
    school: 'Tech University',
    period: '2015 - 2017',
    description: 'Specialized in Software Engineering and Web Technologies',
  },
  {
    degree: 'Bachelor of Computer Science',
    school: 'State University',
    period: '2011 - 2015',
    description: 'Major in Computer Science with focus on Web Development',
  },
];

export default function Resume() {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="resume" className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Professional Journey</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My professional experience and educational background
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </motion.a>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="mb-8 text-2xl font-bold">Work Experience</h3>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative border-l border-gray-300 pl-8 dark:border-gray-700"
              >
                <div className="absolute -left-3 h-6 w-6 rounded-full border-4 border-white bg-primary dark:border-gray-900" />
                <div className="mb-2 flex items-center gap-4">
                  <h4 className="text-xl font-semibold">{exp.title}</h4>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    {exp.period}
                  </span>
                </div>
                <p className="mb-4 text-lg text-gray-600 dark:text-gray-400">
                  {exp.company}
                </p>
                <ul className="list-disc space-y-2 pl-4 text-gray-600 dark:text-gray-400">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="mb-8 text-2xl font-bold">Education</h3>
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative border-l border-gray-300 pl-8 dark:border-gray-700"
              >
                <div className="absolute -left-3 h-6 w-6 rounded-full border-4 border-white bg-primary dark:border-gray-900" />
                <div className="mb-2 flex items-center gap-4">
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    {edu.period}
                  </span>
                </div>
                <p className="mb-4 text-lg text-gray-600 dark:text-gray-400">
                  {edu.school}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 