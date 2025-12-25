// Function to handle scroll animations
const revealOnScroll = () => {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.85) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

// Intersection Observer for About Section Specifically
const aboutSection = document.querySelector('.about-premium');
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelector('.about-visual').style.opacity = "1";
            entry.target.querySelector('.about-visual').style.transform = "translateX(0)";
            
            const elements = entry.target.querySelectorAll('.about-content > *');
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                }, index * 150);
            });
        }
    });
}, { threshold: 0.2 });

if (aboutSection) {
    aboutObserver.observe(aboutSection);
}

// Global scroll event
window.addEventListener('scroll', revealOnScroll);

// Initial call to check sections on load
window.addEventListener('load', revealOnScroll);

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form handling
const portfolioForm = document.getElementById('portfolioForm');
if (portfolioForm) {
    portfolioForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button');
        btn.innerText = "Sending...";
        setTimeout(() => {
            alert("Message received! I'll get back to you shortly.");
            btn.innerText = "Send Message";
            this.reset();
        }, 1500);
    });
}