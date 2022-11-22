let position = 0;
const slidesToShow = 4;
const slidesToScroll = 2;
const gapItem = 31;
const gapAmount = 3;
const btnPrev = document.querySelector('.js-cert-carousel__button_prev');
const btnNext = document.querySelector('.js-cert-carousel__button_next');
const certCarouselContainer = document.querySelector('.js-cert-cert-carousel__container');
const certCarouselTrack = document.querySelector('.js-cert-carousel__track');
const certCarouselItems = document.querySelectorAll('.js-cert-carousel__item');
const itemsCount = certCarouselItems.length;
const itemWidth = (certCarouselContainer.clientWidth - (gapItem * gapAmount)) / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

certCarouselItems.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;

  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

const setPosition = () => {
  certCarouselTrack.style.transform = `translateX(${position}px)`;
}

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}

checkBtns();