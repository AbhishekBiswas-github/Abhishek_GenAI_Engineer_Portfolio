/**
 * render.projects.js
 * Renders the Projects grid from projectsData (data.projects.js)
 */
function renderProjects() {
  const el = document.getElementById('projects-grid');
  if (!el || typeof projectsData === 'undefined') return;

  el.innerHTML = projectsData.map((proj, i) => {
    const isComingSoon = proj.link === '#';
    return `
      <div class="sk-card project-card reveal reveal-delay-${(i % 4) + 1}">
        <div class="project-icon-wrap">${proj.icon}</div>
        <div class="project-name">${proj.name}</div>
        <p class="project-desc">${proj.description}</p>
        <div class="project-tech">
          ${proj.tech.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        ${isComingSoon
          ? `<span class="tag tag-accent" style="align-self:flex-start;">🚧 In Progress</span>`
          : `<a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="project-link">
              ${proj.linkLabel}
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>`
        }
      </div>
    `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', renderProjects);
