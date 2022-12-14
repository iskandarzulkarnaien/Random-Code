class Rabbit {
    constructor(positionX, positionY, size=16, speed=0.5) {
        this.positionVector = createVector(positionX, positionY)
        this.size = size;
        this.speed = speed;
    }

    getClosestCarrot(carrots) {
        let closestCarrot = null;
        let closestDistance = Infinity;
        for (let carrot of carrots) {
            let distance = this.positionVector.dist(carrot.positionVector);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestCarrot = carrot;
            }
        }
        return closestCarrot;
    }

    walkToCarrot(carrot) {
        if (!carrot) {
            return;
        }
        let directionVector = createVector(carrot.positionVector.x - this.positionVector.x, carrot.positionVector.y - this.positionVector.y).normalize();
        this.positionVector.add(directionVector.mult(this.speed));
    }

    eat() {

    }

    update(carrots) {
        let closestCarrot = this.getClosestCarrot(carrots);
        this.walkToCarrot(closestCarrot)
    }

    show() {
        push();
        fill('grey');
        textSize(this.size);
        textAlign(CENTER, CENTER);
        rectMode(CENTER);
        text('R', this.positionVector.x, this.positionVector.y);
        pop();
    }
}