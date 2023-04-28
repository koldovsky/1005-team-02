const slides = [
    //Карусель №1
    '<div><img src="img/carousel-clients01.jpg" alt="Man with cat"></div>',
    //Карусель №2
    '<div><img src="img/carousel-clients02.jpg" alt="Woman with dog"></div>',
    //Карусель №3
    '<div><img src="img/carousel-clients03.jpg" alt="Man with a rabbit"></div>',
    //Карусель №4
    '<div><img src="img/carousel-clients04.jpg" alt="hamster"></div>',   
];
let currentSlide = 0;
function showCurrentSlide() {
    const slideContainer = document.querySelector ('.testimonials-clients-carousel-slide');
    slideContainer.innerHTML = slides[currentSlide];
}
function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    showCurrentSlide ();
}
setInterval(nextSlide, 2000);
nextSlide();

const btnNext = document.querySelector('.testimonials__clients-carousel-btn-next');
btnNext.addEventListener('click', nextSlide);
