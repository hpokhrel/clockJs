const stopBtnTime = document.getElementById("stopBtnTime");
showTime = () => {
  const showTime = new Date();
  document.getElementById(
    "showTime"
  ).innerText = `${showTime.getHours()}:${showTime.getMinutes()}:${showTime.getSeconds()}`;
};
const intervalTime = setInterval(showTime, 1000);
stopBtnTime.addEventListener("click", () => {
  clearInterval(intervalTime);
});

const stopWatch = document.getElementById("stopWatch");
const stopStopWatch = document.getElementById("stopStopWatch");
const startStopWatch = document.getElementById("startStopWatch");

const showStopWatch = () => {
  const showStopWatch = new Date();
  const timerValue = document.getElementById("stopWatch");
  timerValue.innerText = `${showStopWatch.getSeconds()} : ${showStopWatch.getMilliseconds()}`;
  console.log(showStopWatch);
};

// showStopWatch()

startStopWatch.addEventListener("click", () => {
  const userValue = parseInt(
    prompt("Enter the timer duration in seconds for the stopwatch to stop"),
    10
  );
  if (isNaN(userValue) || userValue <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  startTime = new Date();
  stopWatchInterval = setInterval(showStopWatch, 10);

  setTimeout(() => {
    clearInterval(stopWatchInterval);
    alert("Time's up!");
  }, userValue * 1000);
});

stopStopWatch.addEventListener("click", () => {
  clearInterval(stopWatchInterval);
  elapsedTime += new Date() - startTime;
});
