/**
 * render.education.js
 * Renders Education section from educationData (data.education.js)
 */
function renderEducation() {
  const el = document.getElementById('education-grid');
  if (!el || typeof educationData === 'undefined') return;

  el.innerHTML = educationData.map((edu, i) => `
    <div class="sk-card edu-card reveal reveal-delay-${i + 1}">
      <div class="edu-icon">${edu.icon}</div>
      <div class="edu-degree">${edu.degree}</div>
      <div class="edu-institution">${edu.institution}</div>
      <div class="edu-year">${edu.year}</div>
      ${edu.note ? `<div class="edu-spacer"><div class="edu-note">${edu.note}</div></div>` : ''}
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderEducation);
