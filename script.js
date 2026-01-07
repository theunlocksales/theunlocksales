/* ========================================
   THE UNLOCK SALES - MODERN JAVASCRIPT
   Premium Interactive Features
   ======================================== */

'use strict';

// ========================================
// GLOBAL VARIABLES
// ========================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollToTopBtn = document.getElementById('scrollToTop');

// ========================================
// MOBILE MENU TOGGLE
// ========================================

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ========================================
// NAVBAR SCROLL BEHAVIOR
// ========================================

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 500) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// ========================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ========================================

const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ========================================
// SMOOTH SCROLLING
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Check if href is just "#" or a valid ID
        if (href === '#' || href === '') return;
        
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// SCROLL TO TOP BUTTON
// ========================================

if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('active');
        } else {
            scrollToTopBtn.classList.remove('active');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// PORTFOLIO FILTER
// ========================================

const filterButtons = document.querySelectorAll('.filter-btn-modern');
const portfolioCards = document.querySelectorAll('.portfolio-full-card, .portfolio-modern-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter portfolio items
            portfolioCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else if (card.classList.contains(filter)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ========================================
// FAQ ACCORDION
// ========================================

const faqItems = document.querySelectorAll('.faq-modern-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-modern-question');
    
    if (question) {
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    }
});

// ========================================
// FORM VALIDATION & SUBMISSION
// ========================================

const inquiryForm = document.getElementById('inquiryForm');
const formMessage = document.getElementById('formMessage');

if (inquiryForm) {
    inquiryForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('inquiry-name')?.value || '',
            email: document.getElementById('inquiry-email')?.value || '',
            phone: document.getElementById('inquiry-phone')?.value || '',
            company: document.getElementById('inquiry-company')?.value || '',
            service: document.getElementById('inquiry-service')?.value || '',
            budget: document.getElementById('inquiry-budget')?.value || '',
            message: document.getElementById('inquiry-message')?.value || ''
        };
        
        // Validation
        if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Phone validation
        const phoneRegex = /^[0-9+\s\-()]{10,}$/;
        if (!phoneRegex.test(formData.phone)) {
            showFormMessage('Please enter a valid phone number (minimum 10 digits).', 'error');
            return;
        }
        
        // Get submit button
        const submitBtn = inquiryForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        try {
            // Simulate form submission
            await simulateFormSubmission(formData);
            
            showFormMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.', 'success');
            inquiryForm.reset();
            
            // Optional: Integrate with your backend or email service here
            // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
            
        } catch (error) {
            showFormMessage('Oops! Something went wrong. Please try again or contact us directly at +91 86299 33125.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    });
}

function showFormMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message-modern ${type}`;
        formMessage.style.display = 'block';
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Auto hide success messages after 7 seconds
        if (type === 'success') {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 7000);
        }
    }
}

// Simulate form submission
function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Form submitted:', data);
            // Always resolve for demo purposes
            resolve();
        }, 1500);
    });
}

// ========================================
// FORM INPUT ANIMATIONS
// ========================================

const formInputs = document.querySelectorAll('.form-group-modern input, .form-group-modern textarea, .form-group-modern select');

formInputs.forEach(input => {
    // Add focused class on focus
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    // Remove focused class on blur if empty
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
    
    // Check if input has value on page load
    if (input.value) {
        input.parentElement.classList.add('focused');
    }
});

// ========================================
// LAZY LOADING IMAGES (If needed)
// ========================================

const images = document.querySelectorAll('img[data-src]');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// KEYBOARD ACCESSIBILITY
// ========================================

document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Close active FAQ
        faqItems.forEach(item => item.classList.remove('active'));
    }
});

// ========================================
// CONSOLE BRANDING
// ========================================

console.log('%c🚀 The Unlock Sales', 'font-size: 24px; font-weight: bold; color: #667eea;');
console.log('%cPremium Web Development & Digital Marketing', 'font-size: 14px; color: #64748b;');
console.log('%cWebsite: https://theunlocksales.github.io/theunlocksales/', 'font-size: 12px; color: #667eea;');
console.log('%cContact: +91 86299 33125', 'font-size: 12px; color: #667eea;');
console.log('%c────────────────────────────────────────', 'color: #e2e8f0;');

// ========================================
// PAGE LOAD PERFORMANCE
// ========================================

window.addEventListener('load', () => {
    const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    console.log(`⚡ Page loaded in ${loadTime}ms`);
});

// ========================================
// CURRENT YEAR IN FOOTER
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
});

// ========================================
// PREVENT FORM RESUBMISSION
// ========================================

if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// ========================================
// END OF SCRIPT
// ========================================

console.log('%c✨ All scripts loaded successfully!', 'color: #10b981; font-weight: bold;');
