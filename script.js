// Navbar Scroll Animation
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const fixedSocial = document.querySelector('.fixed-social');

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        fixedSocial.classList.add('visible'); // Show social icons
    } else {
        header.classList.remove('scrolled');
        fixedSocial.classList.remove('visible'); // Hide social icons
    }
});

// Language Toggle
function toggleLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('language', lang);
}

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navList = document.querySelector('nav ul');

    mobileMenuButton.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });

    // Load stored language preference on page load
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
        toggleLanguage(storedLanguage);
    }
});
