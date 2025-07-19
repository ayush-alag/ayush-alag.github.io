import { Github, Linkedin, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="w-full max-w-6xl mx-auto px-8 py-8">
        <div className="flex justify-between items-center backdrop-blur-sm bg-white/70 rounded-2xl px-6 py-4 shadow-lg">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-gray-900">Ayush Alag</h1>
            <nav>
              <a href="#home" className="text-gray-900 hover:text-blue-600 text-base font-medium border-b-2 border-gray-900 pb-1 transition-colors">
                Home
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-5">
            <a href="https://github.com/ayushalag" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/ayushalag" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/ayushalag" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen flex items-center justify-center px-8 py-16">
        <div className="max-w-6xl w-full">
          <div className="flex items-center justify-center space-x-20">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-400 to-gray-600 text-white">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">AA</div>
                    <div className="text-sm opacity-75">Add photo</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-2xl backdrop-blur-sm bg-white/60 rounded-3xl p-8 shadow-xl">
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Hello, I'm Ayush!
              </h2>
              
              <div className="text-xl text-gray-700 leading-relaxed space-y-6">
                <p>
                  I'm a CS student at{' '}
                  <a href="https://stanford.edu" className="text-blue-600 underline underline-offset-4 hover:text-blue-700 transition-all duration-200 hover:underline-offset-2">
                    Stanford
                  </a>{' '}
                  researching multi-LLM cooperation and state abstraction in deep reinforcement learning.
                </p>
                
                <p>
                  Previously, I built high-performance C++ systems at{' '}
                  <a href="#" className="text-blue-600 underline underline-offset-4 hover:text-blue-700 transition-all duration-200 hover:underline-offset-2">
                    Five Rings Capital
                  </a>{' '}
                  and graduated summa cum laude from{' '}
                  <a href="https://princeton.edu" className="text-blue-600 underline underline-offset-4 hover:text-blue-700 transition-all duration-200 hover:underline-offset-2">
                    Princeton
                  </a>.
                </p>
                
                <p>
                  I've published research at{' '}
                  <a href="#" className="text-blue-600 underline underline-offset-4 hover:text-blue-700 transition-all duration-200 hover:underline-offset-2">
                    NeurIPS 2023
                  </a>{' '}
                  on auditing deep learning models and was a Regeneron Top-40 Finalist for my work on 
                  epigenetic biomarkers.
                </p>
                
                <p>
                  Outside of research, I enjoy building systems, exploring new technologies, and working on 
                  projects like the{' '}
                  <a href="#" className="text-blue-600 underline underline-offset-4 hover:text-blue-700 transition-all duration-200 hover:underline-offset-2">
                    Minions Protocol
                  </a>{' '}
                  for distributed LLM coordination. You can find my work{' '}
                  <a href="https://github.com/ayushalag" className="text-blue-600 underline underline-offset-4 hover:text-blue-700 transition-all duration-200 hover:underline-offset-2">
                    here
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
