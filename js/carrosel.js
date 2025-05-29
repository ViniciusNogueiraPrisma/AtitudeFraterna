var swiper = new Swiper(".mySwiper", {
  effect: "fade",
});

var swiper = new Swiper(".mySwiper-grupo-home", {
  slidesPerView: "auto",
  spaceBetween: 8,
  autoplay: {
    delay: 7000,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// carrosel parceiros home
document.addEventListener("DOMContentLoaded", function () {
  const scrollWrapper = document.querySelector(".scroll-wrapper");

  if (scrollWrapper) {
    const originalGroups = Array.from(
      scrollWrapper.querySelectorAll(".scroll-group")
    );

    scrollWrapper.innerHTML = "";

    for (let i = 0; i < 3; i++) {
      originalGroups.forEach((group) => {
        scrollWrapper.appendChild(group.cloneNode(true));
      });
    }

    const existingStyle = document.getElementById("carousel-animation");
    if (existingStyle) {
      existingStyle.remove();
    }

    let scrollPosition = 0;
    const speed = 1.5;
    let isPaused = false;

    function getGroupWidth() {
      const firstGroup = scrollWrapper.querySelector(".scroll-group");
      if (firstGroup) {
        const img = firstGroup.querySelector("img");
        const style = window.getComputedStyle(img);
        const marginLeft = parseInt(style.marginLeft);
        const marginRight = parseInt(style.marginRight);
        return img.offsetWidth + marginLeft + marginRight;
      }
      return 200;
    }

    function animateScroll() {
      if (!isPaused) {
        scrollPosition += speed;
        const groupWidth = getGroupWidth();
        const totalWidth = groupWidth * originalGroups.length;

        if (scrollPosition >= totalWidth) {
          scrollPosition = 0;
        }

        scrollWrapper.style.transform = `translateX(-${scrollPosition}px)`;
      }
      requestAnimationFrame(animateScroll);
    }

    scrollWrapper.addEventListener("mouseenter", () => {
      isPaused = true;
    });

    scrollWrapper.addEventListener("mouseleave", () => {
      isPaused = false;
    });

    animateScroll();
  }
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
