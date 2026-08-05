// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navbar = document.querySelector('.navbar nav');
  
  if (mobileMenuBtn && navbar) {
    mobileMenuBtn.addEventListener('click', function() {
      navbar.classList.toggle('mobile-open');
      mobileMenuBtn.classList.toggle('menu-open');
    });
  }
  
  // Close mobile menu when a link is clicked
  const navLinks = document.querySelectorAll('.navbar nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navbar.classList.remove('mobile-open');
      mobileMenuBtn.classList.remove('menu-open');
    });
  });
});
