class Drops {
    constructor(x, y) {

        var options = {
            isStatic:false,
            friction:0.1
        }
        
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, 5, options);
        this.radius = 5;
        
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        fill("blue");
        ellipse(pos.x, pos.y, this.radius, this.radius);
        pop();
    }

    update() {
        if (this.body.position.y > 800) {
            Body.setPosition(this.body, {x: random(0, 400), y: random(0,400)})
            console.log("plz work bro");
        }
    }

}