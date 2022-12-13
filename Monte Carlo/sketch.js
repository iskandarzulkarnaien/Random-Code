let tick = 0;
let pointVectors = [];
let currPoint;
let numPointsInCircle = 0;

const CANVAS_SIZE_X = 1000;
const CANVAS_SIZE_Y = 800;

const CIRCLE_CENTER_X = CANVAS_SIZE_X/2;
const CIRCLE_CENTER_Y = CANVAS_SIZE_Y/2;
const CIRCLE_DIAMETER = 700;

function setup() {
    frameRate(120);
    createCanvas(CANVAS_SIZE_X, CANVAS_SIZE_Y);
}

function draw() {
    clear();
    drawSquare();
    drawCircle();
    drawPoints(pointVectors);

    tick++;
    if (tick % 1 == 0) {
        chooseNextPoint()
    }

    drawEstimatePI();
}

// Helpers

function drawSquare() {
    stroke('black')
    strokeWeight(1);
    rectMode(CENTER);
    square(CIRCLE_CENTER_X, CIRCLE_CENTER_Y, CIRCLE_DIAMETER);
}

function drawCircle() {
    stroke('black')
    strokeWeight(1);
    circle(CIRCLE_CENTER_X, CIRCLE_CENTER_Y, CIRCLE_DIAMETER);
}

function drawPoints(pointVectors) {
    stroke('blue');
    strokeWeight(4);
    for (vector of pointVectors) {
        point(vector);
    }
}

function drawEstimatePI() {
    stroke('black')
    strokeWeight(1);
    textSize(32);
    textAlign(LEFT, CENTER);
    let estimate = 4 * numPointsInCircle / pointVectors.length;
    text(`PI is: ${estimate}`, CIRCLE_CENTER_X - 70, CIRCLE_CENTER_Y);
    text(`Num Points: ${pointVectors.length}`, CIRCLE_CENTER_X - 70, CIRCLE_CENTER_Y + 50);
}

function chooseNextPoint() {
    let randX = random(-CIRCLE_DIAMETER/2, CIRCLE_DIAMETER/2 + 1)
    let randY = random(-CIRCLE_DIAMETER/2, CIRCLE_DIAMETER/2 + 1)

    let coordX = CIRCLE_CENTER_X + randX;
    let coordY = CIRCLE_CENTER_Y + randY;

    let pointVector = createVector(coordX, coordY)
    pointVectors.push(pointVector)
    
    if (dist(coordX, coordY, CIRCLE_CENTER_X, CIRCLE_CENTER_Y) <= CIRCLE_DIAMETER/2) {
        numPointsInCircle++
    }
}