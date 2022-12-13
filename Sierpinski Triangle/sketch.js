let tick = 0;
let startPoints;
let points;
let currPoint;

function setup() {
    frameRate(120);
    createCanvas(1000, 1000);

    startPoints = initTriangle();
    points = [...startPoints];
    currPoint = startPoints[0]
}

function draw() {
    clear()
    stroke('purple');
    strokeWeight(2);
    for (vector of points) {
        point(vector)
    }

    tick++;
    if (tick % 1 == 0) {
        let randPoint = startPoints[Math.floor(Math.random() * startPoints.length)];
        let midPoint = getMidPoint(randPoint, currPoint);

        points.push(midPoint)

        stroke('blue')
        strokeWeight(2);
        line(midPoint.x, midPoint.y, currPoint.x, currPoint.y);

        currPoint = midPoint
    }
}

// Helpers

function initTriangle() {
    let startX = 100
    let endX = 900
    let startY = 100
    let endY = 900
    let startPoints = [createVector(startX, startY), createVector((startX + endX) / 2, endY), createVector(endX, startY)];
    return startPoints;
}

function getMidPoint(point1, point2) {
    let midPoint = createVector((point1.x + point2.x) / 2, (point1.y + point2.y) / 2);
    return midPoint;
}