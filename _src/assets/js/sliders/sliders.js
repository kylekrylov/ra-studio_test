const sldBanner = document.querySelectorAll('.banner-hello').forEach(function (elem) {
   new Swiper(elem, {
      loop: true,
      slidesPerView: 'auto',
      effect: 'fade',
      fadeEffect: {
         crossFade: true
      },
      // autoplay: {
      //    delay: 4000,
      //    disableOnInteraction: false,
      // },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
   });
});
const sldSeries = document.querySelectorAll('.our-series__slider').forEach(function (elem) {
   new Swiper(elem, {
      loop: true,
      spaceBetween: 35,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      scrollbar: {
         el: ".swiper-scrollbar",
         // hide: true,
      },
      navigation: {
         nextEl: ".our-series .swiper-button-next",
         prevEl: ".our-series .swiper-button-prev",
      },
   });
});