const mainEl = document.getElementById("main-el");
const messageEl = document.createElement("div");
messageEl.id = "message-el";
mainEl.insertBefore(messageEl, mainEl.firstChild);
let gridStats = Array.from(Array(9), () => new Array(4));
let gridContainer;

gridContainerSetup();
function gridContainerSetup() {
  gridContainer = document.createElement("div");
  gridContainer.id = "grid-container";
  document
    .getElementById("main-el")
    .insertBefore(gridContainer, mainEl.nextSibling);

  initialize();
}

function initialize() {
  gridContainer = document.getElementById("grid-container");
  for (i = 0; i < gridStats.length; i++) {
    newDiv = document.createElement("div");
    newDiv.id = "s" + (i + 1);
    newDiv.classList.add("ticbox");
    gridContainer.insertBefore(newDiv, gridContainer.nextSibling);
    newP = document.createElement("p");
    newP.id = newDiv.id + "-text";
    newDiv.insertBefore(newP, newDiv.nextSibling);
    gridStats[i][2] = document.getElementById(`s${i + 1}-text`);
  }
  playersTurn();
}

function createGridContainer() {}

function restartGame() {
  document.getElementById("grid-container").remove();
  messageEl.textContent = "";
  gridStats = Array.from(Array(9), () => new Array(4));
  /* gridContainer = document.createElement("div");
  gridContainer.id = "grid-container";
  document
    .getElementById("main-el")
    .insertBefore(gridContainer, mainEl.nextSibling); */
  gridContainerSetup();
}

function playersTurn() {
  gridContainer.addEventListener("click", function (e) {
    if (e?.target?.firstElementChild?.textContent) {
      console.log("already filled");
    } else {
      e.target.firstElementChild.textContent += "X"; // fills p text
      update("1");
    }
  });
}

function lockout() {
  p = false;
  i = 0;

  while (p === false) {
    i = i + 1;
    a = Math.floor(Math.random() * 9);

    if (!gridStats[a][3]) gridStats[a][2].textContent = " ";

    if (i === 99) {
      p = true;
      playersTurn();
    }
  }
}

function update(carry) {
  for (i = 0; i < gridStats.length; i++) {
    if (gridStats[i][2].textContent === "X") gridStats[i][3] = "X";

    if (gridStats[i][2].textContent === "O") gridStats[i][3] = "O";
  }

  a = carry;
  winChecker(a);
}

function computersTurn() {
  p = false;
  i = 0;
  while (p === false) {
    i = i + 1;
    a = Math.floor(Math.random() * 9);
    if (gridStats[a][3]) {
    } else {
      p = true;
      gridStats[a][2].textContent += "O";
    }
    if (i === 99) {
      p = true;
      console.log("tie");
      messageEl.textContent = "Tie!!!";
      playersTurn();
    }
  }
  update("2");
}

function winChecker(a) {
  if (
    (gridStats[0][3] === "X" &&
      gridStats[1][3] === "X" &&
      gridStats[2][3] === "X") ||
    (gridStats[0][3] === "X" &&
      gridStats[4][3] === "X" &&
      gridStats[8][3] === "X") ||
    (gridStats[0][3] === "X" &&
      gridStats[3][3] === "X" &&
      gridStats[6][3] === "X") ||
    (gridStats[1][3] === "X" &&
      gridStats[4][3] === "X" &&
      gridStats[7][3] === "X") ||
    (gridStats[2][3] === "X" &&
      gridStats[5][3] === "X" &&
      gridStats[8][3] === "X") ||
    (gridStats[2][3] === "X" &&
      gridStats[4][3] === "X" &&
      gridStats[6][3] === "X") ||
    (gridStats[3][3] === "X" &&
      gridStats[4][3] === "X" &&
      gridStats[5][3] === "X") ||
    (gridStats[6][3] === "X" &&
      gridStats[7][3] === "X" &&
      gridStats[8][3] === "X")
  ) {
    console.log("you Win!!!");
    messageEl.textContent = "You Win!!!";
    lockout();
  } else if (
    (gridStats[0][3] === "O" &&
      gridStats[1][3] === "O" &&
      gridStats[2][3] === "O") ||
    (gridStats[0][3] === "O" &&
      gridStats[4][3] === "O" &&
      gridStats[8][3] === "O") ||
    (gridStats[0][3] === "O" &&
      gridStats[3][3] === "O" &&
      gridStats[6][3] === "O") ||
    (gridStats[1][3] === "O" &&
      gridStats[4][3] === "O" &&
      gridStats[7][3] === "O") ||
    (gridStats[2][3] === "O" &&
      gridStats[5][3] === "O" &&
      gridStats[8][3] === "O") ||
    (gridStats[2][3] === "O" &&
      gridStats[4][3] === "O" &&
      gridStats[6][3] === "O") ||
    (gridStats[3][3] === "O" &&
      gridStats[4][3] === "O" &&
      gridStats[5][3] === "O") ||
    (gridStats[6][3] === "O" &&
      gridStats[7][3] === "O" &&
      gridStats[8][3] === "O")
  ) {
    console.log("You Lose");
    messageEl.textContent = "You Lose!!!";
    lockout();
  } else if (a === "1") {
    computersTurn();
  } else {
    playersTurn();
  }
}
