const swiper = new Swiper('.swiper', {
    loop: true,
    lidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    }
  },
    pagination: {
    el: '.swiper-pagination',
    },
    navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});