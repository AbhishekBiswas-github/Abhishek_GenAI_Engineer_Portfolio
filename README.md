# Abhishek Biswas — Portfolio Website

Skeuomorphic dark-theme portfolio · Pure HTML / CSS / Vanilla JS · Deployed on Netlify

---

## 📁 File Structure

```
portfolio/
│
├── index.html                  ← Single HTML file (combines all modules)
├── netlify.toml                ← Netlify deployment config
│
├── css/
│   └── styles.css              ← Complete CSS (skeuomorphic dark theme)
│
├── js/
│   │
│   ├── ── DATA FILES (edit these to update content) ──
│   ├── data.hero.js            ← Hero name, title, bio, stats, CTA
│   ├── data.skills.js          ← Skill categories and tags
│   ├── data.experience.js      ← Work history (newest first)
│   ├── data.projects.js        ← Portfolio project cards
│   ├── data.education.js       ← Degrees + certifications
│   ├── data.achievements.js    ← Awards and recognition
│   ├── data.contact.js         ← Contact info, socials, footer
│   │
│   ├── ── RENDERER FILES (inject data → HTML) ──
│   ├── render.hero.js
│   ├── render.skills.js
│   ├── render.experience.js
│   ├── render.projects.js
│   ├── render.education.js
│   ├── render.achievements.js
│   ├── render.contact.js
│   │
│   └── app.js                  ← Nav scroll, reveal animations, hamburger
│
└── assets/
    └── Abhishek_Biswas_Resume.pdf   ← ⚠️ Place your resume PDF here!
```

---

## 🚀 Deploy to Netlify

### Option A — Drag & Drop (Fastest)
1. Zip the entire `portfolio/` folder
2. Go to [netlify.com](https://netlify.com) → Sites → "Deploy manually"
3. Drag the zip onto the deploy area
4. Done — live in ~30 seconds

### Option B — GitHub + Netlify CI/CD (Recommended)
1. Push this folder to a GitHub repo
2. Go to Netlify → "Add new site" → "Import from Git"
3. Select your repo
4. Build settings: **Publish directory = `.`** (no build command needed)
5. Deploy — every `git push` auto-deploys

---

## ✏️ How to Update Content

All content lives in the `js/data.*.js` files — **never touch the renderers or HTML to update content.**

| What to update | File to edit |
|---|---|
| Name, bio, stats | `js/data.hero.js` |
| Add a skill / category | `js/data.skills.js` |
| New job role | `js/data.experience.js` |
| New project | `js/data.projects.js` |
| New degree / cert | `js/data.education.js` |
| New achievement | `js/data.achievements.js` |
| Phone / email / social | `js/data.contact.js` |
| Resume PDF | Replace `assets/Abhishek_Biswas_Resume.pdf` |

---

## ⚠️ Important Before Going Live

1. **Place your resume PDF** at `assets/Abhishek_Biswas_Resume.pdf`
2. **Update the OG URL** in `index.html` → `<meta property="og:url">` with your Netlify URL
3. **Test locally** by opening `index.html` directly in a browser (no build step needed)

---

## 🎨 Design System

- **Theme:** Skeuomorphic Dark
- **Display font:** Orbitron
- **Body font:** Inter
- **Mono font:** JetBrains Mono
- **Accent:** `#e94560` (red-pink) + `#4fc3f7` (cyan)
- **Base bg:** `#080810`

---

Built with precision & purpose · Abhishek Biswas © 2025
