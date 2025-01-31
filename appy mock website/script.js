const hiddenList = document.getElementById("hiddenList");

const hiddenUl = document.getElementById("hiddenUl");

hiddenList.addEventListener("mouseover", () => {
  hiddenUl.classList.toggle("display");
});

hiddenList.addEventListener("mouseout", () => {
  hiddenUl.classList.toggle("display");
});

const horUl = document.querySelector(".horizontal-content");

function delayAnimation() {
  horUl.classList.add("played");
  setTimeout(() => {
    horUl.classList.remove("played");
    setTimeout(delayAnimation, 5000);
  }, 10000);
}

setTimeout(delayAnimation, 1000);
