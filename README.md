# Personal Website

Minimal personal site built with **React + TypeScript + Vite** and styled with **Tailwind**.

## 🚀 Quick start

```bash
npm install
npm run dev
```

## ✏️ Edit content

Your content is inline at the top of `src/App.tsx` (see the `PERSONAL_INFO` object).

Profile photo lives in `public/profile.jpg`.

## 📁 Structure (high level)

```
index.html
src/
  main.tsx
  App.tsx
  index.css
public/
  profile.jpg
```

## 🧪 Build

```bash
npm run build
npm run preview
```

## 🚀 Deploy (GitHub Pages)

This repo deploys via **GitHub Actions** on every push to `main`.

- Workflow: `.github/workflows/deploy.yml`
- GitHub setting: Repo → **Settings → Pages** → **Source = GitHub Actions**