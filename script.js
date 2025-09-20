document.addEventListener('DOMContentLoaded', function() {

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#home') {
            const heroSection = document.querySelector('#home');
            if (heroSection) {
                const heroPosition = heroSection.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: heroPosition }); // behavior: 'smooth' kaldır
            } else {
                window.scrollTo({ top: 0 }); // behavior: 'smooth' kaldır
            }
            return;
        }
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 20;
            window.scrollTo({ top: targetPosition }); // behavior: 'smooth' kaldır
        }
    });
});

    // --- Hero Slider ---
    const slides = document.querySelectorAll(".hero-slider .slide");
    if (slides.length > 1) {
        let currentSlide = 0;
        
        function nextSlide() {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
        }
        
        setInterval(nextSlide, 3000);
    }

    // --- Scroll Indicator ---
   const scrollIndicator = document.querySelector(".scroll-indicator");
if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
        const serviceAreasSection = document.querySelector("#service-areas");
        if (serviceAreasSection) {
            const targetPosition = serviceAreasSection.getBoundingClientRect().top + window.pageYOffset - 20;
            window.scrollTo({ top: targetPosition }); // behavior: 'smooth' kaldır
        }
    });
}

    // --- Mobile Menu Close ---
    document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
        link.addEventListener("click", () => {
            const navbarCollapse = document.querySelector(".navbar-collapse");
            if (navbarCollapse && navbarCollapse.classList.contains("show")) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    // --- Footer Year ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Back to Top Button ---
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 1000) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});