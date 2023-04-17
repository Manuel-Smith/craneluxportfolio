let toc = document.querySelector(".table-of-contents-header");
let tocContent = document.querySelector(".table-of-contents");
let tocContentExpandHide = document.querySelectorAll(
  ".table-of-contents-header  span"
);
let clicked = false;

toc.addEventListener("click", (event) => {
  if (!clicked) {
    tocContent.style.display = "block";
    tocContentExpandHide[0].textContent = "hide";
    tocContentExpandHide[1].textContent = "Hide";
    clicked = true;
  } else {
    tocContent.style.transition = "400ms ease-in-out";
    tocContent.style.display = "none";
    tocContentExpandHide[0].textContent = "expand";
    tocContentExpandHide[1].textContent = "Expand";

    clicked = false;
  }
});

console.log(tocContentExpandHide[0].textContent);
