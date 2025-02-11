'use strict';
console.log('Hello World');

// get computer choice using Math.random()
const getComputerChoice = function () {
	const rand = Math.floor(Math.random() * 3) + 1;
	if (rand === 1) {
		return 'rock';
	} else if (rand === 2) {
		return 'paper';
	} else if (rand === 3) {
		return 'scissors';
	}
};

const getHumanChoice = function () {
	const humanChoice = prompt(
		'Please enter a choice, either Rock, Paper, or Scissors'
	);
	return humanChoice.toLowerCase();
};

let humanScore = 0,
	computerScore = 0;

const playRound = function (humanChoice, computerChoice) {
	//rock beats scissors
	//scissors beats paper
	//paper beats rock
	if (humanChoice === computerChoice) {
		console.log('it is a draw try again');
	} else if (humanChoice === 'rock' && computerChoice === 'scissors') {
		console.log('you win this round, Rock beats Scissors');
		humanScore++;
	} else if (humanChoice === 'rock' && computerChoice === 'paper') {
		console.log('you lose, paper beats rock');
		computerScore++;
	} else if (humanChoice === 'paper' && computerChoice === 'rock') {
		console.log('you win this round, paper beats rock');
		humanScore++;
	} else if (humanChoice === 'paper' && computerChoice === 'scissors') {
		console.log('you lose this round, scissors beats paper');
		computerScore++;
	} else if (humanChoice === 'scissors' && computerChoice === 'rock') {
		console.log('you lose this round, rock beats scissors');
		computerScore++;
	} else if (humanChoice === 'scissors' && computerChoice === 'paper') {
		console.log('you win this round, scissors beats paper');
		humanScore++;
	}
};

const playButtonsParent = document.querySelector('.play-buttons');

playButtonsParent.addEventListener('click', e => {
	e.preventDefault();
	const humanEve = e.target.innerHTML.toLowerCase();
	const compChoice = getComputerChoice();

	playRound(humanEve, compChoice);
	const results = document.querySelector('.results');
	results.textContent = `Your current Score ${humanScore} || Computer Score ${computerScore}`;
});

// for (let i = 0; i < 5; i++) {
// 	playRound(getHumanChoice(), getComputerChoice());
// 	console.log(humanScore, computerScore);
// }

// getComputerChoice();
