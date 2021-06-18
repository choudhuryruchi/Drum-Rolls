alert("Welcome to Virtual Drum Kit. Enjoy Drum Rolls without having an actual drum 😉. Press OK to continue. ");
var numberOfDrumButtons = document.querySelectorAll(".Drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".Drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/sounds1/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/sounds1/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/sounds1/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/sounds1/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/sounds1/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/sounds1/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/sounds1/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
