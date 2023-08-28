let mainEl = document.getElementById("colour-changer-main-el");
let headerEl = document.getElementById("colour-change-header");
let navEl = document.getElementById("colour-change-nav");
let navBtnEl = document.querySelectorAll(".nav-button");
let aEl = document.querySelectorAll("button .header_btn");
let bodyEl = document.getElementById("colour-change-body");
let hrEl = document.getElementsByTagName("hr");
let h1El = document.getElementsByTagName("h1");
let copyParagraphEl = document.getElementsByTagName("p");
let fisrtBtn = document.getElementById("first_button");
let lastBtn = document.getElementById("last_button");

let buttonContainer = document.createElement("div");
let buttonColors = ["green", "blue", "yellow", "orange", "grey"];
let greenBtn;
let blueBtn;
let yellowBtn;
let orangeBtn;
let greyBtn;

//HTML & Constructors
buttonContainer.id = "button-container";
mainEl.insertBefore(buttonContainer, mainEl.nextSibling);

for (i = 0; i < buttonColors.length; i++) {
  let buttonEl = document.createElement("button");
  buttonEl.classList.add("color-button");
  buttonEl.id = buttonColors[i];
  buttonEl.textContent = buttonColors[i];
  buttonContainer.insertBefore(buttonEl, buttonContainer.lastChild);
}
//linking colour button variables to newly generated elements
blueBtn = document.getElementById("blue");
greenBtn = document.getElementById("green");
yellowBtn = document.getElementById("yellow");
orangeBtn = document.getElementById("orange");
greyBtn = document.getElementById("grey");
//Click Events

blueBtn.addEventListener("click", function () {
  changeColor("#224DCE", "#9FE1FF");
});

greenBtn.addEventListener("click", function () {
  changeColor("#32965D", "#DCE0CC");
});

yellowBtn.addEventListener("click", function () {
  changeColor("#E0C200", "#FFFCEB");
});

orangeBtn.addEventListener("click", function () {
  changeColor("#E18F15", "#FFEAC2");
});

greyBtn.addEventListener("click", function () {
  changeColor("#898989", "#EBEBEB");
});

function changeColor(darkClr, lightClr) {
  headerEl.style.backgroundColor = lightClr;
  navEl.style.backgroundColor = darkClr;
  for (i = 0; i < navBtnEl.length; i++) {
    navBtnEl[i].style.backgroundColor = darkClr;
    navBtnEl[i].style.borderColor = darkClr;
    navBtnEl[i].style.borderLeftColor = lightClr;
    navBtnEl[i].style.borderRightColor = lightClr;
    aEl[i].style.color = lightClr;
  }
  bodyEl.style.backgroundColor = lightClr;
  hrEl[0].style.backgroundColor = darkClr;
  h1El[0].style.color = darkClr;
  copyParagraphEl[0].style.color = darkClr;
  fisrtBtn.style.borderLeftColor = darkClr;
  lastBtn.style.borderRightColor = darkClr;
}

// what elements we need to recolor: header, nav, btn, btn hover, btn text, body, hr
//we may not need colour changer css file
//mainEl.style.backgroundColor = "#ff0000";
