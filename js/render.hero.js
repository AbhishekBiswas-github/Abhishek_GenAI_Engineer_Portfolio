/**
 * render.hero.js
 * Renders the Hero section from heroData (data.hero.js)
 */
function renderHero() {
  const el = document.getElementById('hero-content');
  if (!el || typeof heroData === 'undefined') return;

  const statsHTML = heroData.stats.map(s => `
    <div class="hero-stat">
      <div class="hero-stat-num">${s.value}</div>
      <div class="hero-stat-label">${s.label}</div>
    </div>
  `).join('');

  const primaryCTA = heroData.cta.primary;
  const secondaryCTA = heroData.cta.secondary;

  el.innerHTML = `
    <div class="hero-eyebrow">${heroData.eyebrow}</div>
    <h1 class="hero-name">
      <span class="accent-word">${heroData.name.first}</span><br>${heroData.name.last}
    </h1>
    <div class="hero-title">${heroData.title}</div>
    <p class="hero-bio">${heroData.bio}</p>
    <div class="hero-cta">
      <a href="${primaryCTA.href}" class="btn btn-primary">
        ${primaryCTA.label}
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
      <a href="${secondaryCTA.href}"
         class="btn btn-outline"
         ${secondaryCTA.download ? 'download' : ''}>
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
        ${secondaryCTA.label}
      </a>
    </div>
    <div class="hero-stats">${statsHTML}</div>
  `;
}

document.addEventListener('DOMContentLoaded', renderHero);
