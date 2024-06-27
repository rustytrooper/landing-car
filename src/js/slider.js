const sliderWrap = document.querySelector('.slides-wrap');
const img = document.querySelector('.slides-img');
const btnNext = document.querySelector('.slider-next');
const btnPrev = document.querySelector('.slider-prev');
let autoPlayInterval;
let currentIndex = 0;

function sliderSize() {
  const rect = img.getBoundingClientRect()
  return rect.width;
}

export function sliderSwap(direction) {
  const sliderWrapWidth = sliderSize();
  const slideCount = document.querySelectorAll('.slides-img').length;
  // let currentIndex = 0;

  if (direction === 'next') {
    currentIndex++;
    if (currentIndex >= slideCount) {
      currentIndex = 0
    }
  }
  if (direction === 'prev') {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slideCount - 1
    }
  }
  sliderWrap.style.transform = `translateX(-${currentIndex * sliderWrapWidth}px)`;
}

export function setAutoPlay() {
  autoPlayInterval = setInterval(() => sliderSwap('next'), 3000)
}

export function clearAutoPlay() {
  clearInterval(autoPlayInterval)
}

// btnNext.addEventListener('click', () => {
//   clearAutoPlay();
//   sliderSwap('next');
//   setAutoPlay()
// });

// btnPrev.addEventListener('click', () => {
//   clearAutoPlay();
//   sliderSwap('prev');
//   setAutoPlay()
// });

// setAutoPlay()