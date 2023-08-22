// King = 10 || Ace = 11
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

let player = {
    name: "Vishal",
    chips: 200
}

let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ": $" + player.chips;


function getRandom() {
    let randomCards = Math.floor(Math.random() * 13) + 1;
    if(randomCards > 10){
        return 10;
    } else if (randomCards === 1) {
        return 11;
    } else {
        return randomCards;
    }
}

function startGame() { 
    let firstCard = getRandom();
    let secondCard = getRandom();
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "cards: ";
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    };
    sumEl.textContent = "sum: " + sum;
if (sum <= 20) {
    message = "Do you want to draw a new card?";
    isAlive = true;
} else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
} else {
    message = "You're out of the game!";
    isAlive = false;
}
    messageEl.textContent = message;
}


function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandom();
        sum += card;
        cards.push(card);
        renderGame();
    }
    
    
}