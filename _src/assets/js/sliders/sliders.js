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
      spaceBetween: 20,
      centeredSlides: true,

      slidesPerView: 1,
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
         renderBullet: function (index, className) {
            return '<div class="' + className + '">' + '<span class="our-series-slide__pagination">' + '0' + (index + 1) + "</span>" + "</div>";
         },
      },
      scrollbar: {
         el: ".swiper-scrollbar",
         // hide: true,
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      breakpoints: {
         991: {
            slidesPerView: 3,
            spaceBetween: 40,
         }
      },
   });
});

