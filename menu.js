// defining a function named toggleMenu
function toggleMenu() {
  let menu = document.getElementById('main-menu');
  //if 'show' class is present, it removes it; if not, it adds it
  menu.classList.toggle('show');
}

let toggle = document.getElementById('menu-toggle');
// when the toggle button is clicked, it will run toggleMenu function
toggle.onclick = toggleMenu;
