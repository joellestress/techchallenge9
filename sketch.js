let xImage, oImage;
let cellSize = 130;
let board;
let currentPlayer = 'X';

function preload() {
  xImage = loadImage("assets/x.png");
  oImage = loadImage("assets/o.png");
}

function setup() {
  createCanvas(400, 400);
  
  // create the game board
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
}

function draw() {
  background(220);
  
  // Draw the grid
  stroke(0);
  strokeWeight(4);
  line(cellSize, 0, cellSize, height);
  line(cellSize * 2, 0, cellSize * 2, height);
  line(0, cellSize, width, cellSize);
  line(0, cellSize * 2, width, cellSize * 2);

  // Draw X and O images based on board state
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let x = col * cellSize + cellSize / 2;
      let y = row * cellSize + cellSize / 2;

      if (board[row][col] === 'X') {
        image(xImage, x - cellSize / 2, y - cellSize / 2, cellSize, cellSize);
      } else if (board[row][col] === 'O') {
        image(oImage, x - cellSize / 2, y - cellSize / 2, cellSize, cellSize);
      }
    }
  }
}

function mousePressed() {
  let row = floor(mouseY / cellSize);
  let col = floor(mouseX / cellSize);
  
  // validating the clicks and updating board
  if (row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] === '') {
    board[row][col] = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}
