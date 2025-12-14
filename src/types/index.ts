// Types for the website data structure
export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  type: 'work' | 'education' | 'project';
  current?: boolean;
  link?: string;
  icon?: string;
  color?: 'purple' | 'orange' | 'blue' | 'green' | 'pink';
  highlights?: string[];
  year?: string;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  description?: string;
  profileImage?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}