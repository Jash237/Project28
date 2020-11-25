
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;     

var boy;
var mango1,mango2,mango3,mango4,mango5,mango6;
var tree;
var stone;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    boy = new Boy(600,50,300,100);

	tree = new Tree(500,320,120,70);
	
	stone = new Stone(650,50);

	mango1 = new Mango(tree.x,tree.y,70,70);
	mango2 = new Mango(560,370,70,70);
	mango3 = new Mango(640,370,70,70);
	mango4 = new Mango(560,340,70,70);
	mango5 = new Mango(640,340,70,70);
	mango6 = new Mango(tree.x,370,70,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  boy.display();

  tree.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  
  drawSprites();
 
}



