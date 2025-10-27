'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm">
          © 2024 Yichen Zhang. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-gray-500">
          Built with Next.js, React, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;

