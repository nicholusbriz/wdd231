// main.mjs
import { loadProjects } from './fetch.mjs';
import { renderProjectCards } from './render.mjs';
import { setupModal } from './modal.mjs';

const url = 'data/final.json';

document.addEventListener('DOMContentLoaded', async () => {
    setupModal(); // initialize modal
    const projects = await loadProjects(url);
    renderProjectCards(projects);
});
