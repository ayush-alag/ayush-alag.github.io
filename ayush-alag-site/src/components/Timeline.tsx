import { experiences } from '../data/personalInfo';

export const Timeline = () => {
  // Get unique years from experiences and sort them
  const years = Array.from(new Set(experiences.map(exp => exp.year).filter(Boolean)))
    .sort((a, b) => parseInt(b!) - parseInt(a!));

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-8">
        {years.map((year, index) => (
          <div key={year} className="flex flex-col items-center">
            <div className="w-3 h-3 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
            {index < years.length - 1 && (
              <div className="w-px h-16 bg-gray-200 dark:bg-gray-700 my-2"></div>
            )}
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-2">
              {year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};