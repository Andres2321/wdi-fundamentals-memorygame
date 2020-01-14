const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

// This variable will collect all cards clicked by the user 
let cardsInPlay = [];
 
var checkForMatch = function() {
	// Logic: If the rank of the first and second index in cardsInPlay equal
	if (cardsInPlay[0] === cardsInPlay[1]) {
		// If true display this alert
		alert("You found a match!");
	} else {
		// If false display this alert
		alert("Sorry, hit the reset button to try again.");
	};
};


var flipCard = function() {
	// Attaches the data attribute to a variable called cardId
	var cardId = event.target.getAttribute('data-id');
	// Adds the rank contained in the cards array when it is "clicked" by the user
	cardsInPlay.push(cards[cardId].rank);
	//  Attaches the source of the image contained in the cards array
	event.target.setAttribute('src', cards[cardId].cardImage);
	//  When element cardsInPlay has a total of two cards, then checkForMatch function will be called
	if (cardsInPlay.length === 2) {
		checkForMatch();
	};
};


var createBoard = function() {
	// Iterates through the cards array
	for (let i = 0; i <cards.length; i++) {
		// Creates an img element saved to a variable called cardElement
		var cardElement = document.createElement('img');
		// Attaches the source of an image to cardElement (back of a playing card)
		cardElement.setAttribute('src', 'images/back.png');
		// Creates data attribute as function iterates through cards array
		cardElement.setAttribute('data-id', i);
		// Creates an event handler and executes the callback function flipCard
		document.addEventListener('click', flipCard);
		// Attaches cardElement to the id 'game-board' in the index.html file
		document.getElementById('game-board').appendChild(cardElement);
	};
};

function resetButton() {
	// function will reload web page
	document.location.reload(true);
};

/*
Retrieves the appropriate id and sets it to a variable 
Use the variable to set text inside button
Add a click event handler to call the resetButton function
*/
var btn = document.getElementById("reset-button");
btn.textContent = "Reset";
btn.addEventListener('click', resetButton);

createBoard();