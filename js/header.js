const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.burger__menu');
const menuItem = document.querySelectorAll('.burger__item');

console.log(menuItem);

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', function() {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });
}