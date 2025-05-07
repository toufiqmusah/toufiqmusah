// Simple dark mode script
document.addEventListener('DOMContentLoaded', function() {
    // Get the button
    const darkModeToggle = document.getElementById('themeToggle');
    
    if (!darkModeToggle) {
        console.error('Dark mode toggle button not found');
        return;
    }
    
    // Apply saved theme
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.querySelector('i').className = 'fas fa-sun';
    }
    
    // Add click event
    darkModeToggle.addEventListener('click', function() {
        alert('Dark mode toggle clicked!');
        document.body.classList.toggle('dark-mode');
        
        // Save preference
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.querySelector('i').className = 'fas fa-sun';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.querySelector('i').className = 'fas fa-moon';
        }
    });
});
