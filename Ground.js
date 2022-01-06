class Ground {
    constructor() {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(200, 850, 400, 5, options);
        this.x = 200;
        this.y = 805;
        this.width = 400;
        this.height = 5;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("grey");
        rect(pos.x, pos.y, this.width, this.height);
    }

}