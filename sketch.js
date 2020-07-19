const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var particle;
var turn = 0;
var gamestate = play = particles.isStatic="false";
var gamestate = end = particles.isStatic="true";
var yellowline;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  line1 = new line();
  for (var k =0;k <=width; k =k+80) {
    divisions.push (new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }
     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }   
}
function draw() {
  background("black");
  textSize(35)
  fill("white")
  text("Score  " + score, width-500, 50)
  fill("white")
  text("500",10,divisionHeight+250)
  fill("white")
  text("500",90,divisionHeight+250)
  fill("white")
  text("500",170,divisionHeight+250)
  fill("white")
  text("500",250,divisionHeight+250)
  fill("white")
  text("100",330,divisionHeight+250)
  fill("white")
  text("100",410,divisionHeight+250)
  fill("white")
  text("100",490,divisionHeight+250)
  fill("white")
  text("200",570,divisionHeight+250)  
  fill("white")
  text("200",650,divisionHeight+250)  
  fill("white")
  text("200",730,divisionHeight+250)
  if(turn===5 || score===5)
  {
    gamestate=end;
  }
  Engine.update(engine); 
  for (var i = 0 ; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30,width/2+30), 10,10));
  } 
  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
   line1.display();
}
function mousePressed ()
{
  if (gamestate!=="end")
  {
    count++;
    particle=new Particle(mouseX,10,10,10);
  }
};