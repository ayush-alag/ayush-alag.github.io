import { PersonalInfo, Experience } from '../types';

// Personal Information - Update this with your details
export const personalInfo: PersonalInfo = {
  name: "Ayush Alag",
  tagline: "building things, cs @ stanford", // Update with your actual tagline
  description: "Computer Science student passionate about technology and innovation.",
  // profileImage: "/path/to/your/image.jpg", // Add your profile image path
  email: "ayush@example.com", // Update with your email
  linkedin: "https://linkedin.com/in/ayushalag", // Update with your LinkedIn
  github: "https://github.com/ayushalag", // Update with your GitHub
};

// Experience Data - Update this with your actual experience from your resume
export const experiences: Experience[] = [
  {
    id: "1",
    title: "Current Research/Studies",
    company: "Stanford University",
    period: "Present",
    description: "Computer Science student focusing on [your area of study]",
    type: "education",
    current: true,
    icon: "GraduationCap"
  },
  {
    id: "2", 
    title: "Software Engineer Intern",
    company: "Example Company",
    period: "Summer 2024",
    description: "Worked on [description of what you did]. Add specific achievements and technologies used.",
    type: "work",
    icon: "Briefcase"
  },
  {
    id: "3",
    title: "Project Name",
    company: "Personal Project",
    period: "2024",
    description: "Built a [description of project]. Technologies used: React, Node.js, etc.",
    type: "project",
    icon: "Code"
  }
];

// Note: Replace the above placeholder data with your actual resume information
// The structure makes it easy to add, remove, or modify entries