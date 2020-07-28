/* Banner image animation */

let gatorLogo = document.querySelector(".logo");

let t_logo = setInterval(move, 20);
let pos = 0;

function move() {
  if (shrink) {
    pos += 1;
    gatorLogo.style.left = pos + "px";
  } else {
    pos -= 1;
    gatorLogo.style.left = pos + "px";
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

/*Image transitions*/
let t_transition = setInterval(animate_image, 20);
let img_height = 200;
let shrink = true;
let i = 0;

function animate_image() {
  if (shrink) {
    if (img_height == 0) {
      if (i < images.length - 1) {
        i += 1;
        myImg.src = images[i];
      } else {
        i = 0;
        myImg.src = images[i];
      }
      shrink = false;
    } else {
      img_height -= 1;
    }
  } else {
    if (img_height == 200) {
      shrink = true;
    } else {
      img_height += 1;
    }
  }

  myImg.style.height = img_height + "px";
}

let animationToggle = document.querySelector(".animation-toggle");
let animate_page = true;
animationToggle.onclick = function () {
  if (animate_page) {
    clearInterval(t_transition);
    clearInterval(t_logo);
    animate_page = false;
  } else {
    t_transition = setInterval(animate_image, 20);
    t_logo = setInterval(move, 20);
    animate_page = true;
  }
};
