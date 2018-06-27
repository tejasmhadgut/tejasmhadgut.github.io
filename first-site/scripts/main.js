var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Mangekyou-Sharingan-Kakashi-kekkei-genkai-7297790-300-300.jpg') {
      myImage.setAttribute ('src','images/the_red_eyes.png');
    } else {
      myImage.setAttribute ('src','images/Mangekyou-Sharingan-Kakashi-kekkei-genkai-7297790-300-300.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}