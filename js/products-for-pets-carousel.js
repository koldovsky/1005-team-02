
const carousel = document.querySelector('.products-for-pets__carousel');
const slideWidth = carousel.querySelector('.carousel__slide').offsetWidth;
const slides = carousel.querySelectorAll('.carousel__slide');
const slideCount = slides.length;
const inner = carousel.querySelector('.products-for-pets__carousel__inner');
let slideIndex = 0;
let intervalId;

function goToSlide(index) {
  inner.style.transform = `translateX(-${slideWidth * index}px)`;
  slideIndex = index;
}

function slidePrev() {
  const firstSlide = inner.querySelector('.carousel__slide');
  inner.insertBefore(slides[slideCount - 1], firstSlide);
  inner.style.transition = 'none';
  inner.style.transform = `translateX(-${slideWidth}px)`;
  setTimeout(() => {
    inner.style.transition = '';
    inner.style.transform = `translateX(0)`;
  }, 50);
}

function slideNext() {
  const firstSlide = inner.querySelector('.carousel__slide');
  inner.style.transition = '';
  inner.style.transform = `translateX(-${slideWidth}px)`;
  setTimeout(() => {
    inner.style.transition = 'none';
    inner.appendChild(firstSlide);
    inner.style.transform = `translateX(0)`;
  }, 500);
}

function startCarousel() {
  intervalId = setInterval(slideNext, 5000);
}

function stopCarousel() {
  clearInterval(intervalId);
}

carousel.querySelector('.carousel__button--prev').addEventListener('click', () => {
  stopCarousel();
  slidePrev();
  startCarousel()
});

carousel.querySelector('.carousel__button--next').addEventListener('click', () => {
  stopCarousel();
  slideNext();
  startCarousel()
});

startCarousel();
