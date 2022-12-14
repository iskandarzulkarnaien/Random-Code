let tick = 0;
let rabbits = [];
let carrots = [];

function setup() {
    frameRate(60);
    createCanvas(1000, 1000);

    let rabbit = new Rabbit(100, 100);
    rabbits.push(rabbit);

    let carrot = new Carrot(120, 150);
    carrots.push(carrot);
}

function draw() {
    tick++;
    clear();

    for (let rabbit of rabbits) {
        rabbit.update(carrots);
        rabbit.show();
    }

    for (let carrot of carrots) {
        carrot.update();
        carrot.show();
    }

    // if (tick % 10 == 0) {
    //     console.log(mouseX, mouseY)
    //     console.log(rabbits[0].positionVector)
    // }
}

// Helpers
