let gatorLogo = document.querySelector("#gator-logo");

var t = setInterval(move, 15);
var pos = 0;
var right = true;

function move() {
  if (right) {
    pos += 1;
    gatorLogo.style.left = pos + "px";
    if (pos == 240) {
      right = false;
    }
  } else {
    pos -= 1;
    gatorLogo.style.left = pos + "px";
    if (pos == 0) {
      right = true;
    }
  }
}
