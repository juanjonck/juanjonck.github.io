/**
 * JUAN JONCK PORTFOLIO - MAIN JAVASCRIPT
 * Plain JS for GitHub Pages
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Initialize all modules
    initNavigation();
    initScrollAnimations();
    initHeroAnimations();
    initProjectAnimations();
    initAboutAnimations();
    initContactAnimations();
});

/**
 * NAVIGATION
 * Handles navbar scroll effect and mobile menu
 */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const menuBtn = document.getElementById('menuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });
    
    // Mobile menu toggle
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.remove('translate-x-full');
        });
    }
    
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('translate-x-full');
        });
    }
    
    // Close mobile menu on link click
    mobileNavLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('translate-x-full');
        });
    });
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/**
 * SCROLL ANIMATIONS
 * Uses GSAP ScrollTrigger for scroll-based animations
 */
function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Refresh ScrollTrigger on window resize
    window.addEventListener('resize', function() {
        ScrollTrigger.refresh();
    });
}

/**
 * HERO ANIMATIONS
 * Entrance animations for hero section
 */
function initHeroAnimations() {
    const heroPortrait = document.querySelector('.hero-portrait');
    const heroText = document.querySelector('.hero-text');
    const heroBg = document.querySelector('.hero-bg');
    
    // Initial load animation
    const heroTl = gsap.timeline({ delay: 0.2 });
    
    if (heroPortrait) {
        heroTl.fromTo(heroPortrait,
            { x: '-60vw', opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power2.out' },
            0
        );
    }
    
    if (heroText) {
        heroTl.fromTo(heroText,
            { x: '60vw', opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power2.out' },
            0
        );
    }
    
    // Hero scroll parallax (only on desktop)
    if (window.innerWidth > 1024 && heroBg) {
        gsap.to(heroBg, {
            y: '-10vh',
            scale: 1.06,
            ease: 'none',
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    }
}

/**
 * PROJECT ANIMATIONS
 * Animations for project sections
 */
function initProjectAnimations() {
    // Skip on mobile
    if (window.innerWidth <= 1024) return;
    
    const projectSections = document.querySelectorAll('.project-section');
    
    projectSections.forEach(function(section) {
        const image = section.querySelector('.project-image');
        const text = section.querySelector('.project-text');
        const index = section.querySelector('.project-index');
        
        // Create timeline for each project section
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1
            }
        });
        
        if (image) {
            tl.fromTo(image,
                { x: '-10vw', opacity: 0.5 },
                { x: 0, opacity: 1, ease: 'none' },
                0
            );
        }
        
        if (text) {
            tl.fromTo(text,
                { x: '10vw', opacity: 0.5 },
                { x: 0, opacity: 1, ease: 'none' },
                0
            );
        }
        
        if (index) {
            tl.fromTo(index,
                { y: '-5vh', opacity: 0 },
                { y: 0, opacity: 0.3, ease: 'none' },
                0
            );
        }
    });
    
    // Project Overview Section
    const projectOverview = document.getElementById('work');
    if (projectOverview && window.innerWidth > 1024) {
        const bg = projectOverview.querySelector('.project-overview-bg');
        const label = projectOverview.querySelector('.project-label');
        const headline = projectOverview.querySelector('.project-headline');
        const card = projectOverview.querySelector('.project-card');
        
        gsap.fromTo([label, headline, card],
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: projectOverview,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
        
        if (bg) {
            gsap.fromTo(bg,
                { scale: 1.1 },
                {
                    scale: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: projectOverview,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                }
            );
        }
    }
    
    // Personal Lab Section
    const labSection = document.getElementById('lab');
    if (labSection && window.innerWidth > 1024) {
        const bg = labSection.querySelector('.lab-bg');
        const label = labSection.querySelector('.lab-label');
        const headline = labSection.querySelector('.lab-headline');
        const card = labSection.querySelector('.lab-card');
        
        gsap.fromTo([label, headline, card],
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: labSection,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
        
        if (bg) {
            gsap.fromTo(bg,
                { scale: 1.1 },
                {
                    scale: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: labSection,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                }
            );
        }
    }
}

/**
 * ABOUT ANIMATIONS
 * Animations for about section
 */
function initAboutAnimations() {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;
    
    // Heading animation
    const heading = aboutSection.querySelector('.about-heading');
    if (heading) {
        gsap.fromTo(heading,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: heading,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }
    
    // Stats animation
    const stats = aboutSection.querySelectorAll('.stat-item');
    gsap.fromTo(stats,
        { y: 30, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.about-stats',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        }
    );
    
    // Content blocks animation
    const contentBlocks = aboutSection.querySelectorAll('.content-block');
    gsap.fromTo(contentBlocks,
        { y: 40, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.about-content',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        }
    );
    
    // Skill bars animation
    const skillBars = aboutSection.querySelectorAll('.progress-bar-fill');
    skillBars.forEach(function(bar) {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        gsap.to(bar, {
            width: width,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: bar,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

/**
 * CONTACT ANIMATIONS
 * Animations for contact section
 */
function initContactAnimations() {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;
    
    // Heading animation
    const heading = contactSection.querySelector('.contact-heading');
    if (heading) {
        gsap.fromTo(heading,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: heading,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }
    
    // Detail items animation
    const detailItems = contactSection.querySelectorAll('.detail-item');
    gsap.fromTo(detailItems,
        { x: -30, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.contact-details',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        }
    );
}

/**
 * INTERSECTION OBSERVER FALLBACK
 * Simple fade-in animation for browsers without GSAP
 */
function initIntersectionObserver() {
    // Check if GSAP is available
    if (typeof gsap !== 'undefined') return;
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.content-block, .stat-item, .detail-item').forEach(function(el) {
        observer.observe(el);
    });
}

// Initialize intersection observer as fallback
initIntersectionObserver();
