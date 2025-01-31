// Cambio de tema
const toggleThemeButton = document.getElementById('toggle-theme');
const body = document.body;

toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleThemeButton.textContent = body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
});


// Mostrar las placas al hacer scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section-card');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            section.classList.add('show');
        }
    });
});
