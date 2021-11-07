const number = document.querySelector(".number");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

let counter = 0;
let nInterval;
let fontCounter = 0;
let fontColors = ["#4b02f2", "#2a5b9d", "#61a630", "#664c59"];

start.addEventListener("click", () => {
  nInterval = setInterval(addSecond, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(nInterval);
});

reset.addEventListener("click", () => {
  location.reload();
});

function addSecond() {
  counter++;
  fontCounter++;
  number.innerHTML = `${counter}`;

  if (fontCounter >= fontColors.length) {
    fontCounter = 0;
    number.style.color = fontColors[fontCounter];
  } else {
    number.style.color = fontColors[fontCounter];
  }
}
