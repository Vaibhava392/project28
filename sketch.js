const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = new Thrower(218,445,120,120)
	stone = new Stone(100,20,50)
	tree = new Tree(600,335,250,370)
	ground = new Ground(400,485,800,10)
	mango1 = new Mango(605,245,40)
	mango2 = new Mango(625,235,40)
	mango3 = new Mango(605,270,40)
	mango4 = new Mango(600,225,40)
	mango5 = new Mango(555,245,40)
	launch = new Throw(stone.body,{x : 150, y : 410 });


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  boy.display();
  tree.display();
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  launch.display();
}
function detectCollision(Lstone,Lmango){
	mangoBodyPosition = Lmango.body.position
	stoneBodyPosition = Lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<= Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false);
	}

}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x : mouseX, y : mouseY})
}
function mouseReleased(){
    launch.fly();
}
function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body,{x : 100, y : 410 })
		launch.attach(stone.body,{x : 100, y : 410});
	}
}