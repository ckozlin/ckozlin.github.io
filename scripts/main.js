/* Banner image animation */

let gatorLogo = document.querySelector(".logo");

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
    if (pos == 200) {
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

/* Image carousel */
let myImg = document.querySelector(".pic-of-cam");

let images = [
  "images/kesemheadshot.jpg",
  "images/mcpherson.jpg",
  "images/mountain2.jpg",
  "images/scenery.jpg",
];

let t_img = setInterval(change_image, 15000);
var i = 0;

function change_image() {
  if (i == images.length - 1) {
    i = 0;
  } else {
    i += 1;
  }

  myImg.src = images[i];
}
