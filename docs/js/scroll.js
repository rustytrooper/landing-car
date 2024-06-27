
const animatedItems = document.querySelectorAll('.animated')

function animateScroll() {
  for (let i = 0; i < animatedItems.length; i++) {
    const item = animatedItems[i];
    const itemHeight = item.offsetHeight;
    const itemOffset = offset(item).top;
    const animStart = 4;

    let animItemPoint = window.innerHeight - itemHeight / animStart;
    if ((scrollY > itemOffset - animItemPoint) && scrollY < (itemOffset + itemHeight)) {
      item.classList.add('active');
    } else {
      if (!item.classList.contains('anim-no_downScroll')) {
        item.classList.remove('active');
      }

    }
  }
}

function offset(el) {
  const elementRect = el.getBoundingClientRect();
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  return {
    top: elementRect.top + scrollTop,
    left: elementRect.left + scrollLeft
  }
}

export { animateScroll }