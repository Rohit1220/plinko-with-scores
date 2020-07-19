class line {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(400,450,800,5,options);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
    rect(pos.x, pos.y, 800,5);
    }
  };