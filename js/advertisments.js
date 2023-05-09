const slides = document.querySelectorAll('.pet-food__carousel_slide'),
      first = document.querySelector('#pet-food_f'),
      last = document.querySelector('#pet-food_l'),
      prevBtn = document.querySelector(".pet-food__arrow-left"),
      nextBtn = document.querySelector(".pet-food__arrow-right");


prevBtn.addEventListener("click", () => {
  first.classList.remove('hide');
  last.classList.add('hide');
});

nextBtn.addEventListener("click", () => {
  first.classList.add('hide');
  last.classList.remove('hide');
});
// let slideIndex = 0;

// function showSlide() {
//   const slides = document.querySelectorAll(".pet-food_carousel_slide");
//   const startIndex = slideIndex * 6;
//   const endIndex = startIndex + 6;
  
//   for (let i = 0; i < slides.length; i++) {
//     if (i >= startIndex && i < endIndex) {
//       slides[i].style.display = "block";
//     } else {
//       slides[i].style.display = "none";
//     }
//   }
// }



// function changeSlide(n) {
//   slideIndex += n;
//   const slides = document.querySelectorAll(".pet-food_carousel_slide");
//   if (slideIndex < 0) {
//     slideIndex = slides.length - 1;
//   } else if (slideIndex + 6 > slides.length) {
//     slideIndex = 0;
//   }
//   showSlide(slideIndex);
// }


// const prevBtn = document.querySelector(".pet-food__arrow-left");
// const nextBtn = document.querySelector(".pet_food__arrow-right");

// prevBtn.addEventListener("click", () => {
//   changeSlide(-1);
// });

// nextBtn.addEventListener("click", () => {
//   changeSlide(1);
// });

// showSlide();
