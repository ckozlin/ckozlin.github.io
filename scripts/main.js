/* Banner image animation */

let gatorLogo = document.querySelector("#gator-logo");

let t = setInterval(move, 15);
let pos = 0;
let right = true;
let clicked = false;

gatorLogo.onclick = function () {
  if (clicked) {
    t = setInterval(move, 15);
    clicked = false;
  } else {
    clearInterval(t);
    clicked = true;
  }
};

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
