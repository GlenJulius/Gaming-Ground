// Show a non-blocking welcome message on page load
window.addEventListener('DOMContentLoaded', () => {
  showWelcomeMessage();
  updateFooterYear();
  activateNavLinks();
});

// Function to show a welcome message (non-blocking)
function showWelcomeMessage() {
  const message = document.createElement('div');
  message.textContent = 'Welcome to Gaming Ground!';
  message.setAttribute('role', 'status');
  message.style.position = 'fixed';
  message.style.top = '20px';
  message.style.left = '50%';
  message.style.transform = 'translateX(-50%)';
  message.style.background = '#222';
  message.style.color = '#fff';
  message.style.padding = '12px 24px';
  message.style.borderRadius = '8px';
  message.style.zIndex = '1000';
  message.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 2500);
}

// Function to update footer with current year
function updateFooterYear() {
  const footer = document.querySelector('footer p');
  if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} Gaming Ground. All rights reserved.`;
  }
}

// Function to highlight active nav link
function activateNavLinks() {
  const navLinks = document.querySelectorAll('nav a');
  if (!navLinks.length) return;

  // Highlight based on current URL
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
    // Also allow click to highlight
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}