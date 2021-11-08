import Deck from "./Deck";
import CardCounter from "./CardCounter";

let playerSum = 0;
const playerDeck = [];
let playerMoney = 200;
let dealerSum = 0;
const dealerDeck = [];
let gameStatus = true;
let cards = new Deck(6);
let count = new CardCounter();

function aceDetection(arr) {
  let altSum = 0;
  for (let i in arr) {
    if (arr[i] === 1) {
      altSum += 11;
    } else {
      altSum += arr[i];
    }
  }
  return altSum;
}
function winStatus() {
  if (playerSum === 21 && dealerSum !== 21) {
  }
}
