(() => {
  let gitHubTab = document.getElementById("but1");
  let linkedinTab = document.getElementById("but2");
  let resumeTab = document.getElementById("but3");
  let shadowColor = "#33333357";
  let delayTime = "150";

  gitHubTab.addEventListener("click", (event) => {
    setTimeout(() => {
      event.target.style.boxShadow = `0px 2px 20px 1px ${shadowColor}`;
      event.target.style.transition = "ease-in 300ms";
      resumeTab.style.boxShadow = "none";
      linkedinTab.style.boxShadow = "none";
    }, delayTime);
  });
  linkedinTab.addEventListener("click", (event) => {
    setTimeout(() => {
      event.target.style.boxShadow = `0px 2px 20px 1px ${shadowColor}`;
      event.target.style.transition = "ease-in 300ms";
      resumeTab.style.boxShadow = "none";
      gitHubTab.style.boxShadow = "none";
    }, delayTime);
  });
  resumeTab.addEventListener("click", (event) => {
    setTimeout(() => {
      event.target.style.boxShadow = `0px 2px 20px 1px ${shadowColor}`;
      event.target.style.transition = "ease-in 300ms";
      gitHubTab.style.boxShadow = "none";
      linkedinTab.style.boxShadow = "none";
    }, delayTime);
  });
})();
