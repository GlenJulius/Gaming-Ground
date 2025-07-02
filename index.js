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
  if (!navLinks.length) return};

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
// ...existing code...

// Fetch and display games from RAWG API
function fetchGames() {
  fetch('https://api.rawg.io/api/games?key=YOUR_API_KEY&page_size=5')
    .then(response => response.json())
    .then(data => {
      const gamesList = document.getElementById('games-list');
      if (!gamesList) return;
      gamesList.innerHTML = data.results.map(game => `
        <div class="game-card">
          <img src="${game.background_image}" alt="${game.name}" style="width:100px;border-radius:8px;">
          <span>${game.name}</span>
        </div>
      `).join('');
    })
    .catch(err => {
      console.error('Error fetching games:', err);
    });
}

// Call fetchGames on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  // ...existing code...
  fetchGames();
});