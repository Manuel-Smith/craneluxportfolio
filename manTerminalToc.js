let tocButton = document.querySelector(".side-toc-icon span");
let menuCommand = document.querySelector(".config-menu");
let clicked = false;

tocButton.addEventListener("click", (event) => {
  if (!clicked) {
    menuCommand.style.display = "block";
    clicked = true;
  } else {
    menuCommand.style.display = "none";
    clicked = false;
  }
});
