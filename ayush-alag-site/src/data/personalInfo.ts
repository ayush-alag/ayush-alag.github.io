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

// Experience Data - Your actual experience with vibrant styling
export const experiences: Experience[] = [
  {
    id: "1",
    title: "MS CS Student",
    company: "Stanford University",
    period: "2024-Present",
    year: "2025",
    description: "Researching multi-LLM cooperation and state abstraction in deep reinforcement learning.",
    highlights: [
      "Multi-agent LLM coordination systems",
      "State abstraction in deep RL",
      "AI systems architecture"
    ],
    type: "education",
    current: true,
    icon: "GraduationCap",
    color: "blue"
  },
  {
    id: "2",
    title: "Software Engineer",
    company: "Five Rings Capital",
    period: "2023-2024",
    year: "2023",
    description: "Built high-performance C++ systems for financial trading infrastructure.",
    highlights: [
      "Low-latency trading systems",
      "High-frequency algorithms",
      "C++ performance optimization"
    ],
    type: "work",
    icon: "Briefcase",
    color: "purple"
  },
  {
    id: "3",
    title: "Minions Protocol",
    company: "Research Project",
    period: "2024",
    year: "2024",
    description: "Distributed LLM protocol framework for multi-agent cooperation.",
    highlights: [
      "Multi-agent coordination",
      "Distributed systems design",
      "Protocol framework development"
    ],
    type: "project",
    icon: "Code",
    color: "green",
    link: "#"
  },
  {
    id: "4",
    title: "Is EMA Robust?",
    company: "NeurIPS 2023",
    period: "2023",
    year: "2023",
    description: "Research on auditing deep learning models, published at NeurIPS 2023.",
    highlights: [
      "Deep learning model auditing",
      "Robustness analysis",
      "Top-tier conference publication"
    ],
    type: "project",
    icon: "Lightbulb",
    color: "pink",
    link: "#"
  },
  {
    id: "5",
    title: "Epigenetic ML Biomarkers",
    company: "Regeneron Research",
    period: "2023",
    year: "2023",
    description: "Regeneron Top-40 Finalist. ML approach to food allergy prediction using epigenetic biomarkers.",
    highlights: [
      "Regeneron Top-40 Finalist",
      "Epigenetic data analysis",
      "Food allergy prediction models"
    ],
    type: "project",
    icon: "Lightbulb",
    color: "blue"
  },
  {
    id: "6",
    title: "BS Computer Science",
    company: "Princeton University",
    period: "2020-2024",
    year: "2022",
    description: "Graduated summa cum laude with focus on systems and algorithms.",
    highlights: [
      "Summa cum laude graduate",
      "Systems programming focus",
      "Advanced algorithms & ML"
    ],
    type: "education",
    icon: "GraduationCap",
    color: "orange"
  }
];

// Note: Replace the above placeholder data with your actual resume information
// The structure makes it easy to add, remove, or modify entries