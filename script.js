// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navbar = document.querySelector('.navbar');
  const nav = document.querySelector('.navbar nav');
  const navLinks = document.querySelectorAll('.navbar nav a');
  
  if (mobileMenuBtn && nav) {
    // Toggle menu when hamburger is clicked
    mobileMenuBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      nav.classList.toggle('mobile-open');
      mobileMenuBtn.classList.toggle('menu-open');
    });
    
    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        if (link.classList.contains('btn')) return; // Don't close for button links
        nav.classList.remove('mobile-open');
        mobileMenuBtn.classList.remove('menu-open');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navbar.contains(e.target)) {
        nav.classList.remove('mobile-open');
        mobileMenuBtn.classList.remove('menu-open');
      }
    });
  }
});
