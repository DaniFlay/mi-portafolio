// Detectar cuando una placa entra en la vista
const sections = document.querySelectorAll('.section-card');

// Función para comprobar si una placa está en la vista
const isInView = (section) => {
    const rect = section.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
};

// Función para añadir la clase 'show' cuando la placa entra en la vista
const handleScroll = () => {
    sections.forEach(section => {
        if (isInView(section)) {
            section.classList.add('show');
        }
    });
};

// Llamar a la función de scroll
window.addEventListener('scroll', handleScroll);

// Llamar a la función una vez al cargar la página para las placas que ya están visibles
handleScroll();

// Función para alternar entre modo oscuro y claro
const toggleDarkModeButton = document.getElementById('toggleDarkMode');
toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleDarkModeButton.textContent = 'Modo Claro';
    } else {
        toggleDarkModeButton.textContent = 'Modo Oscuro';
    }
});
