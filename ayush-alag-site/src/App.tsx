import { ThemeProvider } from './contexts/ThemeContext';
import { SimpleHeader } from './components/SimpleHeader';
import { MainContent } from './components/MainContent';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <SimpleHeader />
        <MainContent />
      </div>
    </ThemeProvider>
  );
}

export default App;
