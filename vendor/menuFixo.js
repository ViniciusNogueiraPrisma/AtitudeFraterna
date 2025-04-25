function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}

let offset = 0;
const header = document.querySelector(".headerFixoMenu");
const headerMenu = header.querySelector(".header");

function menuFixo() {
  if (!header) return;

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const headerHeight = header.clientHeight;
  const scrollThreshold = 10;

  if (scrollTop >= headerHeight) {
    headerMenu.classList.add("fixed");
  } else {
    headerMenu.classList.remove("fixed");
  }

  if (
    scrollTop > offset + scrollThreshold &&
    header.classList.contains("menu-bar")
  ) {
    header.style.top = `-${headerHeight + 20}px`;
    setTimeout(() => {
      header.classList.remove("menu-bar");
      header.style.top = `-${headerHeight + 20}px`;
    }, 400);
  } else if (
    scrollTop < offset - scrollThreshold &&
    !header.classList.contains("menu-bar")
  ) {
    header.classList.add("menu-bar");
    header.style.top = `0px`;
  }

  if (scrollTop === 0) {
    header.classList.remove("menu-bar");
    headerMenu.classList.remove("fixed");
    header.style.top = `0px`;
  }

  offset = scrollTop;
}

menuFixo();

window.addEventListener("scroll", debounce(menuFixo, 5));
