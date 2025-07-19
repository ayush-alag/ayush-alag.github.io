import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { ProfileSection } from './components/ProfileSection';
import { ExperienceSection } from './components/ExperienceSection';
import { WritingSection } from './components/WritingSection';

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'writing'>('home');

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        {activeTab === 'home' ? (
          <main>
            <ProfileSection />
            <ExperienceSection />
          </main>
        ) : (
          <main>
            <WritingSection />
          </main>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
