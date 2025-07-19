import { ExperienceItem } from './ExperienceItem';
import { experiences } from '../data/personalInfo';

export const ExperienceSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-8">
      <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
        <div className="space-y-6">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};