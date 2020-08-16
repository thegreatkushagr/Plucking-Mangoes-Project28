const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;

var tree, treeImg, boy, boyImg;

function preload()
{
 treeImg = loadImage("Images/tree.png");
 boyImg = loadImage("Images/boy.png");
}

function setup()
 {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
    tree = createSprite(750,400,20,20);
	tree.addImage(treeImg);
	tree.scale = 0.4;

  boy = createSprite(120,525,20,20);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	
	ground = new Ground(500,590,1000,20);
	stone = new Stone(200,200,70);
	string = new Chain(stone.body,{x:65, y:470});
	mango1 = new Mango(800,180,60);
	mango2 = new Mango(685,200,60);
	mango3 = new Mango(940,390,60);
	mango4 = new Mango(675,400,60);
	mango5 = new Mango(860,270,60);
	mango6 = new Mango(740,300,60);
	mango7 = new Mango(550,350,60);
	mango8 = new Mango(650,320,60);
  mango9 = new Mango(820, 350, 60)
	mango10 = new Mango(930, 300, 60)
	
	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("lightBlue");
  stroke("red")
  textSize(34)
  text("Press 'space' and get a second chance to play!", 100, 30);


  drawSprites();
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
  string.display();
  ground.display();
  stone.display();  

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
}


function mouseDragged()
{
 Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
 string.fly();
}

function detectCollision(lstone, lmango)
{
 mangoBodyPosition = lmango.body.position
 stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  
  if(distance<=lmango.r+lstone.r)
  {
	  Matter.Body.setStatic(lmango.body, false);
  }

}

function keyPressed(){
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stone.body,{x:235, y:420})
		string.attach(stone.body);
	}
}