const hiddenList = document.getElementById("hiddenList");

const hiddenUl = document.getElementById("hiddenUl");

hiddenList.addEventListener("mouseover", () => {
  hiddenUl.classList.toggle("display");
});

hiddenList.addEventListener("mouseout", () => {
  hiddenUl.classList.toggle("display");
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
