// Function to handle page switching
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Remove active class from all nav buttons
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Add active class to the clicked button
    const clickedButton = document.querySelector(`button[onclick="showPage('${pageId}')"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }

    // Scroll to top when switching pages
    window.scrollTo(0, 0);
}

// Document ready function
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dark mode
    initDarkMode();
    
    // Add smooth scroll behavior for anchor links
    addSmoothScrolling();
    
    // Add hover effects to navigation buttons
    addNavHoverEffects();
    
    // Add click event to floating dinosaur
    initFloatingDino();
});

// Initialize floating dinosaur functionality
function initFloatingDino() {
    const floatingDinos = document.querySelectorAll('.floating-dino');
    floatingDinos.forEach(dino => {
        dino.addEventListener('click', () => {
            alert('Focus mode activated! 🦖');
        });
    });
}

// Dark mode functionality
function initDarkMode() {
    // Remove the old theme toggle button if it exists
    const oldToggle = document.querySelector('.theme-toggle');
    if (oldToggle) {
        oldToggle.remove();
    }
    
    // Create the new dark mode button
    const darkModeButton = document.createElement('button');
    darkModeButton.id = 'darkModeButton';
    darkModeButton.className = 'theme-toggle';
    darkModeButton.style.position = 'fixed';
    darkModeButton.style.top = '20px';
    darkModeButton.style.right = '30px';
    darkModeButton.style.width = '40px';
    darkModeButton.style.height = '40px';
    darkModeButton.style.borderRadius = '50%';
    darkModeButton.style.backgroundColor = '#f0f0f0';
    darkModeButton.style.border = 'none';
    darkModeButton.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    darkModeButton.style.cursor = 'pointer';
    darkModeButton.style.zIndex = '1000';
    darkModeButton.style.display = 'flex';
    darkModeButton.style.alignItems = 'center';
    darkModeButton.style.justifyContent = 'center';
    darkModeButton.style.transition = 'all 0.3s ease';
    darkModeButton.title = 'Toggle Dark/Light Mode';
    
    // Create icon
    const icon = document.createElement('i');
    icon.className = 'fas fa-moon';
    icon.style.fontSize = '20px';
    icon.style.color = '#333';
    icon.style.transition = 'all 0.3s ease';
    
    // Check if dark mode is saved in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    
    // Set initial state
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeButton.style.backgroundColor = '#1e1e1e';
        icon.className = 'fas fa-sun';
        icon.style.color = '#f0f0f0';
    }
    
    // Add icon to button
    darkModeButton.appendChild(icon);
    
    // Add click event
    darkModeButton.onclick = function() {
        // Add pulse animation
        this.style.animation = 'none';
        this.offsetHeight; // Trigger reflow
        this.style.animation = 'pulse 0.5s ease';
        
        // Toggle dark mode
        document.body.classList.toggle('dark-mode');
        
        // Update button style based on current state
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        if (isDarkMode) {
            this.style.backgroundColor = '#1e1e1e';
            icon.className = 'fas fa-sun';
            icon.style.color = '#f0f0f0';
        } else {
            this.style.backgroundColor = '#f0f0f0';
            icon.className = 'fas fa-moon';
            icon.style.color = '#333';
        }
        
        // Save preference to localStorage
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
        
        console.log('Dark mode toggled:', isDarkMode);
    };
    
    // Add button to the body
    document.body.appendChild(darkModeButton);
    
    console.log('Dark mode button initialized');
}

// Add smooth scrolling for anchor links
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// Add hover effects to navigation buttons
function addNavHoverEffects() {
    const navButtons = document.querySelectorAll('.navigation-buttons button');
    
    navButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });
}

// Detect if user is idle and change the dinosaur status
let idleTimer;
const idleTime = 60000; // 1 minute

function resetIdleTimer() {
    clearTimeout(idleTimer);
    const dinoStatus = document.querySelector('.floating-dino span');
    if (dinoStatus) {
        dinoStatus.textContent = 'focusing';
    }
    
    idleTimer = setTimeout(() => {
        const dinoStatus = document.querySelector('.floating-dino span');
        if (dinoStatus) {
            dinoStatus.textContent = 'waiting...';
        }
    }, idleTime);
}

// Reset the idle timer on user activity
window.addEventListener('mousemove', resetIdleTimer);
window.addEventListener('keypress', resetIdleTimer);
window.addEventListener('scroll', resetIdleTimer);
window.addEventListener('click', resetIdleTimer);

// Initialize the idle timer
resetIdleTimer();
