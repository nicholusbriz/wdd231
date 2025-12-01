const humButton = document.getElementById('hum-btn');
const navLinks = document.getElementById('nav-links');

humButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    humButton.classList.toggle('open');
});

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;