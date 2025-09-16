// Website Functionality - Dual Style Version with Toggle

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add animation effects on scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.highlight-card, .project-card, .service-card, .goal-card, .interest-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    const interactiveElements = document.querySelectorAll('.btn, .external-link, .nav-links a');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Add loading animation
document.addEventListener('DOMContentLoaded', function() {
    // Add a subtle loading effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add focus indicators for keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #5d2f0a';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});

// Add performance optimization
document.addEventListener('DOMContentLoaded', function() {
    // Lazy load images when they come into view
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Add mobile menu functionality for smaller screens
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 768) {
        // Create mobile menu toggle if needed
        const mobileMenuToggle = document.createElement('button');
        mobileMenuToggle.innerHTML = '☰';
        mobileMenuToggle.className = 'mobile-menu-toggle';
        mobileMenuToggle.style.cssText = `
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: #5d2f0a;
            cursor: pointer;
            padding: 0.5rem;
        `;
        
        if (navLinks) {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.appendChild(mobileMenuToggle);
            }
            
            mobileMenuToggle.addEventListener('click', function() {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            });
            
            // Show mobile menu toggle on small screens
            if (window.innerWidth <= 768) {
                mobileMenuToggle.style.display = 'block';
                navLinks.style.display = 'none';
            }
        }
    }
});

// Add scroll-to-top functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '↑';
    scrollToTopButton.className = 'scroll-to-top';
    scrollToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #5d2f0a, #6b3e1a);
        color: white;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(93, 47, 10, 0.3);
    `;
    
    document.body.appendChild(scrollToTopButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopButton.style.opacity = '1';
            scrollToTopButton.style.visibility = 'visible';
        } else {
            scrollToTopButton.style.opacity = '0';
            scrollToTopButton.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add hover effect
    scrollToTopButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 6px 20px rgba(93, 47, 10, 0.4)';
    });
    
    scrollToTopButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 15px rgba(93, 47, 10, 0.3)';
    });
});

// Stylesheet Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the stylesheet links
    const mainStylesheet = document.getElementById('main-stylesheet');
    const altStylesheet = document.getElementById('alt-stylesheet');
    
    // Check if stylesheets exist
    if (!mainStylesheet || !altStylesheet) {
        console.log('Stylesheets not found');
        return;
    }
    
    // Initialize with main stylesheet active
    mainStylesheet.disabled = false;
    altStylesheet.disabled = true;
    
    // Get current theme from localStorage or default to main
    let currentTheme = localStorage.getItem('theme') || 'main';
    
    // Apply saved theme
    if (currentTheme === 'alt') {
        mainStylesheet.disabled = true;
        altStylesheet.disabled = false;
        document.body.setAttribute('data-theme', 'dark');
        document.body.classList.add('dark-theme');
    } else {
        document.body.removeAttribute('data-theme');
        document.body.classList.remove('dark-theme');
    }
    
    // Create toggle button
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = currentTheme === 'main' ? '🌙' : '☀️';
    toggleButton.className = 'theme-toggle';
    toggleButton.title = currentTheme === 'main' ? 'Switch to Dark Theme' : 'Switch to Light Theme';
    
    // Style the toggle button
    toggleButton.style.cssText = `
        position: fixed;
        bottom: 80px;
        left: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #5d2f0a, #6b3e1a);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 1001;
        box-shadow: 0 4px 15px rgba(93, 47, 10, 0.3);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Add hover effects for toggle button
    toggleButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.1)';
        this.style.boxShadow = '0 6px 20px rgba(93, 47, 10, 0.4)';
    });
    
    toggleButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(93, 47, 10, 0.3)';
    });
    
    // Toggle functionality
    toggleButton.addEventListener('click', function() {
        if (currentTheme === 'main') {
            // Switch to dark theme
            mainStylesheet.disabled = true;
            altStylesheet.disabled = false;
            currentTheme = 'alt';
            this.innerHTML = '☀️';
            this.title = 'Switch to Light Theme';
            // Update button style for dark theme
            this.style.background = 'linear-gradient(135deg, #ffffff, #888888)';
            this.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.3)';
            // Add data-theme attribute for dark mode styling
            document.body.setAttribute('data-theme', 'dark');
            document.body.classList.add('dark-theme');
        } else {
            // Switch to light theme
            mainStylesheet.disabled = false;
            altStylesheet.disabled = true;
            currentTheme = 'main';
            this.innerHTML = '🌙';
            this.title = 'Switch to Dark Theme';
            // Update button style for light theme
            this.style.background = 'linear-gradient(135deg, #5d2f0a, #6b3e1a)';
            this.style.boxShadow = '0 4px 15px rgba(93, 47, 10, 0.3)';
            // Remove data-theme attribute for light mode styling
            document.body.removeAttribute('data-theme');
            document.body.classList.remove('dark-theme');
        }
        
        // Save theme preference
        localStorage.setItem('theme', currentTheme);
        
        // Add transition effect
        document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
        
        // Update hover effects based on current theme
        const hoverEnterHandler = function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
            if (currentTheme === 'main') {
                this.style.boxShadow = '0 6px 20px rgba(93, 47, 10, 0.4)';
            } else {
                this.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.4)';
            }
        };
        
        const hoverLeaveHandler = function() {
            this.style.transform = 'translateY(0) scale(1)';
            if (currentTheme === 'main') {
                this.style.boxShadow = '0 4px 15px rgba(93, 47, 10, 0.3)';
            } else {
                this.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.3)';
            }
        };
        
        // Remove old event listeners and add new ones
        this.removeEventListener('mouseenter', hoverEnterHandler);
        this.removeEventListener('mouseleave', hoverLeaveHandler);
        this.addEventListener('mouseenter', hoverEnterHandler);
        this.addEventListener('mouseleave', hoverLeaveHandler);
    });
    
    // Set initial button style based on current theme
    if (currentTheme === 'alt') {
        toggleButton.style.background = 'linear-gradient(135deg, #ffffff, #888888)';
        toggleButton.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.3)';
    }
    
    // Add button to page
    document.body.appendChild(toggleButton);
    
    // Add smooth transition for theme changes
    const style = document.createElement('style');
    style.textContent = `
        * {
            transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease !important;
        }
    `;
    document.head.appendChild(style);
});