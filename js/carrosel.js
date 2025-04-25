var swiper = new Swiper(".mySwiper", {
  effect: "fade",
});

var swiper = new Swiper(".mySwiper-grupo-home", {
  slidesPerView: "auto",
  spaceBetween: 8,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollWrapper = document.querySelector(".scroll-wrapper");

  function checkWidth() {
    const wrapperWidth = scrollWrapper.offsetWidth;
    const containerWidth =
      document.querySelector(".images-parceiros").offsetWidth;

    if (wrapperWidth < containerWidth * 3) {
      const clone = document.querySelector(".scroll-group").cloneNode(true);
      scrollWrapper.appendChild(clone);
    }
  }

  checkWidth();
  window.addEventListener("resize", checkWidth);
});

var swiper = new Swiper(".mySwiper-quem-somos", {
  slidesPerView: "auto",
  spaceBetween: 16,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper-aulas", {
  slidesPerView: "auto",
  spaceBetween: 12,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper-others-pub", {
  slidesPerView: "auto",
  spaceBetween: 32,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
