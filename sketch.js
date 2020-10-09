const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy_;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango8, mango9, mango10, mango11, mango12;
var stone_;
var tree_;
var ground_;
var launcher_;

function preload()
{
	boy_ = loadImage("homecoming/boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	stone_ = new stone(235, 420,30);

	tree_ = new tree(1050, 580);

	mango1 = new mango(1100, 100, 30);
	mango2 = new mango(1170, 130, 30);
	mango3 = new mango(1010, 140, 30);
	mango4 = new mango(1000, 70, 30);
	mango5 = new mango(1100, 70, 30);
	mango6 = new mango(1000, 230, 30);
	mango7 = new mango(900, 230, 40);
	mango8 = new mango(1140, 150, 40);
	mango9 = new mango(1100, 230, 40);
	mango10 = new mango(1200, 200, 40);
	mango11 = new mango(1120, 50, 40);
	mango12 = new mango(900, 160, 40);

	ground_ = new ground(width/2, 600, width, 20);

	launcher_ = new launcher(stone_.body, {x:235, y:420});
	
	Engine.run(engine);
  
}

function draw() {
  background(0);
  textSize(25);
  text("Press Space to get a second chance XD", 50, 50);
  image(boy_, 200, 340, 200, 300);
  
  boy_.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  stone_.display();

  ground_.display();

  launcher_.display();

  detectCollision(stone_, mango1);
  detectCollision(stone_, mango2);
  detectCollision(stone_, mango3);
  detectCollision(stone_, mango4);
  detectCollision(stone_, mango5);
  detectCollision(stone_, mango6);
  detectCollision(stone_, mango7);
  detectCollision(stone_, mango8);
  detectCollision(stone_, mango9);
  detectCollision(stone_, mango10);
  detectCollision(stone_, mango11);
  detectCollision(stone_, mango12);

  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone_.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	launcher_.fly();
}

function keyPressedXD(){
	if( keyCode === 32){
		Matter.Body.setPosition(stone_.body, {x: 235, y:420});
		launcher_.attach(stone_.body);
	}
}

function detectcollision(astone, amango){
	mangoBodyPosition = amango.body.position;
	stoneBodyPosition = astone.body.position;
	
	var distanshe = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distanshe<=amango.radius+astone.radius){
		Matter.Body.setStatic(amango.body, false);
	}
}


