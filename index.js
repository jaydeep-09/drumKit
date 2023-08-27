// detecting button press

var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // alert("i got clicked ");

    // this.style.color = "white";

    // var buttonHtml = this.innerHTML;

    makesound(this.innerHTML);
    showannimation(this.innerHTML);
    // write what you want to do when it get clicked
  });
}

// document.addEventListener('keypress',(event)=>{

//     const keyName=event.key;
//     alert("key is pressed : "+keyName);
// });

// detecting key press

document.addEventListener("keypress", function (event) {
  makesound(event.key);
  showannimation(event.key);
});

function makesound(press) {
  if (press === "w") {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (press === "a") {
    var kick_bass = new Audio("sounds/kick-bass.mp3");
    kick_bass.play();
  } else if (press === "k") {
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
  } else if (press === "d") {
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
  } else if (press === "j") {
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
  } else if (press === "l") {
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
  } else if (press === "s") {
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
  } else {
    console.log(buttonHtml);
  }
}

function showannimation(press){
    
  document.querySelector("."+press).classList.add("pressed");

  timeout = setTimeout(() => {
    document.querySelector("."+press).classList.toggle('pressed');
  }, 200);

}

