// render.mjs
import { openModal } from './modal.mjs';

export function renderProjectCards(projects) {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-category', project.category);

        card.innerHTML = `
            <img src="${project.image}" alt="${project.name}" class="project-image" loading="lazy">
            <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github_url}" target="_blank">GitHub</a>
                    <a href="${project.live_demo}" target="_blank">Live Demo</a>
                </div>
                <button class="details-btn">View Details</button>
            </div>
        `;

        // Attach event to button
        const detailsBtn = card.querySelector('.details-btn');
        detailsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(project);
        });

        container.appendChild(card);
    });
}
