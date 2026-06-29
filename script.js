// Wait for the HTML to fully load before running the script
document.addEventListener("DOMContentLoaded", function() {
    
    // Feature 1: Dark Mode Toggle
    const toggleBtn = document.getElementById("darkModeToggle");
    // Feature 2: Client-side Contact Form Validation
    const contactForm = document.getElementById("contactForm");

    // Prevent execution errors by ensuring the element exists on the page
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            // Stop the standard page reload submission behavior
            event.preventDefault();

            const emailInput = document.getElementById("userEmail").value.trim();
            const messageInput = document.getElementById("userMessage").value.trim();
            const feedbackElement = document.getElementById("formFeedback");

            // Basic conditional verification check
            if (emailInput === "" || messageInput === "") {
                feedbackElement.style.color = "#dc3545"; // Bootstrap Danger Red
                feedbackElement.textContent = "Error: Please complete both fields before sending.";
            } else {
                feedbackElement.style.color = "#198754"; // Bootstrap Success Green
                feedbackElement.textContent = "Success! Your message was transmitted.";
                contactForm.reset(); // Clear input elements
            }
        });
    }

    // Check if the button exists on the page
    if (toggleBtn) {
        toggleBtn.addEventListener("click", function() {
            // Add or remove the 'dark-mode' class on the body tag
            document.body.classList.toggle("dark-mode");
        });
    }

});