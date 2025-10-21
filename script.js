// ==================== TUS - THE UNLOCK SALES - MAIN JAVASCRIPT ====================

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initParticles();
    initScrollAnimations();
    initSmoothScroll();
    initLucideIcons();
    initParallax();
    initCursorEffect();
    
    console.log('🚀 TUS Website Loaded Successfully!');
});

// ==================== NAVBAR FUNCTIONALITY ====================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
    
    // Active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

// ==================== PARTICLES.JS CONFIGURATION ====================
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#FDCB58', '#ffd978', '#ffffff']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#FDCB58',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all elements with reveal classes
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-bottom');
    revealElements.forEach(element => {
        observer.observe(element);
    });
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if it's a section link (not just #)
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for navbar height
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Scroll indicator click
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
}

// ==================== LUCIDE ICONS INITIALIZATION ====================
function initLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// ==================== PARALLAX EFFECT ====================
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Parallax for hero orbs
        const orbs = document.querySelectorAll('.gradient-orb');
        orbs.forEach((orb, index) => {
            const speed = 0.3 + (index * 0.1);
            orb.style.transform = `translate(0, ${scrolled * speed}px)`;
        });
        
        // Parallax for hero content
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
}

// ==================== CUSTOM CURSOR EFFECT ====================
function initCursorEffect() {
    // Only on desktop
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        document.body.appendChild(cursor);
        
        const cursorFollower = document.createElement('div');
        cursorFollower.classList.add('custom-cursor-follower');
        document.body.appendChild(cursorFollower);
        
        // Add cursor styles dynamically
        const style = document.createElement('style');
        style.textContent = `
            .custom-cursor {
                width: 10px;
                height: 10px;
                background: #FDCB58;
                border-radius: 50%;
                position: fixed;
                pointer-events: none;
                z-index: 9999;
                transition: transform 0.1s ease;
                mix-blend-mode: difference;
            }
            
            .custom-cursor-follower {
                width: 40px;
                height: 40px;
                border: 2px solid rgba(253, 203, 88, 0.5);
                border-radius: 50%;
                position: fixed;
                pointer-events: none;
                z-index: 9998;
                transition: all 0.3s ease;
                mix-blend-mode: difference;
            }
            
            .custom-cursor.expand {
                transform: scale(2);
            }
        `;
        document.head.appendChild(style);
        
        let mouseX = 0;
        let mouseY = 0;
        let followerX = 0;
        let followerY = 0;
        
        // Update cursor position
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });
        
        // Smooth follower animation
        function animateFollower() {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            
            cursorFollower.style.left = followerX - 20 + 'px';
            cursorFollower.style.top = followerY - 20 + 'px';
            
            requestAnimationFrame(animateFollower);
        }
        animateFollower();
        
        // Expand cursor on hover over interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .service-card, .portfolio-item');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('expand');
                cursorFollower.style.transform = 'scale(1.5)';
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('expand');
                cursorFollower.style.transform = 'scale(1)';
            });
        });
    }
}

// ==================== SERVICE CARD ANIMATIONS ====================
// Add extra animations to service cards
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add glow effect
            card.style.boxShadow = '0 0 30px rgba(253, 203, 88, 0.4)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
        });
    });
});

// ==================== PORTFOLIO ITEM HOVER EFFECTS ====================
document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Add tilt effect
            this.style.transform = 'translateY(-10px) rotateX(5deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0)';
        });
        
        // 3D tilt on mousemove
        item.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    });
});

// ==================== TYPING EFFECT FOR HERO TITLE ====================
function initTypingEffect() {
    const titleLines = document.querySelectorAll('.reveal-text');
    
    titleLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        line.style.opacity = '1';
        
        setTimeout(() => {
            let charIndex = 0;
            const typingInterval = setInterval(() => {
                if (charIndex < text.length) {
                    line.textContent += text.charAt(charIndex);
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 50);
        }, index * 1000);
    });
}

// ==================== ANIMATED COUNTER FOR STATS ====================
function animateCounter(element, start, end, duration) {
    let startTime = null;
    
    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;
        
        if (progress < 1) {
            const value = Math.floor(start + (end - start) * progress);
            element.textContent = value + '+';
            requestAnimationFrame(animate);
        } else {
            element.textContent = end + '+';
        }
    }
    
    requestAnimationFrame(animate);
}

// Trigger counter animation when stats badge is visible
document.addEventListener('DOMContentLoaded', () => {
    const statsBadge = document.querySelector('.stats-badge h3');
    
    if (statsBadge) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(statsBadge, 0, 500, 2000);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsBadge);
    }
});

// ==================== FLOATING ELEMENTS ANIMATION ====================
function createFloatingAnimation() {
    const floatingElements = document.querySelectorAll('.feature-card, .payment-card');
    
    floatingElements.forEach((element, index) => {
        // Random float animation
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;
        
        element.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
    });
    
    // Add float keyframes if not exist
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize floating animation
document.addEventListener('DOMContentLoaded', createFloatingAnimation);

// ==================== SCROLL PROGRESS BAR ====================
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.classList.add('scroll-progress');
    document.body.appendChild(progressBar);
    
    const style = document.createElement('style');
    style.textContent = `
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            background: linear-gradient(90deg, #FDCB58, #ffd978);
            z-index: 10000;
            transition: width 0.2s ease;
            box-shadow: 0 2px 10px rgba(253, 203, 88, 0.5);
        }
    `;
    document.head.appendChild(style);
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / height) * 100;
        progressBar.style.width = progress + '%';
    });
}

// Initialize scroll progress bar
document.addEventListener('DOMContentLoaded', initScrollProgress);

// ==================== LAZY LOADING IMAGES ====================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

// ==================== BACK TO TOP BUTTON ====================
function initBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.classList.add('back-to-top');
    backToTop.setAttribute('aria-label', 'Back to Top');
    document.body.appendChild(backToTop);
    
    const style = document.createElement('style');
    style.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 120px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: rgba(10, 10, 69, 0.9);
            color: #FDCB58;
            border: 2px solid #FDCB58;
            border-radius: 50%;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 998;
        }
        
        .back-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .back-to-top:hover {
            background: #FDCB58;
            color: #0A0A45;
            transform: translateY(-5px);
        }
    `;
    document.head.appendChild(style);
    
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
}

// Initialize back to top button
document.addEventListener('DOMContentLoaded', initBackToTop);

// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScroll = debounce(() => {
    // Your scroll logic here
}, 10);

window.addEventListener('scroll', optimizedScroll);

// ==================== CONSOLE MESSAGE ====================
console.log('%c🚀 TUS - The Unlock Sales', 'color: #FDCB58; font-size: 24px; font-weight: bold;');
console.log('%cUnlocking Growth, Leads & Sales for Your Business', 'color: #0A0A45; font-size: 14px;');
console.log('%c💼 Need our services? WhatsApp: +91 86299 33125', 'color: #FDCB58; font-size: 12px;');

// ==================== END OF SCRIPT ====================
