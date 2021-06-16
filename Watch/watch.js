function showTime() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var section = "AM";

  if (h > 12) section = "PM";
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  document.getElementById("myBlockDisplay").innerHTML =
    h + ":" + m + ":" + s + section;
  document.getElementById("myBlockDisplay").textContent =
    h + ":" + m + ":" + s + section;
  setTimeout(showTime, 1000);
}
showTime();
