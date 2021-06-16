window.onload = function () {
  var seconds = 00;
  var tens = 00;
  var appendSecond = document.getElementById("seconds");
  var appendTens = document.getElementById("tens");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
  };
  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSecond.innerHTML = seconds;
  };

  function startTime() {
    tens++;
    if (tens <= 9) appendTens.innerHTML = "0" + tens;
    if (tens > 9) appendTens.innerHTML = tens;
    if (tens > 99) {
      seconds++;
      tens = 00;
      appendTens.innerHTML = "0" + 0;
      appendSecond.innerHTML = "0" + seconds;
    }
    if (seconds > 9) appendSecond.innerHTML = seconds;
  }
};
