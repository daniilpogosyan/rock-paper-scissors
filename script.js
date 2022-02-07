// rock paper scissors (or RPS)

function game(numOfRounds) {
// play 5 non-tie rounds
// keep score
// report winner and loser
  function playRound(playerSelection, computerSelection) {
    //play one round of RPS and return win/lose/tie - string
  }
}

//return randomly either Rock, Paper or Scissors
function computerPlay() {
  // 0-rock, 1-paper, 2-scissors
  const computerSelection = Math.floor(Math.random()*3);
  switch (computerSelection) {
    case 0: return 'ROCK';
    case 1: return 'PAPER';
    case 2: return 'SCISSORS';
  }
}

  // query to input Rock, Scissors or Paper
function playerPlay() {
  let playerSelection = prompt("Choose your weapon:").toUpperCase();
  return playerSelection;
}
