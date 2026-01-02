// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Initialize EmailJS
(function() {
    emailjs.init('YOUR_USER_ID');
})();

// Form submission handling
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this, 'YOUR_USER_ID')
        .then(function() {
            alert('Thank you for your message! I will get back to you soon.');
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.log('FAILED...', error);
        });

    this.reset();
});
