/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const suits = ["♦", "♥", "♠", "♣"];

function randomElement(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

function randomCardGenerator() {
  const number = randomElement(numbers);
  const suit = randomElement(suits);

  if (suit === "♦" || suit === "♥") {
    document.getElementById("card").style.color = "red";
  } else if (suit === "♠" || suit === "♣") {
    document.getElementById("card").style.color = "black";
  }

  document.getElementById("upper").textContent = suit;
  document.getElementById("central").textContent = number;
  document.getElementById("low").textContent = suit;
}

randomCardGenerator();
document
  .getElementById("Button")
  .addEventListener("click", randomCardGenerator);
setInterval(randomCardGenerator, 10000);
