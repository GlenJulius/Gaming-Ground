// Display welcome message on page load
window.addEventListener('DOMContentLoaded', () => {
  alert('Welcome to Gaming Ground!');
  updateFooterYear();
  activateNavLinks();
});

// Function to update footer with current year
function updateFooterYear() {
  const footer = document.querySelector('footer p');
  const currentYear = new Date().getFullYear();
  footer.innerHTML = `&copy; ${currentYear} Gaming Ground. All rights reserved.`;
}

// Function to highlight active nav link
function activateNavLinks() {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}
