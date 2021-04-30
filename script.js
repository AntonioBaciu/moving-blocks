document.addEventListener("keydown", keyPressed);

let canvas = document.getElementById("snakeGame");
let scoreDisplay = document.getElementById("snakeGameScore");
let highestScoreDisplay = document.getElementById("snakeGameHighestScore");
let c = canvas.getContext("2d");
const cell = 40;
const rows = 14;
const cols = 14;
canvas.height = rows * cell;
canvas.width = cols * cell;

let dir = {
  x: 0,
  y: 0,
};
let snakeInitial = {
  x: (rows * cell) / 2,
  y: (cols * cell) / 2,
};
let tail = [];
for (let i = 0; i < 3; i++) {
  tail.push({
    x: snakeInitial.x - i * cell,
    y: snakeInitial.y,
  });
}
let food = {
  x: snakeInitial.x + 2 * cell,
  y: snakeInitial.y,
};
let score = 0;
let highestScore = 0;
let start = true;
