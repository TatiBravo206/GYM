//seccion de los planes (carrusel)
const track = document.querySelector('.carousel-track');
const cards = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;
const visibleCards = 3;
const cardWidth = cards[0].getBoundingClientRect().width + 32;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextButton.addEventListener('click', () => {
  if (currentIndex < cards.length - visibleCards) {
    currentIndex++;
    updateCarousel();
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Cerrar menú en móvil 
const menuToggle = document.getElementById('menu-toggle');
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (menuToggle?.checked) menuToggle.checked = false;
  });
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (e) => {
  const nav = document.querySelector('.nav');
  const menuLabel = document.querySelector('label[for="menu-toggle"]');

  if (
    menuToggle?.checked &&
    !nav.contains(e.target) &&
    e.target !== menuToggle &&
    !menuLabel.contains(e.target)
  ) {
    menuToggle.checked = false;
  }
});