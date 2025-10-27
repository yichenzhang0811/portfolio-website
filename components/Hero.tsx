'use client';

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="animate-fade-in space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="gradient-text">Hi, I&apos;m</span>
            <br />
            <span className="dark:text-white">Yichen Zhang</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mt-4">
            CS Graduate Student at Northeastern University
          </p>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-500">
            Seeking Full-Time Software Engineering Positions (2026 New Grad)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

