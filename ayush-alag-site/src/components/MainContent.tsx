import { personalInfo } from '../data/personalInfo';

export const MainContent = () => {
  return (
    <main className="w-full max-w-6xl mx-auto px-8 py-16">
      <div className="flex items-center space-x-16">
        {/* Profile Photo */}
        <div className="flex-shrink-0">
          <div className="w-80 h-80 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden">
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
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Hello, I'm {personalInfo.name.split(' ')[0]}!
          </h2>
          
          <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
            <p>
              I'm a CS student at{' '}
              <a href="https://stanford.edu" className="underline hover:text-gray-900 dark:hover:text-gray-100">
                Stanford
              </a>{' '}
              researching multi-LLM cooperation and state abstraction in deep reinforcement learning.
            </p>
            
            <p>
              Previously, I built high-performance C++ systems at{' '}
              <a href="#" className="underline hover:text-gray-900 dark:hover:text-gray-100">
                Five Rings Capital
              </a>{' '}
              and graduated summa cum laude from{' '}
              <a href="https://princeton.edu" className="underline hover:text-gray-900 dark:hover:text-gray-100">
                Princeton
              </a>.
            </p>
            
            <p>
              I've published research at{' '}
              <a href="#" className="underline hover:text-gray-900 dark:hover:text-gray-100">
                NeurIPS 2023
              </a>{' '}
              on auditing deep learning models and was a Regeneron Top-40 Finalist for my work on 
              epigenetic biomarkers.
            </p>
            
            <p>
              Outside of research, I enjoy building systems, exploring new technologies, and working on 
              projects like the{' '}
              <a href="#" className="underline hover:text-gray-900 dark:hover:text-gray-100">
                Minions Protocol
              </a>{' '}
              for distributed LLM coordination. You can find my work{' '}
              <a href={personalInfo.github} className="underline hover:text-gray-900 dark:hover:text-gray-100">
                here
              </a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};