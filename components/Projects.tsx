'use client';

import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    title: 'Petcare Microservices E-commerce Platform',
    description: 'Designed and implemented a microservices architecture with 6 core services (user, product, order, notification, etc.) using Spring Boot 3.5 + Spring Cloud, enabling modular scalability and fault isolation. Integrated RabbitMQ for asynchronous, event-driven communication and containerized with Docker Compose for one-click deployment.',
    technologies: ['Spring Boot', 'Spring Cloud', 'RabbitMQ', 'Docker', 'Docker Compose', 'Microservices'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Travel Photo-Sharing Web Application',
    description: 'Developed a full-stack web application using React.js for the frontend and Express.js/Node.js for the backend. Implemented JWT authentication, designed scalable MongoDB schemas with Mongoose, and deployed to AWS EC2. Features responsive UI with interactive maps for geographic photo discovery.',
    technologies: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'Mongoose', 'JWT', 'AWS EC2', 'REST API'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-container bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-48 mb-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="text-white text-4xl font-bold opacity-80">
                  {project.title.charAt(0)}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  <span className="font-medium">Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

