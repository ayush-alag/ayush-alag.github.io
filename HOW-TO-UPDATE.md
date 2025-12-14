# How to Update Your Website

## 📷 Adding Your Profile Photo

1. **Add your photo to the public folder:**
   - Place your photo in `public/` folder
   - Name it `profile.jpg` (or update the filename in App.tsx)
   - Recommended size: 500x500px or larger, square aspect ratio

2. **The photo will automatically appear** once you rebuild and deploy

## ✏️ Editing Content

**All your content is at the top of `src/App.tsx`** - look for the section marked:
```
// EDIT YOUR CONTENT HERE - Easy to modify!
```

### Personal Information
Update the `PERSONAL_INFO` object:
- `name` - Your full name
- `tagline` - Your professional title/description
- `description` - Your bio paragraph
- `email` - Your contact email
- `social` - Your social media links

### Timeline/Experience
Update the `TIMELINE_ITEMS` array:
- Add/remove/edit your experiences
- Each item has: title, organization, period, description
- Types: "education", "work", "research"

## 🚀 Deploying Changes

This repo deploys automatically to GitHub Pages on every push to `main`.

After making changes:
```bash
npm install
npm run build
git add .
git commit -m "Update content"
git push
```

Wait 2-3 minutes for GitHub Pages to update.

### One-time setup in GitHub
- In your repo, go to **Settings → Pages**
- Set **Source** to **GitHub Actions**

## 🎨 Customizing Design

- **Colors**: Update the CSS classes in `src/index.css`
- **Layout**: Modify the JSX structure in `src/App.tsx`
- **Fonts**: Change font-family in `:root` CSS

Your website will be live at: `https://ayush-alag.github.io`