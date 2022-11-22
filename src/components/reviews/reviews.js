let position = 0;
const reviewSlidesToShow = 2;
const reviewSlidesToScroll = 1;
const reviewGapItem = 30;
const reviewGapAmount = 1;
const btnPrevReview = document.querySelector('.js-reviews__button_prev');
const btnNextReview  = document.querySelector('.js-reviews__button_next');
const reviewContainer = document.querySelector('.js-reviews__container');
const reviewTrack = document.querySelector('.js-reviews__track');
const reviewItems = document.querySelectorAll('.js-reviews__item');
const reviewItemsCount = reviewItems.length;
const reviewItemWidth = (reviewContainer.clientWidth - (reviewGapItem * reviewGapAmount)) / reviewSlidesToShow;
const reviewMovePosition = reviewSlidesToScroll * reviewItemWidth;

reviewItems.forEach((item) => {
  item.style.minWidth = `${reviewItemWidth}px`;
});

btnNextReview.addEventListener('click', () => {
  const reviewItemsLeft = reviewItemsCount - (Math.abs(position) + reviewSlidesToShow * reviewItemWidth) / reviewItemWidth;

  position -= reviewItemsLeft >= reviewSlidesToScroll ? reviewMovePosition : reviewItemsLeft * reviewItemWidth;

  setPosition();
  checkBtns();
});

btnPrevReview.addEventListener('click', () => {
  const reviewItemsLeft = Math.abs(position) / reviewItemWidth;

  position += reviewItemsLeft >= reviewSlidesToScroll ? reviewMovePosition : reviewItemsLeft * reviewItemWidth;

  setPosition();
  checkBtns();
});

const setPosition = () => {
  reviewTrack.style.transform = `translateX(${position}px)`;
}

const checkBtns = () => {
  btnPrevReview.disabled = position === 0;
  btnNextReview.disabled = position <= -(reviewItemsCount - reviewSlidesToShow) * reviewItemWidth;
}

checkBtns();