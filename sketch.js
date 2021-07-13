var ball;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundObj.display();

	groundObj = new ground(width/2,670,width,20);
	leftSide = newGround(1100,600,20,120);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Matter.Bodies.circle(400,350,20,ball_options);
World.add(world,ball);

	Engine.run(engine);

	var ball_options={
		isStatic:false,
		restitoution:0.3,
		friction:0,
		density:1.2
	
	}
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
 
  Engine.update(engine); 
 
  

ellipse(ball.position.x,ball.position.y,20);
 
 if(keydown(UP_ARROW)){
hForce();
 }
 drawSprites();
}
function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}


