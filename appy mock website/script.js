const hiddenList = document.getElementById("hiddenList");

const hiddenUl = document.getElementById("hiddenUl");

hiddenList.addEventListener("mouseover", () => {
  hiddenUl.classList.toggle("display");
});

hiddenList.addEventListener("mouseout", () => {
  hiddenUl.classList.toggle("display");
});

//Method to do the infinite loop effect

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
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

//second list

// const interactivePics = document.getElementsByClassName(
//   "video-list-section-right-card"
// );

// const first = document.getElementById("first");
// const second = document.getElementById("second");
// const third = document.getElementById("third");
// const fourth = document.getElementById("fourth");
// const fifth = document.getElementById("fifth");

// first.addEventListener("click", () => {
//   interactivePics.classList.remove("hide");

//   [4, 5, 6, 7, 8, 9].forEach((index) => {
//     if (interactivePics[index]) {
//       interactivePics[index].classList.add("hide");
//     }
//   });
// });
// second.addEventListener("click", () => {
//   interactivePics.classList.remove("hide");

//   [0, 2, 3, 7, 8, 9].forEach((index) => {
//     if (interactivePics[index]) {
//       interactivePics[index].classList.add("hide");
//     }
//   });
// });
// third.addEventListener("click", () => {
//   interactivePics.classList.remove("hide");

//   [0, 1, 3, 4, 6, 8, 9].forEach((index) => {
//     if (interactivePics[index]) {
//       interactivePics[index].classList.add("hide");
//     }
//   });
// });
// fourth.addEventListener("click", () => {
//   interactivePics.classList.remove("hide");

//   [0, 1, 2, 4, 5, 7, 8, 9].forEach((index) => {
//     if (interactivePics[index]) {
//       interactivePics[index].classList.add("hide");
//     }
//   });
// });
// fifth.addEventListener("click", () => {
//   interactivePics.classList.remove("hide");
//   [0, 1, 2, 3, 5, 6].forEach((index) => {
//     if (interactivePics[index]) {
//       interactivePics[index].classList.add("hide");
//     }
//   });
// });

const interactivePics = document.getElementsByClassName(
  "video-list-section-right-card"
);

const buttons = {
  first: [4, 5, 6, 7, 8, 9],
  second: [0, 2, 3, 7, 8, 9],
  third: [0, 1, 3, 4, 6, 8, 9],
  fourth: [0, 1, 2, 4, 5, 7, 8, 9],
  fifth: [0, 1, 2, 3, 5, 6],
};

// Function to handle button clicks
function handleButtonClick(buttonId, hiddenIndexes) {
  // Remove 'hide' from all elements
  [...interactivePics].forEach((el) => el.classList.remove("hide"));

  // Add 'hide' to specific elements
  hiddenIndexes.forEach((index) => {
    if (interactivePics[index]) {
      interactivePics[index].classList.add("hide");
    }
  });

  // Remove 'active' class from all buttons
  Object.keys(buttons).forEach((btnId) => {
    document.getElementById(btnId).classList.remove("active-item");
  });

  // Add 'active' class to the clicked button
  document.getElementById(buttonId).classList.add("active-item");
}

// Attach event listeners to each button
Object.keys(buttons).forEach((btnId) => {
  document.getElementById(btnId).addEventListener("click", () => {
    handleButtonClick(btnId, buttons[btnId]);
  });
});
