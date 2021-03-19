const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, ground;
var helicopter, helicopterIMG;
var package, packageImg,  package_options, packageBody;
var r1, r2, r3;

function preload(){
	packageImg = loadImage("package.png");
	helicopterIMG = loadImage("helicopter.png");
}

function setup(){
	var canvas = createCanvas(800,700);
    engine = Engine.create();
	world = engine.world;
    //rectMode(CENTER);
	
	package = createSprite(width/2 , 80, 10, 10);
	package.addImage("pack", packageImg);
	package.scale = 0.2;
    

	var heli_options={
		isStatic: true
	}
	helicopter = createSprite(width/2, 180, 10, 10);
	helicopter.addImage("heli", helicopterIMG);
	helicopter.scale = 0.6;
	
	package_options = {
		restitution : 0.4,
		isStatic: true
   }

	packageBody = Bodies.circle(width/2 , 200 , 5 , package_options); 
	World.add(world, packageBody);

	var g_options={
		isStatic: true
	}
	ground = createSprite(width/2, 650, width, 20 , g_options );
	ground.shapeColor = "white";
	World.add(world, ground);

		
	r1 = new Slab(400, 632, 200, 20);
	r2 = new Slab(290, 542, 20, 200);
	r3 = new Slab(510, 542, 20, 200);
}

function draw(){
	
  background(0);
  Engine.update(engine);

  r1.display();
  r2.display();
  r3.display();

 
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y - 20,240,20);
  Engine.update(engine);
  package.x= packageBody.position.x; 
  package.y= packageBody.position.y - 20 ;

  if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }

  drawSprites();
}