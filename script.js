// Menu toggle
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const fullMenu = document.getElementById('fullMenu');

menuBtn.addEventListener('click', () => {
  fullMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  fullMenu.classList.remove('active');
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && fullMenu.classList.contains('active')) {
    fullMenu.classList.remove('active');
  }
});

// Close menu when clicking dark background (outside white card)
fullMenu.addEventListener('click', (e) => {
  if (e.target === fullMenu) {
    fullMenu.classList.remove('active');
  }
});