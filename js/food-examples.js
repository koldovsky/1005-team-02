const slides = document.querySelectorAll(".food-container__item-slide");
const prevBtn = document.querySelector(".examples-prev-slide");
const nextBtn = document.querySelector(".examples-next-slide");

let currentSlide = 0;
const lastSlide = slides.length - 1;

slides[currentSlide].classList.add("show-slide");
for (let i = 1; i <= lastSlide; i++) {
  slides[i].classList.add("hide-slide");
}

nextBtn.addEventListener("click", () => {
  changeSlide(1);
});

prevBtn.addEventListener("click", () => {
  changeSlide(-1);
});

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) {
    currentSlide = lastSlide;
  } else if (currentSlide > lastSlide) {
    currentSlide = 0;
  }
  showSlide();
}

function showSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("show-slide");
    slide.classList.add("hide-slide");
  });
  slides[currentSlide].classList.remove("hide-slide");
  slides[currentSlide].classList.add("show-slide");
}
