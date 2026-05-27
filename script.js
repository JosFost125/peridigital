
const botonMenu = document.querySelector('.menu-movil');
const enlacesNav = document.querySelector('.nav-links');
const header = document.querySelector('header');

const setMenu = (abierto) => {
  if (!enlacesNav) return;
  enlacesNav.classList.toggle('activo', abierto);
  if (botonMenu) botonMenu.setAttribute('aria-expanded', String(abierto));
};

if (botonMenu) {
  botonMenu.setAttribute('aria-expanded', 'false');
  botonMenu.addEventListener('click', () => {
    const abierto = !enlacesNav.classList.contains('activo');
    setMenu(abierto);
  });
}

// Cerrar menú al hacer click en un enlace
if (enlacesNav) {
  enlacesNav.addEventListener('click', (e) => {
    if (e.target?.closest('a')) setMenu(false);
  });
}

// Cerrar menú al hacer click fuera del panel (móvil)
document.addEventListener('click', (e) => {
  if (!enlacesNav || !botonMenu) return;
  const clickEnMenu = e.target?.closest('.nav-links');
  const clickEnBoton = e.target?.closest('.menu-movil');
  if (enlacesNav.classList.contains('activo') && !clickEnMenu && !clickEnBoton) {
    setMenu(false);
  }
});



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

// Microinteracciones: reveal al entrar en pantalla (IntersectionObserver)
// Aplica un efecto fade/slide a las noticias.
(function initReveal() {
  const noticias = document.querySelectorAll('.noticia');
  if (!('IntersectionObserver' in window) || noticias.length === 0) return;

  const animar = (el) => {
    el.classList.add('reveal');
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          animar(entry.target);
          observer.unobserve(entry.target);
        }
      }
    },
    { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
  );

  noticias.forEach((n) => {
    // estado inicial
    n.classList.add('reveal-init');
    observer.observe(n);
  });
})();





