// First We get elements from HTML by using DOM

const startButtonElement = document.getElementById("start-id");
const resetButtonElement = document.getElementById("reset");
const handleElement = document.querySelector("#button-box");

// Declare identifiers to handle counting
let intervalId;
let minutes = 0,
  hours = 0,
  sec = 0;
startButtonElement.addEventListener("click", () => {
  if (
    startButtonElement.innerHTML === "Start" ||
    startButtonElement.innerHTML === "Continue"
  ) {
    intervalId = setInterval(() => {
      let minStr = "0" + minutes;
      let hrStr = "0" + hours;
      let secStr = "0" + sec;
      sec++;
      if (sec > 9) {
        secStr = sec;
        if (sec === 59) {
          minutes++;
          sec = 0;
        }
      }
      if (minutes > 9) {
        minStr = minutes;
        if (minutes === 59) {
          hours++;
          minutes = 0;
        }
      }
      if (hours > 9) {
        hrStr = hours;
      }
      document.getElementById(
        "displayer"
      ).innerHTML = `${hrStr} : ${minStr} : ${secStr}`;
    }, 1000);
    startButtonElement.style.width = "210px";
    resetButtonElement.style.display = "inline-block";

    // if counter is running...
  } else if (startButtonElement.innerHTML === "Stop") {
    clearInterval(intervalId);
  }
  if (startButtonElement.innerHTML === "Start") {
    startButtonElement.innerHTML = "Stop";
  } else if (startButtonElement.innerHTML === "Stop") {
    startButtonElement.innerHTML = "Continue";
  } else if (startButtonElement.innerHTML === "Continue") {
    startButtonElement.innerHTML = "Stop";
  }
});

resetButtonElement.addEventListener("click", () => {
  clearInterval(intervalId);
  resetButtonElement.style.display = "none";
  startButtonElement.style.width = "100%";
  startButtonElement.innerHTML = "Start";
  minutes = 0;
  hours = 0;
  sec = 0;
  let minStr = "0" + minutes;
  let hrStr = "0" + hours;
  let secStr = "0" + sec;
  document.getElementById(
    "displayer"
  ).innerHTML = `${hrStr} : ${minStr} : ${secStr}`;
});
