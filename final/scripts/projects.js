import { projects } from '../data/final.mjs';

// Function to create cards using forEach
function renderProjectCards() {
    const container = document.getElementById('projects-container');
    
    // Clear container 
    container.innerHTML = '';
    
    // Use forEach loop to create cards
    projects.forEach(project => {
        // Create card element
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Add data attribute for filtering
        card.setAttribute('data-category', project.category);
        
        // Build card HTML
        const cardHTML = `
            <img src="${project.image}" alt="${project.name}" class="project-image">
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
            </div>
        `;
        
        card.innerHTML = cardHTML;
        container.appendChild(card);
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', renderProjectCards);