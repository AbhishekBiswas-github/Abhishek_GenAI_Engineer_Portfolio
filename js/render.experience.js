/**
 * render.experience.js
 * Renders the Experience timeline from experienceData (data.experience.js)
 */
function renderExperience() {
  const el = document.getElementById('experience-timeline');
  if (!el || typeof experienceData === 'undefined') return;

  el.innerHTML = experienceData.map((exp, i) => `
    <div class="exp-item reveal reveal-delay-${Math.min(i + 1, 4)}">
      <div class="exp-dot"></div>
      <div class="sk-card exp-card">
        <div class="exp-header">
          <div class="exp-role">${exp.role}</div>
          <div class="exp-date">${exp.date}</div>
        </div>
        <div class="exp-company">${exp.company}</div>
        <div class="exp-location">📍 ${exp.location}</div>
        <ul class="exp-bullets">
          ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderExperience);
