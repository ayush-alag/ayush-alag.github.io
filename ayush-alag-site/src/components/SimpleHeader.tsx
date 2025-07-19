import { Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const SimpleHeader = () => {
  return (
    <header className="w-full max-w-6xl mx-auto px-8 py-6">
      <div className="flex justify-between items-center">
        {/* Name and Navigation */}
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-medium text-gray-900 dark:text-gray-100">
            {personalInfo.name}
          </h1>
          <nav>
            <a 
              href="#home" 
              className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 text-base border-b border-gray-900 dark:border-gray-100 pb-1"
            >
              Home
            </a>
          </nav>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a 
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://twitter.com/ayushalag" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};