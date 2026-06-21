/**
 * render.achievements.js
 * Renders Achievements section from achievementsData (data.achievements.js)
 */
function renderAchievements() {
  const el = document.getElementById('achievements-grid');
  if (!el || typeof achievementsData === 'undefined') return;

  el.innerHTML = achievementsData.map((item, i) => `
    <div class="sk-card achievement-card reveal reveal-delay-${(i % 4) + 1}">
      <div class="achievement-badge">${item.icon}</div>
      <div class="achievement-body">
        <div class="achievement-title">${item.title}</div>
        <div class="achievement-org">${item.org}</div>
        <div class="achievement-date">${item.date}</div>
        ${item.detail ? `<p style="font-size:0.82rem;color:var(--text-muted);margin-top:8px;line-height:1.6;">${item.detail}</p>` : ''}
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderAchievements);
