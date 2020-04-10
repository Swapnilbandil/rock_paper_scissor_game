const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW='DRAW';
const PLAYER_WINS='PLAYER_WINS';
const COMPUTER_WINS='COMPUTER_WINS';
let gameIsRunning;

const getPlayerChoice = ()=> {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};
const getComputerChoice = ()=> {
  const randomNumber=Math.random();
  if(randomNumber<0.34){
    return ROCK;
  }
  else if(randomNumber<0.67){
    return PAPER;
  }
  else{
    return SCISSORS;
  }
};
const getWinner=(cChoice,pChoice)=>
  (cChoice===pChoice) ? RESULT_DRAW : (cChoice===ROCK&& pChoice===PAPER ||
    cChoice===PAPER && pChoice===SCISSORS ||
    cChoice===SCISSORS && pChoice===ROCK) ?  PLAYER_WINS : COMPUTER_WINS;


startGameBtn.addEventListener('click',() => {
  if(gameIsRunning)
  return;
  gameIsRunning=true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  const computerSelection=getComputerChoice();
  const winner=getWinner(computerSelection,playerSelection);
  console.log(winner);
  let message=`You picked ${playerSelection} and computer picked ${computerSelection},therefore you `;
  if(winner===RESULT_DRAW)
  message=message+'had a draw';
  else if(winner===PLAYER_WINS)
  message=message+'won';
  else
  message=message+'lost';
  alert(message);
  gameIsRunning=false;

});
