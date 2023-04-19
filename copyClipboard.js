(() => {
  let copyButtons = [...document.querySelectorAll(".button-copy")];
  let copyButtonsDocs = [
    ...document.querySelectorAll(".code-clip .button-copy"),
  ];
  let copyClipDocs = [...document.querySelectorAll(".code-clip pre")];
  let copyClip = [...document.querySelectorAll(".code-clip pre")];
  let arrLength = copyClip.length;
  let docArrLength = copyClipDocs.length;

  for (let i = 0; i < arrLength; i++) {
    copyButtons[i].addEventListener("click", (event) => {
      let text = copyClip[i].textContent;
      let textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.select();
      navigator.clipboard.writeText(text);
    });
  }
  for (let i = 0; i < docArrLength; i++) {
    copyButtonsDocs[i].addEventListener("click", (event) => {
      let text = copyClipDocs[i].textContent;
      let textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.select();
      navigator.clipboard.writeText(text);
    });
  }
})();
