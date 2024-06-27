import { setAutoPlay, clearAutoPlay, sliderSwap } from "./slider.js";
import { contactsHover, contactsNoHover, linksArr } from "./contacts.js";
import { animateScroll } from "./scroll.js";

const btnNext = document.querySelector('.slider-next');
const btnPrev = document.querySelector('.slider-prev');


window.addEventListener('scroll', animateScroll)
animateScroll()

btnNext.addEventListener('click', () => {
  clearAutoPlay();
  sliderSwap('next');
  setAutoPlay()
});

btnPrev.addEventListener('click', () => {
  clearAutoPlay();
  sliderSwap('prev');
  setAutoPlay()
});

setAutoPlay()

linksArr.forEach(link => {
  link.addEventListener('mouseenter', contactsHover)
  link.addEventListener('mouseleave', contactsNoHover)
})
