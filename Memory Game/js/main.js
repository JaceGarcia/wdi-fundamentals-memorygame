
var cardOne = 'queen';
var CardTwo = 'king';
var cards = [
    {
        rank:"queen",
        suit:"hearts",
        cardImage:"images/queen-of-hearts.png"
    },
    {
        rank:"queen",
        suit:"diamonds",
        cardImage:"images/queen-of-diamonds.png"
    },
    {
        rank:"king",
        suit:"hearts",
        cardImage:"images/king-of-hearts.png"
    },
    {
        rank:"king",
        suit:"diamonds",
        cardImage:"images/king-of-diamonds.png"
    }
];
var cardsInPlay = [];

var CheckForMatch = function(clickedImg, frontImg){
    clickedImg.setAttribute('src', frontImg);
    if (cardsInPlay.length === 2 )
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        } else {
            alert("Sorry, try again.");
        }
}

var flipCard = function(evt){
     cardId = evt.target.getAttribute('data-id');
     console.log(cardId);
     console.log('User flipped ' + cards[cardId].rank);
     console.log(cards[cardId].cardImage);
     console.log(cards[cardId].suit);
     console.log(evt);

     cardsInPlay.push(cards[cardId].rank);
     CheckForMatch(evt.target, cards[cardId].cardImage);
}

var createBoard = function(){
    for (var i = 0; i < cards.length; i++) {
        console.log('i = ' + i);
        var cardElement = document.createElement('img');
        var gameBoardDiv = document.getElementById('game-board');

        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        gameBoardDiv.appendChild(cardElement)
    }
}

createBoard();
