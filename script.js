// ==================== THE UNLOCK SALES - MOBILE-FIRST JAVASCRIPT ==================== 

// ==================== INITIALIZATION ==================== 
document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initParticles();
    initScrollAnimations();
    initSmoothScroll();
    initLucideIcons();
    initCounters();
    initBackToTop();
    initContactForm();
    initMobileServiceCards();
    
    console.log('🚀 The Unlock Sales Website Loaded Successfully!');
    console.log('📞 Contact: +91 86299 33125');
    console.log('💼 Services: Databases | Marketing | Websites');
    console.log('📱 Mobile-First Design Activated!');
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
    if (mobileToggle) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                mobileToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        }
    });
    
    // Close mobile menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
    
    // Active nav link on scroll (desktop only)
    if (window.innerWidth >= 1024) {
        window.addEventListener('scroll', () => {
            let current = '';
            const sections = document.querySelectorAll('section');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
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
    }
}

// ==================== MOBILE SERVICE CARDS (CLICK TO FLIP) ==================== 
function initMobileServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Only add click functionality on mobile/tablet
    if (window.innerWidth < 1024) {
        serviceCards.forEach(card => {
            card.addEventListener('click', function(e) {
                // Don't flip if clicking on a link
                if (e.target.tagName === 'A' || e.target.closest('a')) {
                    return;
                }
                
                // Toggle flip
                this.classList.toggle('flipped');
                
                // Close other cards
                serviceCards.forEach(otherCard => {
                    if (otherCard !== this) {
                        otherCard.classList.remove('flipped');
                    }
                });
            });
        });
    }
    
    // Reset on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth >= 1024) {
                serviceCards.forEach(card => {
                    card.classList.remove('flipped');
                    card.replaceWith(card.cloneNode(true));
                });
            } else {
                initMobileServiceCards();
            }
        }, 250);
    });
}

// ==================== PARTICLES.JS INITIALIZATION ==================== 
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        // Fewer particles on mobile for better performance
        const particleCount = window.innerWidth < 768 ? 40 : 80;
        
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: particleCount,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#FDCB58'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: false
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#FDCB58',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: window.innerWidth >= 1024,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4
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

// ==================== SCROLL REVEAL ANIMATIONS ==================== 
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-top, .reveal-bottom');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// ==================== SMOOTH SCROLL ==================== 
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ==================== LUCIDE ICONS INITIALIZATION ==================== 
function initLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// ==================== ANIMATED COUNTERS ==================== 
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    const countUp = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const count = parseInt(counter.innerText);
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => countUp(counter), 1);
        } else {
            counter.innerText = target + '+';
        }
    };
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        counter.innerText = '0';
        observer.observe(counter);
    });
}

// ==================== BACK TO TOP BUTTON ==================== 
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
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
}

// ==================== CONTACT FORM HANDLING ==================== 
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();
            
            // Validate phone number
            if (phone.length < 10) {
                showNotification('Please enter a valid 10-digit phone number', 'error');
                return;
            }
            
            // Create WhatsApp message
            const whatsappMessage = createWhatsAppMessage(name, phone, service, message);
            
            // Open WhatsApp
            const whatsappURL = `https://api.whatsapp.com/send?phone=918629933125&text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappURL, '_blank');
            
            // Show success notification
            showNotification('✅ Redirecting to WhatsApp! We\'ll contact you within 24 hours.', 'success');
            
            // Reset form after a short delay
            setTimeout(() => {
                contactForm.reset();
            }, 1000);
        });
    }
    
    // Phone input validation
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
            if (this.value.length > 10) {
                this.value = this.value.slice(0, 10);
            }
        });
    }
}

function createWhatsAppMessage(name, phone, service, message) {
    let msg = `*🚀 New Inquiry - The Unlock Sales*\n\n`;
    msg += `*Name:* ${name}\n`;
    msg += `*Phone:* ${phone}\n`;
    msg += `*Service Interested:* ${service}\n`;
    if (message) {
        msg += `*Message:* ${message}\n`;
    }
    msg += `\n_Sent from TUS Website_`;
    return msg;
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️'
    };
    
    const colors = {
        success: 'linear-gradient(135deg, #10B981, #059669)',
        error: 'linear-gradient(135deg, #EF4444, #DC2626)',
        info: 'linear-gradient(135deg, #3B82F6, #2563EB)'
    };
    
    notification.innerHTML = `
        <span style="font-size: 1.5rem;">${icons[type]}</span>
        <span>${message}</span>
    `;
    
    // Mobile-friendly positioning
    const isMobile = window.innerWidth < 768;
    
    notification.style.cssText = `
        position: fixed;
        top: ${isMobile ? '80px' : '100px'};
        right: ${isMobile ? '15px' : '30px'};
        left: ${isMobile ? '15px' : 'auto'};
        background: ${colors[type]};
        color: white;
        padding: ${isMobile ? '15px 20px' : '20px 35px'};
        border-radius: 15px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 15px;
        animation: slideInRight 0.5s ease, slideOutRight 0.5s ease 2.5s;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: ${isMobile ? '0.9rem' : '1rem'};
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ==================== LAZY LOADING IMAGES ==================== 
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

document.addEventListener('DOMContentLoaded', initLazyLoading);

// ==================== PREVENT BOUNCE SCROLLING ON IOS ==================== 
if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    document.body.addEventListener('touchmove', function(e) {
        if (e.target.closest('.mobile-menu') || e.target.closest('textarea')) {
            return;
        }
    }, { passive: true });
}

// ==================== MOBILE TOUCH OPTIMIZATIONS ==================== 
if ('ontouchstart' in window) {
    // Add touch feedback
    document.addEventListener('touchstart', function() {}, { passive: true });
    
    // Prevent double-tap zoom on buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-nav-cta, .btn-whatsapp, .btn-view, .btn-submit');
    buttons.forEach(button => {
        button.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.click();
        }, { passive: false });
    });
    
    // Fast click for mobile
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(e) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

// ==================== PORTFOLIO ITEM TRACKING ==================== 
function trackPortfolioClick(portfolioName) {
    console.log(`Portfolio Clicked: ${portfolioName}`);
}

document.addEventListener('DOMContentLoaded', () => {
    const portfolioLinks = document.querySelectorAll('.portfolio-item .btn-view');
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function() {
            const portfolioName = this.closest('.portfolio-item').querySelector('.portfolio-name').textContent;
            trackPortfolioClick(portfolioName);
        });
    });
});

// ==================== PAGE VISIBILITY API ==================== 
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = '👋 Come Back! - The Unlock Sales';
    } else {
        document.title = 'The Unlock Sales | Database, Marketing & Website Services';
    }
});

// ==================== PERFORMANCE OPTIMIZATION ==================== 
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
    // Scroll optimization logic
}, 10);

window.addEventListener('scroll', optimizedScroll, { passive: true });

// ==================== LOADING ANIMATION ==================== 
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== CONSOLE BRANDING ==================== 
console.log('%c🚀 THE UNLOCK SALES', 'color: #FDCB58; font-size: 40px; font-weight: bold; font-family: Poppins;');
console.log('%cUnlock Growth, Leads & Sales', 'color: #0A0A45; font-size: 16px; font-family: Poppins; font-weight: bold;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #FDCB58;');
console.log('%c📞 Contact: +91 86299 33125', 'color: #10B981; font-size: 14px; font-weight: bold;');
console.log('%c💼 Services: Databases | Marketing | Websites', 'color: #0A0A45; font-size: 12px; font-weight: bold;');
console.log('%c📱 Mobile-First Design Optimized', 'color: #0A0A45; font-size: 12px; font-weight: bold;');
console.log('%c🎯 Opening Soon: Indore | Surat | Ahmedabad', 'color: #FDCB58; font-size: 12px; font-weight: bold;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #FDCB58;');

// ==================== EXTERNAL LINK HANDLING ==================== 
document.addEventListener('DOMContentLoaded', () => {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.setAttribute('rel', 'noopener noreferrer');
    });
});

// ==================== SERVICE WORKER REGISTRATION (OPTIONAL) ==================== 
if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}

// ==================== ORIENTATION CHANGE HANDLER ==================== 
window.addEventListener('orientationchange', () => {
    // Reload Lucide icons after orientation change
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 300);
});

// ==================== COPY TO CLIPBOARD ==================== 
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('📋 Copied to clipboard!', 'success');
        }).catch(() => {
            showNotification('Failed to copy', 'error');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showNotification('📋 Copied to clipboard!', 'success');
        } catch (err) {
            showNotification('Failed to copy', 'error');
        }
        document.body.removeChild(textArea);
    }
}

// ==================== SHARE FUNCTIONALITY ==================== 
function shareWebsite() {
    if (navigator.share) {
        navigator.share({
            title: 'The Unlock Sales',
            text: 'Check out The Unlock Sales - 40 Category Database, Website Creation & Digital Marketing Services',
            url: window.location.href
        }).then(() => {
            console.log('Shared successfully');
        }).catch((error) => {
            console.log('Error sharing:', error);
            copyToClipboard(window.location.href);
        });
    } else {
        copyToClipboard(window.location.href);
    }
}

// ==================== VIEWPORT HEIGHT FIX FOR MOBILE ==================== 
function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVH();
window.addEventListener('resize', debounce(setVH, 100));

// ==================== PREVENT ZOOM ON INPUT FOCUS (IOS) ==================== 
if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            const currentSize = window.getComputedStyle(input).fontSize;
            if (parseFloat(currentSize) < 16) {
                input.style.fontSize = '16px';
            }
        });
    });
}

// ==================== END OF SCRIPT ==================== 
console.log('✅ All JavaScript initialized successfully!');
console.log('🚀 The Unlock Sales is ready to unlock your business growth!');
console.log('📞 Call/WhatsApp: +91 86299 33125');
console.log('🎯 Best Sellers: ₹2,999 Database Pack | ₹2,499 Website');
console.log('📍 Opening Soon: Indore, Surat, Ahmedabad');
