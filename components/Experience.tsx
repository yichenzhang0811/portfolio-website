'use client';

import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Software Engineering Intern',
    company: 'TalkHere.AI Inc',
    location: 'Remote',
    duration: 'Sep 2025 - Present',
    description: [
      'Designed and implemented a conversation memory module that extracts and stores user information from AI dialogues, enabling personalized and context-aware interactions across sessions, adopted by 240+ users shortly after launch',
      'Developed an automatic topic generation system that analyzes conversation transcripts, extracts key terms, and assigns semantic titles to conversations, reducing search time by ~80% when browsing conversation history',
      'Integrated prompt-driven workflows with backend services, aligning request/response schemas, adding server-side input validation and fallback logic, and coordinating rollout with the team for a smooth production deployment',
    ],
    technologies: ['Python', 'AI/ML', 'Backend Services', 'Data Processing'],
  },
  {
    title: 'Full-Stack Engineer Intern',
    company: 'Swapt',
    location: 'Boston, MA',
    duration: 'May 2025 - Aug 2025',
    description: [
      'Built an AI-powered webpage generator: designed Puck JSON schemas and wrote TypeScript/Node.js services that call OpenAI GPT-4 API, enabling non-technical users to create campaign pages, reducing creation time from 1 hour to 3 minutes',
      'Enhanced the visual editor\'s layout capabilities by creating a new Section component for React/Next.js that adds background image/gradient support and responsive spacing, 2x available layout presets, and enables richer page personalization',
      'Added custom typography controls and an advanced color picker (HEX/RGB/Alpha, live preview) to all existing visual editors, enabling fine-grained and on-brand color selection',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'OpenAI API'],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-container bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">
          <span className="gradient-text">Experience</span>
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.location}
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 font-medium">
                  {exp.duration}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="ml-4">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

