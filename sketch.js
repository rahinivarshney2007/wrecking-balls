const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  engine = Engine.create();
  world=engine.world
createCanvas(800,400);
 ball=new Ball(200,200)
 box1=new Box(600,100)
 box2=new Box(600,195)
 box3=new Box(600,290)
 rope1=new Rope(ball.ball1,{x:250,y:200})
 ground1=new Ground(400,347)
}

function draw() {
  background("brown");  
  Engine.update(engine)
  ball.display()
  box1.display()
  box2.display()
  box3.display()
  rope1.display()
  ground1.display()
  drawSprites();
}
function mouseDragged(){
  
    Matter.Body.setPosition(ball.ball1,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
  rope1.fly()
  }
  
