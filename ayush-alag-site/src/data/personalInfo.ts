import { PersonalInfo, Experience } from '../types';

// Personal Information - Your actual details
export const personalInfo: PersonalInfo = {
  name: "Ayush Alag",
  tagline: "MS CS Student at Stanford | AI & Systems Enthusiast",
  description: "I'm researching multi-LLM cooperation and state abstraction in deep RL. Previously, I built C++ systems at Five Rings Capital and graduated summa cum laude in CS from Princeton.",
  // profileImage: "/profile.jpg", // Add your profile image path when ready
  email: "aalag@cs.stanford.edu",
  linkedin: "https://linkedin.com/in/ayushalag",
  github: "https://github.com/ayushalag",
};

// Experience Data - Your actual experience
export const experiences: Experience[] = [
  {
    id: "1",
    title: "MS CS Student",
    company: "Stanford University",
    period: "Present",
    description: "Researching multi-LLM cooperation and state abstraction in deep reinforcement learning. Focus on AI systems and distributed computing.",
    type: "education",
    current: true,
    icon: "GraduationCap"
  },
  {
    id: "2",
    title: "Software Engineer",
    company: "Five Rings Capital",
    period: "2023-2024",
    description: "Built high-performance C++ systems for financial trading infrastructure. Worked on low-latency systems and algorithmic trading platforms.",
    type: "work",
    icon: "Briefcase"
  },
  {
    id: "3",
    title: "Minions Protocol",
    company: "Research Project",
    period: "2024",
    description: "Distributed LLM protocol framework for multi-agent cooperation and coordination.",
    type: "project",
    icon: "Code",
    link: "#" // Update with actual link
  },
  {
    id: "4",
    title: "Is EMA Robust? (NeurIPS 2023)",
    company: "Research Publication",
    period: "2023",
    description: "Research on auditing deep learning models, published at NeurIPS 2023.",
    type: "project",
    icon: "Lightbulb",
    link: "#" // Update with actual paper link
  },
  {
    id: "5",
    title: "Epigenetic ML Biomarkers",
    company: "Research Project",
    period: "2023",
    description: "Regeneron Top-40 Finalist. Machine learning approach to food allergy prediction using epigenetic biomarkers.",
    type: "project",
    icon: "Lightbulb"
  },
  {
    id: "6",
    title: "BS Computer Science",
    company: "Princeton University",
    period: "2020-2024",
    description: "Graduated summa cum laude. Focus on systems programming, algorithms, and machine learning.",
    type: "education",
    icon: "GraduationCap"
  }
];

// Note: Replace the above placeholder data with your actual resume information
// The structure makes it easy to add, remove, or modify entries