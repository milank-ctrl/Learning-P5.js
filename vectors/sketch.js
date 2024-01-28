let walker;

function setup() {
    createCanvas(640, 240);

    walker = new Walker();

}

function draw() {
    background(255);

    walker.update();
    walker.checkEdges();
    walker.show();
}

class Walker {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = createVector(random(-2, 2), random(-2, 2));
    }

    update() {
        this.position.add(this.velocity);
    }

    show() {
        stroke(0);
        strokeWeight(2);
        fill(127);
        circle(this.position.x, this.position.y, 48);
    }

    checkEdges() {
        if (this.position.x > width || this.position.x < 0) {
            this.velocity.x = this.velocity.x * -1;
        }
        if (this.position.y > height || this.position.y < 0) {
            this.velocity.y = this.velocity.y * -1;
        }
    }
}