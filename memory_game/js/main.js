const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

const cardOne = cards[0];
const cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}
};

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo); 