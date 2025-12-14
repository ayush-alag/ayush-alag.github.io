interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const sections = [
    { id: 'about', label: 'about' },
    { id: 'experience', label: 'experience' },
    { id: 'projects', label: 'projects' },
    { id: 'resume', label: 'resume' },
  ];

  return (
    <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`text-left py-2 px-3 rounded-lg transition-all duration-200 text-sm font-medium ${
              activeSection === section.id
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
};