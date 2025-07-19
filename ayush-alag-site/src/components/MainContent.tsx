import { personalInfo } from '../data/personalInfo';

export const MainContent = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-8 py-16">
      <div className="max-w-6xl w-full">
        <div className="flex items-center justify-center space-x-20">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 overflow-hidden shadow-2xl">
              {personalInfo.profileImage ? (
                <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                // Placeholder with a more sophisticated design
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-400 to-gray-600 text-white">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">
                      {personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-sm opacity-75">Add photo</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 max-w-2xl backdrop-blur-sm bg-white/60 dark:bg-gray-900/60 rounded-3xl p-8 shadow-xl">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 animate-fade-in">
              Hello, I'm {personalInfo.name.split(' ')[0]}!
            </h2>
            
            <div className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
              <p>
                I'm a CS student at{' '}
                <a href="https://stanford.edu" className="text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 hover:underline-offset-2">
                  Stanford
                </a>{' '}
                researching multi-LLM cooperation and state abstraction in deep reinforcement learning.
              </p>
              
              <p>
                Previously, I built high-performance C++ systems at{' '}
                <a href="#" className="text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 hover:underline-offset-2">
                  Five Rings Capital
                </a>{' '}
                and graduated summa cum laude from{' '}
                <a href="https://princeton.edu" className="text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 hover:underline-offset-2">
                  Princeton
                </a>.
              </p>
              
              <p>
                I've published research at{' '}
                <a href="#" className="text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 hover:underline-offset-2">
                  NeurIPS 2023
                </a>{' '}
                on auditing deep learning models and was a Regeneron Top-40 Finalist for my work on 
                epigenetic biomarkers.
              </p>
              
              <p>
                Outside of research, I enjoy building systems, exploring new technologies, and working on 
                projects like the{' '}
                <a href="#" className="text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 hover:underline-offset-2">
                  Minions Protocol
                </a>{' '}
                for distributed LLM coordination. You can find my work{' '}
                <a href={personalInfo.github} className="text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 hover:underline-offset-2">
                  here
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};