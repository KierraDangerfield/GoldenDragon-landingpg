//Target all js-scroll
const scrollOffset = 100;
const scrollElement = document.querySelector(".js-scroll");

//FADE OUT ELEMENTS
scrollElements.forEach((el) => {
  el.style.opacity = 0;
});

//detecting when an element is in view
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};

//assign class name to element
const displayScrollElement = () => {
  scrollElement.classList.add("scrolled");
};

const hideScrollElement = () => {
  scrollElement.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
    displayScrollElement();
  } else {
    hideScrollElement();
  }
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
