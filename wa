<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
    <script>
        // --- JavaScript Code ---
        document.addEventListener('DOMContentLoaded', () => {
            // --- Header Scroll Animation ---
            const header = document.querySelector('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // --- Flickity Slider Initialization ---
            const slider = new Flickity('.slider', {
                cellAlign: 'center',
                imagesLoaded: true,
                lazyLoad: 1,
                wrapAround: true,
                autoPlay: 6000,
                pauseAutoPlayOnHover: true,
                prevNextButtons: true,
                pageDots: true,
            });

            // --- Clean up old Typed Text Animation (as it's no longer used) ---
        });
