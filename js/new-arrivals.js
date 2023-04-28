const slides = [
    '<div><img src="img/new_arrival_sticks.jpg" alt="Sticks"></div>',
    '<div><img src="img/new_arrival_toy.jpg" alt="Toy"></div>',
    '<div><img src="img/new_arrival_leash.jpg" alt="Leash"></div>',
    '<div><img src="img/new_arrival_bowl.jpg" alt="Bowl"></div>',
    '<div><img src="img/new_arrival_butterfly.jpg" alt="Butterfly"></div>'
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
// setInterval(nextSlide, 3000);


const btnNext = document.querySelector('.product-carousel-btn-prev');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.product-carousel-btn-next');
btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', showCurrentSlide);