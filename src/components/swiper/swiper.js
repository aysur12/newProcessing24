import Swiper from 'swiper/swiper-bundle.min.js';


const swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});