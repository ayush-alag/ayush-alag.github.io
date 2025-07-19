import { personalInfo } from '../data/personalInfo';

export const ProfileSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-8">
      <div className="flex items-center space-x-6">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden">
            {personalInfo.profileImage ? (
              <img 
                src={personalInfo.profileImage} 
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            ) : (
              // Placeholder avatar with initials
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-400 to-gray-600 text-white font-bold text-2xl">
                {personalInfo.name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {personalInfo.name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            {personalInfo.tagline}
          </p>
          {personalInfo.description && (
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl">
              {personalInfo.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};