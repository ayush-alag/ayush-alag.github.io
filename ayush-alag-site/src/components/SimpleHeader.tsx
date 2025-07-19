import { Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const SimpleHeader = () => {
  return (
    <header className="w-full max-w-6xl mx-auto px-8 py-8">
      <div className="flex justify-between items-center backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 rounded-2xl px-6 py-4 shadow-lg">
        {/* Name and Navigation */}
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {personalInfo.name}
          </h1>
          <nav>
            <a 
              href="#home" 
              className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 text-base font-medium border-b-2 border-gray-900 dark:border-gray-100 pb-1 transition-colors"
            >
              Home
            </a>
          </nav>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-5">
          <a 
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://twitter.com/ayushalag" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  );
};