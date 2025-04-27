document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 300); // Stagger the animations by 300ms
    });
});

function toggleMenu() {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('show');
}

function closeMenu() {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.remove('show');
}

