// flip...
const cards = document.querySelectorAll('.grid-item');
cards.forEach(card => card.removeEventListener('click', flipCard));
let hasFlippedCard = false;
let firstCard, secondCard;

//adds the flip class to flip card
function flipCard() {
    this.classList.add('grid-itemflip');
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;
        checkForMatch(); 
         
    }
 } 

function checkForMatch() {
    //check to see if it is a match and what to do if it is a match
    //so far it checks for match but has a problem with double clicking
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        return;
    } else {
        setTimeout(() => {
        firstCard.classList.remove('grid-itemflip');
        secondCard.classList.remove('grid-itemflip');
    }, 500);
    } 
}

// shuffle effect that starts with an immediately envoked function    (func )();
(function shuffleCards() {
    cards.forEach(card => {
        let j = Math.floor(Math.random() * 16);
        card.style.order = j;
    });
})();


// reset button for the grid
let resetButton = document.getElementById("button");
resetButton.addEventListener("click", () => {
    cards.forEach(card => {
        resetTime();
        //loops all cards, removing flip effect
        for (let i = 0; i < cards.length; i++) {
        card.classList.remove('grid-itemflip');
        //shuffles with delay to fix seeing cards while being flipped
        setTimeout(() => {
            card.addEventListener('click', flipCard);
        let j = Math.floor(Math.random() * 16);
        card.style.order = j;
        },500);
    }
})});

// timer, locks board when times up
//reset function
function resetTime() {
    var timeleft = 40;
var downloadTimer = setInterval( function() {
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "TIMES UP";
    //locksboard
    cards.forEach(card => card.removeEventListener('click', flipCard));
  } else {
    document.getElementById("countdown").innerHTML = "Time left "+timeleft;
  }
  timeleft -= 1;
}, 1000);
}

// var timeleft = 40;
// var downloadTimer = setInterval( function() {
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("countdown").innerHTML = "Finished";
//     //locksboard
//     cards.forEach(card => card.removeEventListener('click', flipCard));
//   } else {
//     document.getElementById("countdown").innerHTML = "Time left "+timeleft;
//   }
//   timeleft -= 1;
// }, 1000);

    
//work in progress
//checking if all cards are flipped
//stops timer when all cards are flipped
// function allFlipped() {
//     let count = 0
//     for (let i = 0; i < cards.length+1; i++) {
//         if () {
//             count++
//         console.log("gotem")
//     } else {
//         console.log("end Game here")

//     }
// }
// }