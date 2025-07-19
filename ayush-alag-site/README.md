# Personal Website - Ayush Alag

A clean, minimal personal website built with React, TypeScript, and Tailwind CSS. Features a professional design with dark mode support.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Customizing Your Content

### Personal Information
Edit `src/data/personalInfo.ts` to update your:
- Name and tagline
- Profile description
- Contact information (email, LinkedIn, GitHub)
- Profile image path

### Experience & Education
In `src/data/personalInfo.ts`, modify the `experiences` array to add your:
- Work experience
- Education
- Projects
- Skills

Each experience item has:
- `title`: Job title or degree
- `company`: Company or school name
- `period`: Time period (e.g., "2023-2024", "Present")
- `description`: Brief description of your role/achievements
- `type`: "work", "education", or "project"
- `icon`: Icon name from Lucide React (see available icons below)

### Available Icons
- `Briefcase` - For work experience
- `GraduationCap` - For education
- `Code` - For projects
- `Building` - For companies
- `Users` - For team-related roles
- `Lightbulb` - For research/innovation

### Adding Your Photo
1. Place your profile image in the `public` folder
2. Update `profileImage` in `src/data/personalInfo.ts` with the path (e.g., "/profile.jpg")

## 🎨 Customizing Styles

### Colors
Edit `tailwind.config.js` to modify the color scheme. The current design uses a minimal grayscale palette.

### Typography
Font family can be changed in `tailwind.config.js` under `fontFamily.sans`.

### Components
- `Navigation.tsx` - Header with tabs and theme toggle
- `ProfileSection.tsx` - Hero section with photo and info
- `ExperienceSection.tsx` - Timeline of experiences
- `ExperienceItem.tsx` - Individual experience component
- `WritingSection.tsx` - Blog/writing section (placeholder)

## 🌙 Dark Mode
- Automatic detection of system preference
- Manual toggle in the header
- Persistent preference saved in localStorage

## 📱 Responsive Design
The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🔧 Technical Details
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **Lucide React** for icons
- **Context API** for theme management

## 📁 Project Structure
```
src/
├── components/          # React components
├── contexts/           # React contexts (theme)
├── data/              # Your personal data
├── types/             # TypeScript types
├── App.tsx            # Main app component
└── main.tsx           # Entry point
```

## 🚀 Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your preferred hosting service
3. For GitHub Pages: Push to your repository and enable GitHub Pages

## 💡 Tips for Customization
- Keep descriptions concise but informative
- Use action verbs in experience descriptions
- Include specific achievements and technologies
- Update the color scheme to match your personal brand
- Add your actual resume data to replace the placeholder content

## 📧 Adding Contact Information
Update the `personalInfo` object in `src/data/personalInfo.ts` with your actual contact details. Links will be added automatically in future updates.