// Lightbox Functionality
document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('#gallery img');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    galleryImages.forEach(image => {
        image.addEventListener('click', (e) => {
            e.preventDefault();
            lightbox.classList.add('active');
            const img = document.createElement('img');
            img.src = image.parentElement.href;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget) return;
        lightbox.classList.remove('active');
    });
});

// Navbar Scroll Animation
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Dropdown Toggle
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.querySelector('.dropdown-content').classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.querySelector('.dropdown-content').classList.remove('show');
        }
    });
});

// Language Toggle
function toggleLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        if (el.getAttribute('data-lang') === lang) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    });
}
