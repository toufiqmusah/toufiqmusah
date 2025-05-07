// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - initializing dark mode');
    
    // Get the theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    
    if (!themeToggle) {
        console.error('Theme toggle button not found!');
        return;
    }
    
    console.log('Theme toggle found:', themeToggle);
    const icon = themeToggle.querySelector('i');
    
    // Check if dark mode is saved in localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        console.log('Dark mode was previously enabled, applying it');
        document.body.classList.add('dark-mode');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
    
    // Remove the onclick attribute to prevent conflicts
    themeToggle.removeAttribute('onclick');
    
    // Add click event to theme toggle
    themeToggle.addEventListener('click', function() {
        console.log('Theme toggle clicked');
        
        // Toggle dark mode class on body
        document.body.classList.toggle('dark-mode');
        
        // Check if dark mode is active
        if (document.body.classList.contains('dark-mode')) {
            console.log('Enabling dark mode');
            // Save preference to localStorage
            localStorage.setItem('darkMode', 'enabled');
            // Change icon to sun
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        } else {
            console.log('Disabling dark mode');
            // Remove preference from localStorage
            localStorage.setItem('darkMode', 'disabled');
            // Change icon to moon
            if (icon) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    });
    
    console.log('Dark mode initialization complete');
});
