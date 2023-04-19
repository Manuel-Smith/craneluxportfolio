(() => {
  let copyButtons = [...document.querySelectorAll(".code-area > div > button")];
  let copyClip = [...document.querySelectorAll(".code-docs > code")];
  let arrLength = copyClip.length;

  for (let i = 0; i < arrLength; i++) {
    copyButtons[i].addEventListener("click", (event) => {
      let text = copyClip[i].textContent;
      let textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.select();
      navigator.clipboard.writeText(text);
    });
  }
})();
