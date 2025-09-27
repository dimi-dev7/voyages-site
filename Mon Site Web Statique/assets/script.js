const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Exemple d'interaction simple : afficher un message lors du clic sur un bouton
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btnSection1');
    // Création dynamique de l'élément d'affichage si absent
    let output = document.getElementById('output');
    if (!output) {
        output = document.createElement('div');
        output.id = 'output';
        button.parentNode.appendChild(output);
    }
    button.addEventListener('click', () => {
        const currentTime = new Date().toLocaleTimeString();
        output.innerHTML = `Bouton cliqué à : ${currentTime}`;
    });
});
// Vous pouvez ajouter d'autres interactions JavaScript ici
// Par exemple, une fonction pour changer le thème du site
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
const themeButton = document.getElementById('themeButton');
if (themeButton) {
    themeButton.addEventListener('click', toggleTheme);
}
// Fonctionnalité de formulaire de contact (exemple simple)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Merci pour votre message ! Nous vous répondrons bientôt.');
        contactForm.reset();
    });
}