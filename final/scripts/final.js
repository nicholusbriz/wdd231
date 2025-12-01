const humButton = document.getElementById('hum-btn');
const navLinks = document.getElementById('nav-links');

humButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    humButton.classList.toggle('open');
});