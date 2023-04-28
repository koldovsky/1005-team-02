const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.burger__menu');

burger.addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('active');
});