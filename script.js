const projectSwiper = new Swiper(".project-swiper", {
  slidesPerView: 3,
  spaceBetween: 21,
  loop: true,

  navigation: {
    nextEl: ".project-arrow-next",
    prevEl: ".project-arrow-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});