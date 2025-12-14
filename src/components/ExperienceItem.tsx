import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  Building, 
  Users, 
  Lightbulb,
  LucideIcon 
} from 'lucide-react';
import { Experience } from '../types';

// Map icon names to actual icon components
const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  GraduationCap,
  Code,
  Building,
  Users,
  Lightbulb,
};

interface ExperienceItemProps {
  experience: Experience;
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const IconComponent = iconMap[experience.icon || 'Briefcase'];
  
  return (
    <div className="flex items-start space-x-4 mb-8">
      {/* Icon */}
      <div className="flex-shrink-0 mt-1">
        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <IconComponent className="w-4 h-4 text-gray-600 dark:text-gray-400" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {experience.title}
            {experience.company && (
              <span className="text-gray-600 dark:text-gray-400 font-normal">
                {' '}@ {experience.company}
              </span>
            )}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-500 flex-shrink-0 ml-4">
            {experience.period}
          </span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {experience.description}
        </p>
        
        {experience.link && (
          <a 
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
          >
            Learn more →
          </a>
        )}
      </div>
    </div>
  );
};