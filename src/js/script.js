document.addEventListener("DOMContentLoaded", () => {
    /* =========================================
       1. Mobile Menu Toggle
    ========================================= */
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
            
            // Toggle icon between bars and times (close)
            const icon = navToggle.querySelector('i');
            if(navMenu.classList.contains('show-menu')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    /* =========================================
       2. Sticky Header Shadow on Scroll
    ========================================= */
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* =========================================
       3. Active Navigation Link on Scroll
    ========================================= */
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector('.nav__list a.active').classList.remove('active');
                    navLink.classList.add('active');
                }
            }
        });
    }
    window.addEventListener('scroll', scrollActive);

    /* =========================================
       4. Intersection Observer for Animations
    ========================================= */
    const animateElements = document.querySelectorAll('.section-animate');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Hanya animasi sekali
            }
        });
    }, observerOptions);

    animateElements.forEach(el => {
        observer.observe(el);
    });

    /* =========================================
       5. Hero News Slider
    ========================================= */
    const sliderTrack = document.querySelector('.slider__track');
    const sliderDots = document.querySelectorAll('.slider__dot');
    let currentSlide = 0;
    const totalSlides = sliderDots.length;
    let sliderInterval;

    function updateSlider(index) {
        if (!sliderTrack) return;
        currentSlide = index;
        sliderTrack.style.transform = `translateX(-${index * 100}%)`;
        
        // Update dots
        sliderDots.forEach(dot => dot.classList.remove('active'));
        if (sliderDots[index]) {
            sliderDots[index].classList.add('active');
        }
    }

    function autoPlay() {
        if (sliderInterval) clearInterval(sliderInterval);
        sliderInterval = setInterval(() => {
            let nextIndex = (currentSlide + 1) % totalSlides;
            updateSlider(nextIndex);
        }, 5000);
    }

    if (sliderTrack && sliderDots.length > 0) {
        sliderDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateSlider(index);
                autoPlay();
            });
        });

        autoPlay();
        
        // Pause on hover
        const sliderContainer = document.querySelector('.hero__news-slider');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', () => clearInterval(sliderInterval));
            sliderContainer.addEventListener('mouseleave', () => autoPlay());
        }
    }
});
