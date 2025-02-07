const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');
const langToggle = document.getElementById('lang-toggle');


function updateDarkModeText() {
    let currentLanguage = localStorage.getItem('lang') || 'es';
    let isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
        darkModeIcon.textContent = currentLanguage === 'es' ? 'Claro ☀️' : 'Light ☀️';
    } else {
        darkModeIcon.textContent = currentLanguage === 'es' ? 'Oscuro 🌙' : 'Dark 🌙';
    }
}

function applyDarkMode(mode) {
    document.body.classList.toggle('dark-mode', mode === "dark");
    localStorage.setItem("darkMode", mode);
    updateDarkModeText();
}


const savedDarkMode = localStorage.getItem("darkMode") || "light";
applyDarkMode(savedDarkMode);

darkModeToggle.addEventListener("click", () => {
    const newMode = document.body.classList.contains("dark-mode") ? "light" : "dark";
    applyDarkMode(newMode);
});


async function loadTranslations(lang) {
    try {
        const response = await fetch("jsons/translations.json");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const translations = await response.json();

        document.querySelectorAll("[data-key]").forEach(element => {
            const key = element.getAttribute("data-key");
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        var cv = document.getElementById("cvviewer");
        var downloadCv = document.getElementById("downloadCv");
        langToggle.textContent = lang === "es" ? "EN" : "ES";
        localStorage.setItem("lang", lang);
        cv.src = lang === "es" ? "pdfs/CV_DanielSereginKozlov.pdf" : "pdfs/CV_English.pdf";
        downloadCv.href = lang === "es" ? "pdfs/CV_DanielSereginKozlov.pdf" : "pdfs/CV_English.pdf";
        downloadCv.download = lang === "es" ? "CV_DanielSereginKozlov.pdf" : "CV_English.pdf";
        updateDarkModeText();
    } catch (error) {
        console.error("Error loading translations:", error);
    }
}


let currentLang = localStorage.getItem("lang") || "es";
loadTranslations(currentLang);

langToggle.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    loadTranslations(currentLang);
});


window.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section-card");
    if (sections.length > 1) {
        sections[0].classList.add("show");
        sections[1].classList.add("show");
    }
});


function handleScroll(){
    const sections = document.querySelectorAll('.section-card');
    const selectedSelections = Array.from(sections).slice(2);
    selectedSelections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            setTimeout(() => {
                section.classList.add('show');
            }, index * 300);
        } else if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
            section.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', handleScroll);