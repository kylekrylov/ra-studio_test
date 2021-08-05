const sldAlbom = document.querySelectorAll('.mySwiper').forEach(function (elem) {
   new Swiper(elem, {
      loop: true,
      slidesPerView: 'auto',
      effect: 'fade',
      fadeEffect: {
         crossFade: true
      },
      autoplay: {
         delay: 4000,
         disableOnInteraction: false,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      // navigation: {
      //    nextEl: elem.closest('.banner').querySelector('.product__slider-button-next'),
      //    prevEl: elem.closest('.banner').querySelector('.product__slider-button-prev'),
      // },
   });
});