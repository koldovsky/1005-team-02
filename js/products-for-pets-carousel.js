const slides = [
    '<div><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
    '<div><img src="img/banana.svg" alt="Banana"></div>',
    '<div><img src="img/girl.svg" alt="Girl"></div>',
    '<div><img src="img/viking.svg" alt="Viking"></div>',
    '<div><img src="img/viking.svg" alt="Viking"></div>',
    '<div><img src="img/viking.svg" alt="Viking"></div>'
];

let currentSlide = 0;

function showCurrentSlide() {
    const slideContainer = document.querySelector('.products__carousel-slide');
    slideContainer.innerHTML = slides[currentSlide];
    if (window.innerWidth > 768) {
        const secondSlideIdx = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.innerWidth > 1024) {
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
setInterval(nextSlide, 3000);

const btnNext = document.querySelector('.products__carousel-btn-next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.products__carousel-btn-prev');
btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', showCurrentSlide);