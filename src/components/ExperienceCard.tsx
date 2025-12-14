import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

const colorClasses = {
  purple: 'bg-gradient-to-br from-purple-500 to-purple-600 text-white',
  orange: 'bg-gradient-to-br from-orange-500 to-orange-600 text-white',
  blue: 'bg-gradient-to-br from-blue-500 to-blue-600 text-white',
  green: 'bg-gradient-to-br from-green-500 to-green-600 text-white',
  pink: 'bg-gradient-to-br from-pink-500 to-pink-600 text-white',
};

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const colorClass = colorClasses[experience.color || 'blue'];
  
  return (
    <div className={`${colorClass} rounded-2xl p-6 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold mb-1">{experience.company}</h3>
          <p className="text-lg opacity-90">{experience.title}</p>
        </div>
        <div className="text-right text-sm opacity-75">
          {experience.period}
        </div>
      </div>
      
      {experience.highlights && (
        <ul className="space-y-2">
          {experience.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start">
              <span className="text-white/70 mr-2">•</span>
              <span className="text-sm leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      )}
      
      {experience.link && experience.link !== '#' && (
        <div className="mt-4">
          <a 
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium hover:underline opacity-90"
          >
            Learn more →
          </a>
        </div>
      )}
    </div>
  );
};