const showInfoButtons = document.getElementsByClassName("show-info");
const hideInfoButtons = document.getElementsByClassName("hide-info");
const infoBlocks = document.getElementsByClassName("info");

for (let i = 0; i < showInfoButtons.length; i++) {
  showInfoButtons[i].addEventListener("click", function () {
    infoBlocks[i].style.display = "grid";
    showInfoButtons[i].style.display = "none";
    hideInfoButtons[i].style.display = "flex";
    document.querySelector(".bwin-section").style.borderRadius =
      "15px 15px 0px 0px";
  });
}

for (let i = 0; i < hideInfoButtons.length; i++) {
  hideInfoButtons[i].addEventListener("click", function () {
    infoBlocks[i].style.display = "none";
    showInfoButtons[i].style.display = "flex";
    hideInfoButtons[i].style.display = "none";
    document.querySelector(".bwin-section").style.borderRadius = "15px";
  });
}

const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");

const block1Width = block1.offsetWidth;

block2.style.width = block1Width - 40 + "px";

window.addEventListener("resize", () => {
  const newBlock1Width = block1.offsetWidth;
  block2.style.width = newBlock1Width - 40 + "px";
});
