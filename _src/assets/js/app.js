@@include("vender/swiper.js", {});
@@include("sliders/sliders.js", {});

// const accordion = document.getElementsByClassName('item-benefits-list');
// for (i = 0; i < accordion.length; i++) {
//    accordion[i].addEventListener('click', function () {
//       this.classList.toggle('active')
//    })
// };



// window.onscroll = function () {
//    let scrollElem = document.getElementById("scrollToTop");
//    if (window.scrollY > document.documentElement.clientHeight) {
//       scrollElem.style.opacity = "1";
//    } else {
//       scrollElem.style.opacity = "0";
//    }
// };

// let timeOut;
// function goUp() {
//    let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
//    if (top > 0) {
//       window.scrollBy(0, -100);
//       timeOut = setTimeout('goUp()', 5);
//    } else clearTimeout(timeOut);
// };

// const widgetItem = document.querySelectorAll('.widget__item');
// widgetItem.forEach((img) => {
//    img.addEventListener('mouseover', (event) => {
//       img.closest('.menu').querySelector('.menu__img').src = img.getAttribute('data-image');
//       img.closest('.menu').querySelectorAll('.widget__item').forEach((item) => {
//          item.classList.remove('active')
//       });
//       event.currentTarget.classList.add('active');
//    });
// });

// const textLink = document.querySelectorAll('.text-link-triger');
// textLink.forEach((text) => {
//    text.addEventListener('click', () => {
//       const closeProduct = text.closest('.product');
//       closeProduct.querySelector('.product__text').classList.toggle('product__text--all');
//       closeProduct.querySelector('.product__content').classList.toggle('product__content--all');
//       closeProduct.querySelector('.text-link-triger').classList.toggle('active');
//       if (text.innerHTML === 'свернуть') {
//          closeProduct.querySelector('.text-link-triger').textContent = 'читать далее';
//       } else {
//          closeProduct.querySelector('.text-link-triger').textContent = 'свернуть';
//       } 
//    });
// });

// color.forEach((colors) => {
//    colors.addEventListener('click', (event) => {
//       colors.closest('.product').querySelectorAll('.product__color').forEach((item) => {
//          item.classList.remove('active')
//          // console.log('remove');
//       });
//       event.currentTarget.classList.add('active');
//       // console.log('add');
//    });
// });

// document.addEventListener('scroll', () => {
//    if (window.scrollY > document.documentElement.clientHeight - 150) {
//       header.classList.add('active');
//       // setTimeout(() => heades.style.opacity = 0
//       //    , 1000);
//    } else {
//       header.classList.remove('active');
//       setTimeout(() => header.style.opacity = 1
//          , 1000);
//    }
// })
const
   ball = document.querySelectorAll('.description__ball'),
   header = document.querySelector('.header'),
   headerActive = document.querySelector('.header.active'),
   menu = document.querySelector('.header__menu'),
   burger = document.querySelector('.header__menu-burger'),
   dropDescriptions = document.querySelectorAll('.descriptions'),
   dropDescription = document.querySelectorAll('.description'),
   banner = document.querySelector('.banner');

// console.log(banner);


if (banner) {
   window.addEventListener('scroll', () => {
      if (window.scrollY >= 50) {
         header.classList.add('active');
      } else {
         header.classList.remove('active');
      }
   });
} else {
   header.classList.add('active');
}





// dropDescription.forEach((description) => {
//    description.addEventListener('click', (event) => {

//       description.closest('.section__descriptions').querySelectorAll('.description').forEach((item) => {
//          item.classList.remove('active');
//       });
//       event.currentTarget.classList.add('active');
//       description.closest('.section__descriptions').querySelector('.description__title').classList.add('hidden');
//    });
// });s

// Close the dropdown if the user clicks outside of it
document.addEventListener('click', (event) => {

   if (event.target.matches('.header__burger') || event.target.matches('.burger')) {
      event.target.closest('.header__burger').classList.toggle('active');
      event.target.closest('.header').querySelector('.header__menu').classList.toggle('active');
      console.log('menu');
   }
   else {
      dropDescription.forEach((description) => {
         description.closest('.section__descriptions').querySelectorAll('.description').forEach((item) => {
            item.classList.remove('active');
         });
      });
      document.querySelector('.header__burger').classList.remove('active');
      document.querySelector('.header__menu').classList.remove('active');
      // console.log('-');

   }

   // console.log(event.target);
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
   smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');
      document.querySelector(id).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });

};
