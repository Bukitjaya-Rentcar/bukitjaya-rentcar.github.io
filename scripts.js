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