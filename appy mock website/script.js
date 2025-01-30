const hiddenList = document.getElementById("hiddenList");

const hiddenUl = document.getElementById("hiddenUl");

hiddenList.addEventListener("mouseover", () => {
  hiddenUl.classList.toggle("hide");
});

hiddenList.addEventListener("mouseout", () => {
  hiddenUl.classList.toggle("hide");
});
