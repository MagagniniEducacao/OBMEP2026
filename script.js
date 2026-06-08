document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add slight parallax effect to background clouds in hero section
    const heroSection = document.querySelector('.hero');
    const cloud1 = document.querySelector('.cloud-1');
    const cloud2 = document.querySelector('.cloud-2');

    if (heroSection && cloud1 && cloud2) {
        window.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            // Subtle movement based on mouse position
            cloud1.style.transform = `translate(${x * 20}px, ${y * 10}px)`;
            cloud2.style.transform = `translate(${x * -30}px, ${y * -15}px)`;
        });
    }

    // Intersection Observer for scroll animations (fade in elements)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial styles for fade-in elements
    const elementsToAnimate = document.querySelectorAll('.level-card, .step-box, .audience-item, .testimonial-card');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});
