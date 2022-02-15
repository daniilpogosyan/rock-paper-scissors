// rock paper scissors (or RPS)

const body = document.querySelector('body');
const choiceIcons = document.querySelectorAll('#make-choice');
const currentScores = document.querySelector('#current-score');
const lastChoices = document.querySelectorAll('#current-game img');
const roundOutcome = document.querySelector('#round-outcome')
const gameOutcome = document.querySelector('#game-outcome');

const restartBtn = document.querySelector('#restart-btn');
restartBtn.addEventListener('click',() => {
  game();
  hideRestartBtn();
  gameOutcome.textContent = '';
});
game();

/*************************************/
function setIcon(choice, shape) {
  choice.src = `images/${shape}-shape.png`;
}
function game() {
  let playerScore = 0;
  let computerScore = 0;
  currentScores.textContent = '0 - 0';
  choiceIcons.forEach(choiceIcon => choiceIcon.addEventListener('click', playRound));


  function playRound(e) {
    const playerSelection = playerPlay(e);
    setIcon(lastChoices[0], playerSelection);
    const computerSelection = computerPlay();
    setIcon(lastChoices[1], computerSelection);

    //play one round of RPS and return win/lose/tie - string
    switch (true) {
      //win case
      case playerSelection == 'rock'      && computerSelection == 'scissors':
      case playerSelection == 'paper'     && computerSelection == 'rock':
      case playerSelection == 'scissors'  && computerSelection == 'paper':
        playerScore++;
        currentScores.textContent = `${playerScore} - ${computerScore}`;
        roundOutcome.textContent = `You win: ${playerSelection} beat ${computerSelection}`;
        break;
  
      //lose case
      case playerSelection == 'scissors'  && computerSelection == 'rock':
      case playerSelection == 'rock'      && computerSelection == 'paper':
      case playerSelection == 'paper'     && computerSelection == 'scissors':
        computerScore++;
        currentScores.textContent = `${playerScore} - ${computerScore}`;
        roundOutcome.textContent = `You lose: ${computerSelection} beat ${playerSelection}`;
        break;
        
      //tie
      case playerSelection == computerSelection:
        roundOutcome.textContent = `It's a tie: both picked ${playerSelection}`;
        break;
    } 

    if (playerScore === 5) {
      choiceIcons.forEach(choiceIcon => choiceIcon.removeEventListener('click', playRound));
      showRestartBtn();
      gameOutcome.textContent = "You win. Humanity safe";
    } else if (computerScore === 5) {
      choiceIcons.forEach(choiceIcon => choiceIcon.removeEventListener('click', playRound));
      showRestartBtn();
      gameOutcome.textContent = "You lose. Humanity sucks!";
    }
  }
}

function computerPlay() {
  // 0-rock, 1-paper, 2-scissors
  const computerSelection = Math.floor(Math.random()*3);
  switch (computerSelection) {
    case 0: return 'rock';
    case 1: return 'paper';
    case 2: return 'scissors';
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