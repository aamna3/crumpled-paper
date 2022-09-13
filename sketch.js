
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine
var world

var ball
var ground1
var wall1, wall2
var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		restitution: 0.3,
		density:1.2


	}
	ball = Bodies.circle(100,100,15,ball_options)
	World.add(world,ball)

	var ground_options={
		isStatic:true
	}
	ground = Bodies.rectangle(400,650,800,25,ground_options);
	World.add(world,ground);

	wall1 = Bodies.rectangle(500,600,20,100,ground_options)
	World.add(world,wall1)

	wall2 = Bodies.rectangle(650,600,20,100,ground_options)
	World.add(world,wall2)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ellipse(ball.position.x,ball.position.y,15,15)
rect(ground.position.x,ground.position.y,800,25)
rect(wall1.position.x,wall1.position.y,20,100)
rect(wall2.position.x,wall2.position.y,20,100)

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:35,y:-35})
	}
}


