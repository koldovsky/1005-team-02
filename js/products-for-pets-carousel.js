const carousel = document.querySelector('.products-for-pets__carousel');
const carouselInner = carousel.querySelector('.products-for-pets__carousel__inner');
const prevButton = carousel.querySelector('.carousel__button--prev');
const nextButton = carousel.querySelector('.carousel__button--next');
const productCards = carouselInner.querySelectorAll('.carousel__slide');

let currentIndex = 0;

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + productCards.length) % productCards.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % productCards.length;
    updateCarousel();
});