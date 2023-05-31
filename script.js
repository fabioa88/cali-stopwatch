var startTime;
var elapsedTime = 0;
var timerInterval;

var setCount = 0;

var timeDisplay = document.getElementById("time");
var startStopButton = document.getElementById("startStopButton");
var resetButton = document.getElementById("resetButton");
var setCountDisplay = document.getElementById("setCount");
var incrementButton = document.getElementById("incrementButton");
var resetSetCountButton = document.getElementById("resetSetCountButton");

startStopButton.addEventListener("click", startStop);
resetButton.addEventListener("click", reset);
incrementButton.addEventListener("click", incrementSetCount);
resetSetCountButton.addEventListener("click", resetSetCount);

function startStop() {
  if (timerInterval) {
    stopTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTime, 10);
  startStopButton.textContent = "Stop";
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  startStopButton.textContent = "Start";
}

function reset() {
  stopTimer();
  elapsedTime = 0;
  timeDisplay.textContent = formatTime(elapsedTime);
}

function updateTime() {
  var currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  var formattedTime = formatTime(elapsedTime);
  timeDisplay.textContent = formattedTime;
}

function formatTime(time) {
  var milliseconds = Math.floor((time % 1000) / 10);
  var seconds = Math.floor((time / 1000) % 60);
  var minutes = Math.floor((time / (1000 * 60)) % 60);
  var hours = Math.floor(time / (1000 * 60 * 60));

  return (
    pad(hours) + ":" + pad(minutes) + ":" + pad(seconds) + "." + pad(milliseconds)
  );
}

function pad(num) {
  return num.toString().padStart(2, "0");
}

function incrementSetCount() {
  setCount++;
  setCountDisplay.textContent = setCount;
}

function resetSetCount() {
  setCount = 0;
  setCountDisplay.textContent = setCount;
}
