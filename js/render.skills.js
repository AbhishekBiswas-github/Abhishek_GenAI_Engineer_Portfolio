/**
 * render.skills.js
 * Renders the Skills section from skillsData (data.skills.js)
 */
function renderSkills() {
  const el = document.getElementById('skills-grid');
  if (!el || typeof skillsData === 'undefined') return;

  el.innerHTML = skillsData.map((cat, i) => `
    <div class="sk-card skill-category reveal reveal-delay-${(i % 4) + 1}">
      <div class="skill-cat-header">
        <div class="skill-cat-icon">${cat.icon}</div>
        <div class="skill-cat-name">${cat.category}</div>
      </div>
      <div class="skill-tags">
        ${cat.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderSkills);
