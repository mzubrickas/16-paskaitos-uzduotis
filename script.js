"use strict";

var buttons = document.getElementsByTagName("button");
var h1 = document.getElementsByTagName("h1");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var setLevel = document.getElementsByTagName("input");
var goal = document.getElementById("level");
var number1 = 0;
var number2 = 0;
var level = 5;
var end = false;

// Pirmo žaidėjo veiksmas
buttons[0].addEventListener("click", function() {
  if(!end) {
    player1.textContent = number1++;
    if (number1 === level + 1) {
      player1.style.color = "DarkViolet";
      end = true;
    }
  }
});

// Antro žaidėjo veiksmas
buttons[1].addEventListener("click", function() {
  if(!end) {
    player2.textContent = number2++;
    if (number2 === level + 1) {
      player2.style.color = "DeepPink";
      end = true;
    }
  }
});

// Žaidmo restartas
function restartas(){
  number1 = 0;
  number2 = 0;
  player1.style.color = "SpringGreen";
  player2.style.color = "SpringGreen";
  end = false;
  player1.textContent = number1;
  player2.textContent = number2;
}

buttons[2].addEventListener("click", function() {
    restartas();
});

setLevel[0].addEventListener("click", function(){
  level = Number(this.value);
  goal.textContent = level;
  restartas()
});
