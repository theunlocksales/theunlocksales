// ==================== MOBILE MENU ==================== 
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==================== NAVBAR SCROLL ==================== 
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==================== ACTIVE NAV LINK ==================== 
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== COUNTER ANIMATION ==================== 
const counters = document.querySelectorAll('.stat-number');
let countStarted = false;

function startCounting() {
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let count = 0;
        const increment = target / 100;
        
        const updateCount = () => {
            if (count < target) {
                count += increment;
                counter.textContent = Math.floor(count) + '+';
                setTimeout(updateCount, 20);
            } else {
                counter.textContent = target + '+';
            }
        };
        updateCount();
    });
}

window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    
    if (window.scrollY > heroBottom / 2 && !countStarted) {
        startCounting();
        countStarted = true;
    }
});

// ==================== SMOOTH SCROLL ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== CONTACT FORM ==================== 
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    const whatsappMessage = `*New Inquiry - The Unlock Sales*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Message:* ${message}`;
    
    window.open(`https://wa.me/918629933125?text=${whatsappMessage}`, '_blank');
    
    contactForm.reset();
});

// Phone number validation
document.getElementById('phone').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }
});

// ==================== BACK TO TOP BUTTON ==================== 
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== CONSOLE MESSAGE ==================== 
console.log('%c🚀 The Unlock Sales', 'color: #FDCB58; font-size: 40px; font-weight: bold;');
console.log('%cWebsite loaded successfully!', 'color: #1e3a8a; font-size: 16px;');
console.log('%c📞 Contact: +91 86299 33125', 'color: #10b981; font-size: 14px;');
