// declarring variable to use
const buttonX = document.getElementById('btnx');
const buttonO = document.getElementById('btno');
var gameScore; // keep score var
var player1 = 'X'
var player2 = 'O'

//game combinations array 
const winCombos = [

	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]

]
//choose a player
function choose() {
	document.querySelector('.board').style.display = 'block'; //board shown
}

// //storring all the class "cell" 
const cells = document.querySelectorAll('.cell');
startGame();

//	Start game func 
function startGame() {
	document.querySelector('.endgame').style.display = 'none'; //hide board on endgame
	gameScore = Array.from(Array(9).keys()); //every num from 0-9, keys of the array
	 //clears the board loops through the cells
	for (var i = 0; i <cells.length; i++) {
		cells[i].innerText= '';
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click', turnClick, false);
	}
}

//review each cell and give it its number
function turnClick(square) {
	if (typeof gameScore[square.target.id] == 'number') {
		turn(square.target.id, player1)
		if (!checkTie()) turn(bestSpot(), player2);
	}
}

//gets the playing symbol on the board 
function turn(squareId, player) {
	gameScore[squareId] = player;
	document.getElementById(squareId).innerText = player;
	let gameWon = checkWin(gameScore, player)
	if (gameWon) gameOver(gameWon)
}
//checks the winner, checks the played cells, displays null when no winner
function checkWin(board, player) {
	let plays = board.reduce((a, e, i) =>
		(e === player) ? a.concat(i) : a, []);
	let gameWon = null;
	for (let [index, win] of winCombos.entries()) { //loops through the wining combo
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {index: index, player: player};
			break;
		}
	}
	return gameWon; // displays gamewon
}
//colors the wining row + removes the event listner - button replay
function gameOver (gameWon) {
	for (let index of winCombos[gameWon.index]) {
		document.getElementById(index).style.backgroundColor = 
				gameWon.player == player1 ? "lightblue" : "red";
	}
	for (var i = 0; i < cells.length; i++) {
		cells[i].removeEventListener('click', turnClick, false);
	}
	declareWinner(gameWon.player == player1 ? "You Rock!" : "Damn, better try again");
}

function declareWinner(who) {
	document.querySelector(".endgame").style.display = 'block';
	document.querySelector(".endgame .text").innerText = who;
}

function emptySquares() {
	return gameScore.filter(s => typeof s == 'number');
}

function bestSpot() {
	return emptySquares()[0];
}

function checkTie() {
	if (emptySquares().length == 0) {
		for (var i = 0; i < cells.length; i++) {
			cells[i].style.backgroundColor = 'green';
			cells[i].removeEventListener('click', turnClick, false);
		}
		declareWinner("Tie Game!")
		return true;		
	}
	return false
}
