const slides = [
'<div class="carousel__slide-clients"><img src="img/carousel-clients01.jpg" alt="Man with cat"><h3 class="testimonials-client__name">Douglas Wright</h3><p class="testimonials_client__subtitle">and his gorgeous cat named Billy</p> <p class="testimonials__client_comment">"I often order food for my cat from this store as they offer free shipping. The prices here are quite low, and you can order a lot of great goods by top manufacturers"</p><p class="testimonials__date">Decemder 15,2021</p></div>',
'<div class="carousel__slide-clients"><img src="img/carousel-clients02.jpg" alt="Woman with dog"><h3 class="testimonials-client__name">Diana Peterson</h3><p class="testimonials_client__subtitle">with Cooper, her lovely dog</p><p class="testimonials__client_comment">"My Cooper is already 10 years old and for the last 3 years, I have been ordering food, new leashes, and vitamins only at Happy Paw. They sell really high-quality goods!"</p><p class="testimonials__date">February 02,2022</p></div>',
'<div class="carousel__slide-clients"><img src="img/carousel-clients03.jpg" alt="Man with a rabbit"><h3 class="testimonials-client__name">Jonh and Mary Roberts</h3><p class="testimonials_client__subtitle">and their cool rabbit named Snowball</p><p class="testimonials__client_comment">"When we bought Snowball, Mary was very happy, but there were also many questions - we needed a cage, cleaning products, hay, etc. But we easily found all this in Happy Paw!"</p><p class="testimonials__date">March 28,2022</p></div>',
'<div class="carousel__slide-clients"><img src="img/carousel-clients04.jpg" alt="hamster"><h3 class="testimonials-client__name">Dean Williamson</h3><p class="testimonials_client__subtitle">with Booper, the star of his Instagram</p><p class="testimonials__client_comment">"Booper gets all the best from me and the Happy Paw store! I often treat him with some new toys, decorations for his cage, etc. I absolutely trust Happy Paw."</p><p class="testimonials__date">May 05,2022</p></div>'
];
let currentSlide = 0;

function showCurrentSlide() {
    const slideContainer = document.querySelector('.testimonials-cliens__carousel-slide');
    slideContainer.innerHTML = slides[currentSlide];
    if (window.innerWidth > 770) {
        const secondSlideIdx = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.innerWidth > 900) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];  
        }
    }
}

function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    showCurrentSlide();
}
function prevSlide() {
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    showCurrentSlide();
}
nextSlide();

const btnNext = document.querySelector('.testimonials-cliens__carousel-btn-next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.testimonials-cliens__carousel-btn-prev');
btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', showCurrentSlide);