// Stopwatch variables
let startTime;
let elapsedTime = 0;
let timerInterval;

// Get timer element
const timerElement = document.getElementById('time');

// Format time as HH:MM:SS
function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  return formattedTime;
}

// Update the timer display
function updateTimerDisplay() {
  timerElement.textContent = formatTime(elapsedTime);
}

// Start the stopwatch
function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    updateTimerDisplay();
  }, 1000);
}

// Stop the stopwatch
function stopStopwatch() {
  clearInterval(timerInterval);
}

// Reset the stopwatch
function resetStopwatch() {
  stopStopwatch();
  elapsedTime = 0;
  updateTimerDisplay();
}

// Add event listeners to buttons
const startStopButton = document.getElementById('startStopButton');
startStopButton.addEventListener('click', function() {
  if (timerInterval) {
    stopStopwatch();
    startStopButton.textContent = 'Start';
  } else {
    startStopwatch();
    startStopButton.textContent = 'Stop';
  }
});

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetStopwatch);
