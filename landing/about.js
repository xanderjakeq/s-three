//Mobile/desktop menu
const logo = document.querySelector('.mobile-menu');
const navBar = document.querySelector('nav');

logo.addEventListener('click', function () {
    navBar.classList.toggle('navOn');
});


//button clicks
const button = document.querySelectorAll('button');

button.forEach(function (click) {
    click.addEventListener('mousedown', function () {
        click.classList.add('buttonClick');
    });

    click.addEventListener('mouseup', function () {
        click.classList.remove('buttonClick');
    });
});