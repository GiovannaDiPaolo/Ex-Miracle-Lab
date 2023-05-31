
const deck = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


function getRandomCard() {
  const index = Math.floor(Math.random() * deck.length);
  return deck.splice(index, 1)[0];
}

function playRound() {
  const player1Card = getRandomCard();
  const player2Card = getRandomCard();

  console.log('Jugador 1: ' + player1Card);
  console.log('Jugador 2: ' + player2Card);

  if (player1Card > player2Card) {
    console.log('¡Jugador 1 gana la ronda!');
  } else if (player1Card < player2Card) {
    console.log('¡Jugador 2 gana la ronda!');
  } else {
    console.log('Empate en la ronda.');
  }
}


for (let i = 1; i <= 5; i++) {
  console.log('Ronda ' + i);
  playRound();
}
