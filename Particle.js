class Particle {
    constructor(x, y,r) {
        var options ={
            restitution:0.4
        }
        this.r=r;
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        if (this.body.position.x<300 && this.body.position.y===450){
           score=score+500;
          }
        if (this.body.position.x>300 && this.body.position.x<600 && this.body.position.y===450){
            score=score+100;
           }
        if (this.body.position.x>600 && this.body.position.y===450){
            score=score+200;
           }
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }
};