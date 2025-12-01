// modal.mjs
export function setupModal() {
    const modal = document.createElement('div');
    modal.id = 'project-modal';
    modal.className = 'modal hidden';
    modal.innerHTML = `
        <div class="modal-content">
            <span id="modal-close">&times;</span>
            <div id="modal-body"></div>
        </div>
    `;
    document.body.appendChild(modal);

    // Close modal on click
    document.getElementById('modal-close').addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Close modal when clicking outside content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.add('hidden');
        }
    });
}

export function openModal(project) {
    const modal = document.getElementById('project-modal');
    const body = document.getElementById('modal-body');

    body.innerHTML = `
        <h2>${project.name}</h2>
        <img src="${project.image}" alt="${project.name}" class="modal-image">
        <p>${project.description}</p>
        <p><strong>Category:</strong> ${project.category}</p>
        <p><strong>Year:</strong> ${project.year}</p>
        <div class="tech-stack">
            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
        </div>
        <div class="project-links">
            <a href="${project.github_url}" target="_blank">GitHub</a>
            <a href="${project.live_demo}" target="_blank">Live Demo</a>
        </div>
    `;

    modal.classList.remove('hidden');
}
