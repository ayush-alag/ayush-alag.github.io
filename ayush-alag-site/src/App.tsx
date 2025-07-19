import { ThemeProvider } from './contexts/ThemeContext';
import { SimpleHeader } from './components/SimpleHeader';
import { MainContent } from './components/MainContent';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <SimpleHeader />
        <MainContent />
      </div>
    </ThemeProvider>
  );
}

export default App;
