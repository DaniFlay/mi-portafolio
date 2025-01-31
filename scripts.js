// Modo oscuro
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
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
