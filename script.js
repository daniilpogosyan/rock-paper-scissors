// rock paper scissors (or RPS)

game();

function game(numOfRounds = 5) {
// play 5 rounds
// keep score
// report winner and loser
  let playerScore = 0;
  let computerScore = 0;
  for(let i = 0; i < numOfRounds; i++)
  {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    let outcome = playRound(playerSelection, computerSelection);
    console.log(outcome);
  }

  if(playerScore > computerScore) {
    console.log("You win. Humanity safe!")
  } else if (playerScore < computerScore) {
    console.log("You lose. Humanity sucks!");
  } else {
    console.log('It is not the end...');
  }
  

  function playRound(playerSelection, computerSelection) {
    //play one round of RPS and return win/lose/tie - string
    switch (true) {
      //win case
      case playerSelection == 'ROCK'      && computerSelection == 'SCISSORS':
      case playerSelection == 'PAPER'     && computerSelection == 'ROCK':
      case playerSelection == 'SCISSORS'  && computerSelection == 'PAPER':
        playerScore++;
        return `You win: ${playerSelection} beat ${computerSelection}`;
  
      //lose case
      case playerSelection == 'SCISSORS'  && computerSelection == 'ROCK':
      case playerSelection == 'ROCK'      && computerSelection == 'PAPER':
      case playerSelection == 'PAPER'     && computerSelection == 'SCISSORS':
        computerScore++;
        return `You lose: ${computerSelection} beat ${playerSelection}`;
        
      //tie
      case playerSelection == computerSelection:
        return `It's a tie: both picked ${playerSelection}`;
    }    
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
