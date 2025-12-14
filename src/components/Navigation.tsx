import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface NavigationProps {
  activeTab: 'home' | 'writing';
  onTabChange: (tab: 'home' | 'writing') => void;
}

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="w-full max-w-4xl mx-auto px-6 py-8">
      <div className="flex justify-between items-center">
        {/* Navigation Tabs */}
        <div className="flex space-x-8">
          <button
            onClick={() => onTabChange('home')}
            className={`text-lg font-medium transition-colors duration-200 ${
              activeTab === 'home'
                ? 'text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100 pb-1'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onTabChange('writing')}
            className={`text-lg font-medium transition-colors duration-200 ${
              activeTab === 'writing'
                ? 'text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100 pb-1'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
            }`}
          >
            Writing
          </button>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          ) : (
            <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          )}
        </button>
      </div>
    </nav>
  );
};