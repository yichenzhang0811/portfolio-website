'use client';

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <p>
              I'm a Computer Science graduate student at Northeastern University with a passion
              for building robust, scalable software solutions. I'm actively seeking full-time
              Software Engineering positions as a 2026 New Grad.
            </p>
            <p>
              My journey in tech has been driven by curiosity and a desire to solve real-world
              problems. I enjoy working on both frontend and backend development, and I'm
              particularly interested in modern web technologies, system design, and creating
              seamless user experiences.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or working on personal projects that challenge me to learn
              something new.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/IMG_6865.JPG" 
                alt="Yichen Zhang" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

