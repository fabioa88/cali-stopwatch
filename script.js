var startTime;
var elapsedTime = 0;
var timerInterval;

var setCount = 0;

var timeDisplay = document.getElementById("time");
var startStopButton = document.getElementById("startStopButton");
var resetButton = document.getElementById("resetButton");
var setCountDisplay = document.getElementById("setCount");
var incrementButton = document.getElementById("incrementButton");

startStopButton.addEventListener("click", startStop);
resetButton.addEventListener("click", reset);
incrementButton.addEventListener("click", incrementSetCount);

function startStop() {
  if (timerInterval) {
    stopTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  startTime
