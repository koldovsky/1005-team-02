(function () {
    const slides = [
      `
      <div class="trending__carousel-bloc">

      <img class="preview-img" src="img/dora-metal-pet-brush.jpg" alt="pet_brush">
      <h3>DORA Metal Pet Brush</h3>
      <h4 class="price">$15,00</h4>

      <div class="test">
          <div class="trending__name">
              <a href="#" class="add-btn">
                  <span>
                      <span class="add-btn__text">Add to Cart</span>
                  </span>
              </a>
          </div>
      </div>
  </div>
  `,
  `
  <div class="trending__carousel-bloc">
      <img class="preview-img" src="img/kitten-heaven-set.jpg" alt="kitten_set">
      <h3>Kitten's Heaven Set</h3>
      <h4 class="price">$12,00</h4>
      <div class="trending__name">
          <a href="#" class="add-btn">
              <span class="add-btn__text">Add to Cart</span>
          </a>
      </div>
  </div>
  `,
  `
  <div class="trending__carousel-bloc">
      <img class="preview-img" src="img/opty-pet-carrier.jpg" alt="pet_carrier">
      <h3>OPTY Pet Carrier</h3>
      <h4 class="price">$8,00</h4>
      <div class="trending__name">
          <a href="#" class="add-btn">
              <span class="add-btn__text">Add to Cart</span>
          </a>
      </div>
  </div>
  `,
  `
  <div class="trending__carousel-bloc">
      <img class="preview-img" src="img/aga-rope-toy.jpg" alt="rope_toy">
      <h3>AGA Rope Toy</h3>
      <h4 class="price">$5,00</h4>
      <div class="trending__name">
          <a href="#" class="add-btn">
              <span class="add-btn__text">Add to Cart</span>
          </a>
      </div>
  </div>
  `
  ,`
  <div class="trending__carousel-bloc">
      <img class="preview-img" src="img/dora-pet-carrier.jpg" alt="dora_pet_carrier">
      <h3>DORA Pet Carrier</h3>
      <h4 class="price">$23,00</h4>
      <div class="trending__name">
          <a href="#" class="add-btn">
              <span class="add-btn__text">Add to Cart</span>
          </a>
      </div>
  </div>
      `,
    ];
  
    let currentSlideIdx = 0;
  
    function renderSlide() {
      const slideContainer = document.querySelector(".trending__cards-wrapper");
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
  
    const nextBtn = document.querySelector('.trending__arrow-right')
    nextBtn.addEventListener('click', nextSlide)
    const prevtBtn = document.querySelector('.trending__arrow-left')
    prevtBtn.addEventListener('click', prevSlide)
  
    window.addEventListener('resize', renderSlide)
  })();
  
