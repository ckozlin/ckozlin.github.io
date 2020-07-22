let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mountain2.jpg') {
        myImage.setAttribute('src', 'images/mcpherson.jpg');
    } else {
        myImage.setAttribute('src', 'images/mountain2.jpg');
    }
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
    setUserName();
}

let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome to my website, ' + myName + '!';
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
}   else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to my website, ' + storedName + '!';
}