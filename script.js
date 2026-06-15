// Wait for the HTML to fully load before running the script
document.addEventListener("DOMContentLoaded", function() {
    
    // Feature 1: Dark Mode Toggle
    const toggleBtn = document.getElementById("darkModeToggle");

    // Check if the button exists on the page
    if (toggleBtn) {
        toggleBtn.addEventListener("click", function() {
            // Add or remove the 'dark-mode' class on the body tag
            document.body.classList.toggle("dark-mode");
        });
    }

});