class Carrot {
    constructor(positionX, positionY, size=16) {
        this.positionVector = createVector(positionX, positionY)
        this.size = size;
    }

    getEaten() {

    }

    update() {

    }

    show() {
        push();
        fill('orange');
        textSize(this.size);
        textAlign(CENTER, CENTER);
        rectMode(CENTER);
        text('C', this.positionVector.x, this.positionVector.y);
        pop();
    }
}