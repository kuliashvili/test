// smooth scroll through sections
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


// burgermenu close and opem

const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

burgerMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});


// change ge to eng