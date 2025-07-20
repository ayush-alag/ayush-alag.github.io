import React from 'react';
import { Github, Linkedin } from 'lucide-react';

// ============================================================================
// EDIT YOUR CONTENT HERE - Easy to modify!
// ============================================================================

const PERSONAL_INFO = {
  name: "Ayush Alag",
  tagline: "CS Student at Stanford | AI & Systems Researcher",
  description: `I'm researching multi-LLM cooperation and state abstraction in deep reinforcement learning. 
    Previously, I built high-performance C++ systems at Five Rings Capital and graduated summa cum laude from Princeton.`,
  email: "aalag@stanford.edu",
  profilePhoto: "/profile.jpg", // Add your photo to the public folder and update this path
  social: {
    github: "https://github.com/ayushalag",
    linkedin: "https://linkedin.com/in/ayushalag",
    twitter: "https://x.com/ayushalag" // X/Twitter profile
  }
};

const TIMELINE_DATA = {
  2024: [
    {
      id: 1,
      title: "MS Computer Science @ Stanford",
      description: "Researching multi-LLM cooperation and state abstraction in deep reinforcement learning.",
      date: "2024 - Present"
    },
    {
      id: 2,
      title: "Software Engineer @ Five Rings Capital",
      description: "Built high-performance C++ systems for financial trading infrastructure and algorithmic trading platforms.",
      date: "2023 - 2024"
    }
  ],
  2023: [
    {
      id: 3,
      title: "NeurIPS Publication",
      description: "Published research on auditing deep learning models at NeurIPS 2023. \"Is EMA Robust?\"",
      date: "2023"
    },
    {
      id: 4,
      title: "Regeneron Top-40 Finalist",
      description: "Machine learning approach to food allergy prediction using epigenetic biomarkers.",
      date: "2023"
    },
    {
      id: 5,
      title: "BS Computer Science @ Princeton",
      description: "Graduated summa cum laude with focus on systems programming and algorithms.",
      date: "2020 - 2024"
    }
  ]
};

// ============================================================================
// WEBSITE COMPONENTS (You probably don't need to edit below this line)
// ============================================================================

// Custom X Logo Component
const XLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

function App() {
  const [activeSection, setActiveSection] = React.useState('about');

  // Auto-highlight navigation on scroll
  React.useEffect(() => {
    const sections = ['about', 'timeline', 'writing'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, // Section is considered active when 30% visible
        rootMargin: '-80px 0px -80px 0px' // Account for fixed header
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-sophisticated">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">{PERSONAL_INFO.name}</h1>
            <nav className="flex space-x-10">
              <button 
                onClick={() => scrollToSection('about')} 
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                  activeSection === 'about' 
                    ? 'text-gray-900 bg-gray-100/50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/50'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('timeline')} 
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                  activeSection === 'timeline' 
                    ? 'text-gray-900 bg-gray-100/50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/50'
                }`}
              >
                Timeline
              </button>
              <button 
                onClick={() => scrollToSection('writing')} 
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                  activeSection === 'writing' 
                    ? 'text-gray-900 bg-gray-100/50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/50'
                }`}
              >
                Writing
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <a href={PERSONAL_INFO.social.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={PERSONAL_INFO.social.twitter} target="_blank" rel="noopener noreferrer" title="X (Twitter)" className="text-gray-600 hover:text-gray-900 transition-colors">
                <XLogo className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="pt-24 pb-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-16">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg bg-gray-200">
                {PERSONAL_INFO.profilePhoto && PERSONAL_INFO.profilePhoto !== "" ? (
                  <img 
                    src={PERSONAL_INFO.profilePhoto} 
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400 text-gray-600" style={{ display: PERSONAL_INFO.profilePhoto ? 'none' : 'flex' }}>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">
                      {PERSONAL_INFO.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-sm">
                      Add photo to public/profile.jpg
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="flex-1 max-w-2xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Hello, I'm {PERSONAL_INFO.name.split(' ')[0]}!
              </h2>
              <p className="text-lg text-gray-600 mb-6">{PERSONAL_INFO.tagline}</p>
              <div className="text-gray-700 leading-relaxed space-y-4">
                {PERSONAL_INFO.description.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Timeline</h2>
          <div className="space-y-12">
            {Object.entries(TIMELINE_DATA)
              .sort(([a], [b]) => parseInt(b) - parseInt(a))
              .map(([year, items]) => (
              <div key={year}>
                {/* Year Header */}
                <div className="bg-gray-100 rounded-lg px-4 py-2 mb-6 inline-block">
                  <h3 className="text-xl font-bold text-gray-900">{year}</h3>
                </div>
                
                {/* Timeline Items for this year */}
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="pb-4 border-b border-gray-100 last:border-b-0">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-2">
                        {item.description}
                      </p>
                      <div className="text-sm text-gray-500">
                        {item.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Writing</h2>
          <div className="bg-gray-50 rounded-xl p-12">
            <div className="text-6xl mb-4">✍️</div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">Coming Soon...</h3>
            <p className="text-gray-500">
              I'm working on some interesting posts about AI research, systems programming, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-gray-700 transition-colors">
              {PERSONAL_INFO.email}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
