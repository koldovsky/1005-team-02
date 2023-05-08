(function () {
    const slides = [
      `
      <img class="pet-food_carousel_slide" src="img/applaws.png" alt="AllPaws" />
      <img class="pet-food_carousel_slide" src="img/tigerino.png" alt="Tigerino" />
      <img class="pet-food_carousel_slide" src="img/gourmet.png" alt="Gourmet" />
      <img class="pet-food_carousel_slide" src="img/felix.png" alt="Felix" />
      <img class="pet-food_carousel_slide" src="img/purizon.png" alt="Purizon" />
      <img class="pet-food_carousel_slide" src="img/rocco.png" alt="Rocco" />
      <img class="pet-food_carousel_slide" src="img/dokas.png" alt="Dokas" />
      `,
    ];
  
    let currentSlideIdx = 0;
  
    function renderSlide() {
      const slideContainer = document.querySelector(".carousel_goods_slides");
      slideContainer.innerHTML = slides[currentSlideIdx];
      if (window.innerWidth > 768) {
        const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.innerWidth > 991) {
          const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
          slideContainer.innerHTML += slides[thirdSlideIdx];
          if (window.innerWidth > 992) {
            const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
            slideContainer.innerHTML += slides[fourthSlideIdx];
          }
        }
      }
    }
 
    function nextSlide() {
      currentSlideIdx =
          currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
      renderSlide()
    }
  
    function prevSlide() {
      currentSlideIdx =
          currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
      renderSlide()
    }
        
    renderSlide();
  
    const nextBtn = document.querySelector('.pet-food__arrow-right')
    nextBtn.addEventListener('click', nextSlide)
    const prevtBtn = document.querySelector('.pet-food__arrow-left')
    prevtBtn.addEventListener('click', prevSlide)
  
    window.addEventListener('resize', renderSlide)
  })();