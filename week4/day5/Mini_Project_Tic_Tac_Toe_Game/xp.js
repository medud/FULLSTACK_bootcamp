const board = Array(9).fill(null);
const winCombos = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [6,4,2]
];

let playerSymbol = 'X';
let aiSymbol = 'O';
let currentPlayer = 'player';
let gameActive = false;
let difficulty = 'easy';

function chooseSymbol(symbol) {
  playerSymbol = symbol;
  aiSymbol = symbol === 'X' ? 'O' : 'X';
  gameActive = true;
  currentPlayer = 'player';
  document.getElementById("status").textContent = "Game Started!";
  restartGame(); // clear board
}

function setDifficulty(level) {
  difficulty = level;
  document.getElementById("status").textContent = `Difficulty set to ${level.toUpperCase()}`;
}

function playerMove(index) {
  if (!gameActive || board[index]) return;
  makeMove(index, playerSymbol);
  if (checkWinner(playerSymbol)) return endGame("Player wins!");
  if (board.every(cell => cell)) return endGame("Tie game!");

  currentPlayer = 'ai';
  setTimeout(aiMove, 500);
}

function aiMove() {
  let index;
  if (difficulty === 'easy') {
    const emptyCells = board.map((val, idx) => val === null ? idx : null).filter(v => v !== null);
    index = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  } else {
    index = getBestMove();
  }
  makeMove(index, aiSymbol);
  if (checkWinner(aiSymbol)) return endGame("AI wins!");
  if (board.every(cell => cell)) return endGame("Tie game!");
  currentPlayer = 'player';
}

function makeMove(index, symbol) {
  board[index] = symbol;
  document.getElementById(index).textContent = symbol;
}

function checkWinner(symbol) {
  return winCombos.some(combo =>
    combo.every(index => board[index] === symbol)
  );
}

function endGame(message) {
  gameActive = false;
  document.getElementById("status").textContent = message;
  document.getElementById("restartBtn").style.display = "inline-block";
}

function restartGame() {
  board.fill(null);
  document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
  document.getElementById("status").textContent = '';
  document.getElementById("restartBtn").style.display = "none";
  gameActive = true;
  currentPlayer = 'player';
}

function getBestMove() {
  // Implement Minimax or basic strategy here
  // Placeholder: pick the first available
  for (let i = 0; i < 9; i++) {
    if (!board[i]) return i;
  }
}
