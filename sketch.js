let gridSize = 40;
let swimImg;
let isSwapped = false;
let color1, color2;

function preload() {
  swimImg = loadImage('swim.png');
}

function setup() {
  let label = createElement("p", "Try clicking!");
  label.position(10, 600);
  createCanvas(600, 600);
  angleMode(DEGREES);
  color1 = color(1, 203, 203);
  color2 = color(1, 162, 204);
}

function draw() {
  background(220);
  backgroundblue();
  drawCross();
  imageMode(CENTER);
  image(swimImg, mouseX, mouseY);
}

function backgroundblue() {
  noStroke();
  let offsetX = (mouseX % gridSize + gridSize) % gridSize;  
  let offsetY = (mouseY % gridSize + gridSize) % gridSize;

  for (let y = -gridSize; y < height + gridSize; y += gridSize) {
    for (let x = -gridSize; x < width + gridSize; x += gridSize) {
      if ((x / gridSize + y / gridSize) % 2 === 0) {
        fill(isSwapped ? color2 : color1);
      } else {
        fill(isSwapped ? color1 : color2);
      }
      rect(x - offsetX, y - offsetY, gridSize, gridSize);
    }
  }
}

function drawCross() {
  let offsetX = (mouseX % gridSize + gridSize) % gridSize;  
  let offsetY = (mouseY % gridSize + gridSize) % gridSize;

  for (let y = -gridSize; y <= height + gridSize; y += gridSize) {
    for (let x = -gridSize; x <= width + gridSize; x += gridSize) {
      push();
      translate(x - offsetX, y - offsetY);
      rectMode(CENTER);
      noStroke();

      if (
        x == y ||  
        x == y - 2 * gridSize ||  
        x == y - 5 * gridSize ||  
        x == y - 7 * gridSize ||  
        x == y - 9 * gridSize ||  
        x == y - 11 * gridSize || 
        x == y - 13 * gridSize ||
        x == y - 15 * gridSize ||
        x == y + 3 * gridSize || 
        x == y + 5 * gridSize || 
        x == y + 8 * gridSize ||
        x == y + 10 * gridSize ||
        x == y + 16 * gridSize || 
        x == y + 17 * gridSize ||
        x == y + 19 * gridSize 
      ) {
        fill(255, 255, 255);
      } else {
        fill(6, 97, 174);
      }

      rect(0, 0, 15, 5);
      rotate(90);
      rect(0, 0, 15, 5);

      pop();
    }
  }
}

function mousePressed() {
  isSwapped = !isSwapped;
}
