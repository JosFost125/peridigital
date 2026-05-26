
const botonMenu = document.querySelector('.menu-movil');
const enlacesNav = document.querySelector('.nav-links');
const header = document.querySelector('header');

function toggleMenu() {
  if (!enlacesNav) return;
  enlacesNav.classList.toggle('activo');
}

if (botonMenu) {
  botonMenu.addEventListener('click', toggleMenu);
}

// Cerrar menú al hacer click en un enlace
if (enlacesNav) {
  enlacesNav.addEventListener('click', (e) => {
    const target = e.target?.closest('a');
    if (target) enlacesNav.classList.remove('activo');
  });
}

// Al scrollear hacia abajo, esconder logo + índice del header
function updateHeaderOnScroll() {
  const y = window.scrollY || window.pageYOffset;
  header?.classList.toggle('scrolled', y > 30);
}

window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll();



// Año actual en el footer
const anio = document.getElementById('anio');
if (anio) anio.textContent = new Date().getFullYear();




