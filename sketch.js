const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var b1,b2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  
  var ball_options = {
      restitution:0.95
  }
  
  ball = Bodies.circle(50,100,20,ball_options);
  World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
 
  b1 = createImg("up.png");
  b1.position(100,150);
  b1.size = (1,1);
  b1.mouseClicked(vf);

  b2 = createImg("right.png");
  b2.position(220,30);
  b2.size = (1,1);
  b2.mouseClicked(hf);
  
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  fill("aqua");
  stroke("blue");
  ellipse(ball.position.x,ball.position.y,20,20)
  Engine.update(engine);
  



}




function hf(){
 Matter.Body.applyForce(ball,{x:0, y:0},{x:0.05,y:0});


}

function vf(){
 Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}