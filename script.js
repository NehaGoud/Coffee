let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');

menu.onClick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}