import { personalInfo } from '../data/personalInfo';

export const HeroSection = () => {
  return (
    <div className="text-center py-16 px-6">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        please{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          hire me
        </span>
      </h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
        If you are old school, you can use my{' '}
        <a 
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 hover:text-purple-600 font-medium underline"
        >
          LinkedIn
        </a>{' '}
        instead.
      </p>
      
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          {personalInfo.name}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          {personalInfo.tagline}
        </p>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {personalInfo.description}
        </p>
      </div>
    </div>
  );
};