let currMoleBox;
let maxScore = 0;
let scr = 0;

function getRandomId() {
  let num = Math.floor(Math.random() * 6);
  return num.toString();
}

function increment() {
  scr++;
  document.getElementById("score").innerHTML = "SCORE: " + scr + "/20";
}

function setMole() {
  if (currMoleBox) {
    currMoleBox.style.removeProperty("animation");
  }

  let num = getRandomId();
  currMoleBox = document.getElementById(num).children[0];
  currMoleBox.style.animation = "slide 1300ms infinite";
}

// main function
function startGame() {
  maxScore = 0;
  scr = 0;
  document.getElementById("score").innerHTML = "SCORE: 0/20";
  document.getElementById("gametitle").innerHTML = "Smash the Mole!";

  const myFunction = () => {
    setMole();
    maxScore++;

    if (maxScore === 21) {
      clearInterval(intervalId);
      currMoleBox.style.removeProperty("animation");
      document.getElementById("gametitle").innerHTML = "Game Over";
    }
  };

  const intervalId = setInterval(myFunction, 1310);
}
