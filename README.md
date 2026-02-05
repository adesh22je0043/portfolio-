# Adesh Kumar — Portfolio

Production-ready portfolio website for Adesh Kumar, a full-stack developer and AI enthusiast.

## ✨ Features

- **Responsive Design** — Mobile-first, works on all devices
- **Performance Optimized** — No build step, lightweight CSS/JS
- **Accessible** — WCAG compliant with semantic HTML
- **PWA Ready** — Installable web app manifest
- **SEO Friendly** — Open Graph tags and sitemap included

## 📁 Files

- `index.html` — Main portfolio site (personalized with Adesh's info)
- `css/styles.css` — Responsive styling with dark theme
- `js/main.js` — Navigation and smooth scroll functionality
- `manifest.json` — PWA manifest
- `sitemap.xml` — SEO sitemap
- `.github/workflows/deploy.yml` — Auto-deploy to GitHub Pages

## 🚀 Deployment

The portfolio is configured to auto-deploy to GitHub Pages:

1. Push to `main` branch
2. GitHub Actions automatically builds and deploys to `gh-pages`
3. Your portfolio will be live at `https://<username>.github.io/portfolio-`

### Custom Domain

To use a custom domain:

1. Add your domain to `CNAME` file in repository root
2. Configure your domain registrar to point to `<username>.github.io`
3. Update the domain in `sitemap.xml`

## 🛠 Customization

### Update Information

- **Name & Contact**: Edit `index.html` header and contact section
- **Projects**: Modify the projects grid in `index.html`
- **Skills**: Update the skills section with your expertise
- **Domain**: Edit `sitemap.xml` with your actual domain (currently uses `adeshkumar.dev`)

### Styling

Customize colors in `css/styles.css`:

```css
:root {
  --bg: #0f172a;           /* Background */
  --accent: #06b6d4;       /* Primary accent */
  --accent-2: #7c3aed;     /* Secondary accent */
  --text: #e6eef8;         /* Text color */
  /* ... other variables ... */
}
```

## 📊 Current Content

- **Bio**: Full-stack developer specializing in React, Next.js, and AI integrations
- **Projects**: 
  - Jarvis AI SaaS Platform
  - Student Schedule Manager with OCR
- **Contact**: 22je0043@iitism.ac.in
- **Social**: GitHub & LinkedIn profiles linked

## 📝 Notes

- The workflow uses `GITHUB_TOKEN` for automated deployment
- No build step required — pure HTML/CSS/JS
- For advanced features (forms backend, analytics), consider upgrading to a platform like Vercel or Netlify

---

**Built with ❤️ | Ready to impress.** 
