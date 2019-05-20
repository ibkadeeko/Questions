const menuToggle = document.querySelector('.menu-toggle'); // Menu Toggle
const navBar = document.querySelector('nav'); // Menu Toggle

/** Toggles the menu display in a smaller view port */
if (menuToggle && navBar) {
  menuToggle.addEventListener('click', () => {
    navBar.classList.toggle('menu');
  });
}
