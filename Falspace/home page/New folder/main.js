var swiper = new Swiper(
    ".swiper-container",
    {
      //centeredSlides: "true",
      slidesPerView: "auto",
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
     pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
     }
    }
  );
  