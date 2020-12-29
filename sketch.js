
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3, bob4,bob5, roof;
var chain1,chain2,chain3, chain4,chain5;
var world;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	roof =new Roof(650,170,300,20);

	bob1 = new Bob(570,400,40);
	bob2 = new Bob(610,400,40);
	bob3 = new Bob(650,400,40);
	bob4 = new Bob(690,400,40);
	bob5 = new Bob(730,400,40);

	chain1 = new Chain(bob1.body,roof.body,-80,0);
	chain2 = new Chain(bob2.body,roof.body,-40,0);
	chain3 = new Chain(bob3.body,roof.body,0,0);
	chain4 = new Chain(bob4.body,roof.body,40,0);
	chain5 = new Chain(bob5.body,roof.body,80,0);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  roof.display();

  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50});

	}
}






