let slideIndex = 0;

function showSlide(startIndex) {
  const slides = document.querySelectorAll(".pet-food_carousel_slide");
  for (let i = 0; i < slides.length; i++) {
    if (i >= startIndex && i < startIndex + 6) {
      slides[i].style.display = "block";
    } else {
      slides[i].style.display = "none";
    }
  }
}


function changeSlide(n) {
  slideIndex += n;
  const slides = document.querySelectorAll(".pet-food_carousel_slide");
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex + 6 > slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}


const prevBtn = document.querySelector(".pet-food__arrow-left");
const nextBtn = document.querySelector(".pet_food__arrow-right");

prevBtn.addEventListener("click", () => {
  changeSlide(-1);
});

nextBtn.addEventListener("click", () => {
  changeSlide(1);
});

showSlide();
