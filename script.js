// rock paper scissors (or RPS)

const body = document.querySelector('body');
const shapeBtns = document.querySelectorAll('.shape-btn');
const scores = document.querySelectorAll('#scoreboard span');
const lastChoices = document.querySelectorAll('#last-round span');
const roundOutcome = document.querySelector('#last-round p:last-child')
const gameOutcome = document.querySelector('#game-outcome');

const restartBtn = document.querySelector('#restart-btn');
restartBtn.addEventListener('click',() => {
  game();
  hideRestartBtn();
});
game();

/*************************************/

function game() {
  let playerScore = 0;
  let computerScore = 0;
  scores[0].textContent = 0;
  scores[1].textContent = 0;
  shapeBtns.forEach(btn => btn.addEventListener('click', playRound));


  function playRound(e) {
    const playerSelection = playerPlay(e);
    lastChoices[0].textContent = playerSelection;
    const computerSelection = computerPlay();
    lastChoices[1].textContent = computerSelection;

    //play one round of RPS and return win/lose/tie - string
    switch (true) {
      //win case
      case playerSelection == 'ROCK'      && computerSelection == 'SCISSORS':
      case playerSelection == 'PAPER'     && computerSelection == 'ROCK':
      case playerSelection == 'SCISSORS'  && computerSelection == 'PAPER':
        playerScore++;
        scores[0].textContent = playerScore;
        roundOutcome.textContent = `You win: ${playerSelection} beat ${computerSelection}`;
        break;
  
      //lose case
      case playerSelection == 'SCISSORS'  && computerSelection == 'ROCK':
      case playerSelection == 'ROCK'      && computerSelection == 'PAPER':
      case playerSelection == 'PAPER'     && computerSelection == 'SCISSORS':
        computerScore++;
        scores[1].textContent = computerScore;
        roundOutcome.textContent = `You lose: ${computerSelection} beat ${playerSelection}`;
        break;
        
      //tie
      case playerSelection == computerSelection:
        roundOutcome.textContent = `It's a tie: both picked ${playerSelection}`;
        break;
    } 

    if (playerScore === 5) {
      shapeBtns.forEach(btn => btn.removeEventListener('click', playRound));
      showRestartBtn();
      gameOutcome.textContent = "You win. Humanity safe!";
    } else if (computerScore === 5) {
      shapeBtns.forEach(btn => btn.removeEventListener('click', playRound));
      showRestartBtn();
      gameOutcome.textContent = "You lose. Humanity sucks!";
    }
  }
}

function computerPlay() {
  // 0-rock, 1-paper, 2-scissors
  const computerSelection = Math.floor(Math.random()*3);
  switch (computerSelection) {
    case 0: return 'ROCK';
    case 1: return 'PAPER';
    case 2: return 'SCISSORS';
  }
}

function playerPlay(e) {
  return e.target.dataset.shape;
}


function showRestartBtn() {
  restartBtn.style.display = 'initial';
}
function hideRestartBtn() {
  restartBtn.style.display = 'none';
}