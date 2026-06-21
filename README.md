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
    └── Abhishek_Biswas_Resume.pdf   ← Latest Resume
```

---

## 🎨 Design System

- **Theme:** Skeuomorphic Dark
- **Display font:** Orbitron
- **Body font:** Inter
- **Mono font:** JetBrains Mono
- **Accent:** `#e94560` (red-pink) + `#4fc3f7` (cyan)
- **Base bg:** `#080810`

---

Built with precision & purpose · Abhishek Biswas © 2026
