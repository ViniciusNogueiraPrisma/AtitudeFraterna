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

document.addEventListener("DOMContentLoaded", function () {
  const words = ["Gratidão", "Amor", "Respeito"];
  const wordElement = document.querySelector(".fade-words .word");
  let currentIndex = 0;

  function changeWord() {
    wordElement.style.opacity = "0";

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % words.length;
      wordElement.textContent = words[currentIndex];

      wordElement.style.opacity = "1";
    }, 1000);
  }

  setInterval(changeWord, 3000);
});

// menu unico
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const body = document.querySelector("body");

  const mobileMenuContainer = document.createElement("div");
  mobileMenuContainer.className = "mobile-menu-container";

  const closeButtonContainer = document.createElement("div");
  closeButtonContainer.className = "mobile-menu-close-container";

  const closeButton = document.createElement("button");
  closeButton.className = "mobile-menu-close";
  closeButton.innerHTML = "";
  closeButtonContainer.appendChild(closeButton);

  mobileMenuContainer.appendChild(closeButtonContainer);

  const navigationClone = document
    .querySelector(".navigation-page")
    .cloneNode(true);
  const searchClone = document.querySelector(".search").cloneNode(true);

  mobileMenuContainer.appendChild(navigationClone);
  mobileMenuContainer.appendChild(searchClone);

  body.appendChild(mobileMenuContainer);

  hamburger.addEventListener("click", function () {
    body.classList.toggle("mobile-menu-open");
  });

  closeButton.addEventListener("click", function () {
    body.classList.remove("mobile-menu-open");
  });

  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".hamburger-menu") &&
      !event.target.closest(".mobile-menu-container") &&
      body.classList.contains("mobile-menu-open")
    ) {
      body.classList.remove("mobile-menu-open");
    }
  });
});

// tooltip qs
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {
    template:
      '<div class="tooltip custom-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    customClass: "custom-tooltip",
  });
});

AOS.init({
  once: true,
});

window.addEventListener(
  "scroll",
  debounce(() => {
    AOS.refresh();
  }, 200)
);

var modalVideo = document.getElementById("modalVideo");
var videoPlayer = document.getElementById("videoPlayer");

modalVideo.addEventListener("hidden.bs.modal", function () {
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
});

// Tooltip

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Contraste

function accessApplyTheme(theme) {
  localStorage.setItem("access_theme", theme);

  if (theme == "dark") {
    $("body").attr("data-theme", "dark");
  } else {
    $("body").attr("data-theme", "light");
  }
}

var access_theme = "light";

if (localStorage.getItem("access_theme")) {
  access_theme = localStorage.getItem("access_theme");
  accessApplyTheme(access_theme);
}

$("#contrast-toggle").on("click", function (e) {
  if (access_theme == "light") {
    access_theme = "dark";
  } else {
    access_theme = "light";
  }
  accessApplyTheme(access_theme);
});

const counterUp = window.counterUp.default;

const callback = (entries) => {
  entries.forEach((entry) => {
    const el = entry.target;
    if (entry.isIntersecting && !el.classList.contains("is-visible")) {
      counterUp(el, {
        duration: 2000,
        // delay: 16,
      });
      el.classList.add("is-visible");
    }
  });
};

const IO = new IntersectionObserver(callback, { threshold: 1 });
const elements = document.querySelectorAll(".counter");

elements.forEach((el) => {
  IO.observe(el);
});

/* Parar o vídeo quando fechar o modal */
function stopVideo() {
  let leg = $("#modalVideo iframe").attr("src");
  $("#modalVideo iframe").attr("src", leg);
}
if ($("modalVideo")) {
  $("#modalVideo").on("click", () => {
    setTimeout(() => {
      if (!$("#modalVideo").hasClass("show")) {
        stopVideo();
      }
    }, 200);
  });
}
