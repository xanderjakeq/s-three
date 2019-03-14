const logo = document.querySelector('.mobile-menu');
const navBar = document.querySelector('nav');

logo.addEventListener('click', function () {
    navBar.classList.toggle('navOn');
});

const button = document.querySelector('button');

button.addEventListener('mousedown', function () {
    button.classList.add('buttonClick');
});

button.addEventListener('mouseup', function () {
    button.classList.remove('buttonClick');
});