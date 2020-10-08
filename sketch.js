
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone
var mango
var world
var engine
var chain
var ground
var tree
function preload() {

}

function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;
	mango = new Mango(570, 120);
	mango1 = new Mango(560, 130);
	mango2 = new Mango(650, 60);
	mango3 = new Mango(560, 70 );
	mango4 = new Mango(690, 70);
	mango5 = new Mango(630, 160);
	stone= new Stone(100,250)
	ground=new Ground(350,380,800,10);
	tree=new Tree(277,200,30,100)
	
console.log(world);
	//Create the Bodies Here.


	Engine.run(engine);
	

	var options = {
		bodyA:stone.body,
            pointB:{x:110,y:310} ,
            stiffness: 0.04,
            length: 10
	}
	chain = Matter.Constraint.create(options)
	World.add(world, chain)
}


function draw() {
	rectMode(CENTER);
	background("white");
	tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	stone.display();
	ground.display();


	if(chain.bodyA){
		line(chain.bodyA.position.x,chain.bodyA.position.y,110,310);
	}

	mango.attackmango(stone);
	mango1.attackmango(stone);
	mango2.attackmango(stone);
	mango3.attackmango(stone);
	mango4.attackmango(stone);
	mango5.attackmango(stone);
	if (keyWentDown("space")) {
		chain.bodyA = stone.body;
	}

	
	
	drawSprites();
text("press space to have the next chance to play", 20,20)
}

function mouseReleased(){
	console.log("Inside mouseReleased")
chain.bodyA=null
}

function mouseDragged(){
	if (chain.bodyA) {
		chain.bodyA.position.x=mouseX;
	chain.bodyA.position.y=mouseY;
	}
	

}
