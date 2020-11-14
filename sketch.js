
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Contraint = Matter.Constraint;

var r1,bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 

	engine = Engine.create();
	world = engine.world;


	
	r1 = new roof(400,100,400,20);
	bob1 = new Bob(400,300,40);
	bob2 = new Bob(445,300,40);
	bob3 = new Bob(490,300,40);
	bob4 = new Bob(355,300,40);
	bob5 = new Bob(307,300,40);

	rope1= new Rope(bob1.body,r1.body,-40*2,0)

	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(0);
  //Engine.update(engine)
  
  r1.display ();
bob1.display ();
bob2.display ();
bob3.display ();
bob4.display ();
bob5.display ();
rope1.display ();


  drawSprites();
 
}



