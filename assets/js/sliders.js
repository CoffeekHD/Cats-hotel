const swiper = new Swiper('.rooms__slider', {
  loop: true,
  autoplay: {
   delay: 5000,
 },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const reviewsSlider = new Swiper('.reviews-slider', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 2,
  autoplay: {
   delay: 5000,
 },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    320: {
      slidesPerView: 1,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
