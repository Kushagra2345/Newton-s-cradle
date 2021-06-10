
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	wall1=new Wall(250,100,100,25)
	wall2=new Wall(300,100,100,25)
	wall3=new Wall(350,100,100,25)
	wall4=new Wall(200,100,100,25)
	bob4=new Bob(200,350,20)
	bob1=new Bob(250,350,20)
	bob2=new Bob(300,100,20)
	bob3=new Bob(550,30,20)
	string1=new Wire(wall1.body,bob1.body)
	string2=new Wire(wall2.body,bob2.body)
	string3=new Wire(wall3.body,bob3.body)
    string4=new Wire(wall4.body,bob4.body)

	Engine.run(engine);
  
}


function draw() {

	translate(300,0)
  rectMode(CENTER);
  background(0);
console.log(bob3)
  
  drawSprites();
 
  wall1.display();
  wall2.display();
  wall3.display()
  wall4.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  string1.display()
  string2.display()
  string3.display()
  string4.display()

  fill("white")
  textSize(30)
  text("Newton's Cradle",160,40)
  
}

function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.setAngularSpeed(bob3.body,10)
	}
}