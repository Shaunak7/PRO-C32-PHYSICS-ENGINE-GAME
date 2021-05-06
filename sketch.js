
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var ground;
var football;
var slingshot;
var NeyMar;
var bgImage;

var antMan,blackPanther,captainAmerica,doctorStrange,falcon,groot,hulk,ironMan,loki,mystique,spiderman,storm,thor,vision,wanda,wolverine;

function preload()
{
bgImage=loadImage("images/Background.jpg")	
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(400,600,800,20)
    footBall=new FootBall(100,350,50)
	slingshot=new SlingShot(footBall.body,{x:150,y:200})

	antMan=new Avengers(300,550,100,100)

	blackPanther=new Avengers(400,550,100,100)

	captainAmerica=new Avengers(500,550,100,100)
	
	doctorStrange=new Avengers(300,450,100,100)

	falcon=new Avengers(400,450,100,100)

	groot=new Avengers(500,450,100,100)

	hulk=new Avengers(300,350,100,100)

	ironMan=new Avengers(400,350,100,100)

	loki=new Avengers(500,350,100,100)

	mystique=new Avengers(300,250,100,100)

	spiderman=new Avengers(400,250,100,100)

	storm=new Avengers(500,250,100,100)

	thor=new Avengers(300,150,100,100)

	vision=new Avengers(400,150,100,100)

	wanda=new Avengers(500,150,100,100)

	wolverine=new Avengers(400,150,100,100)

	NeyMar=new NeyMarJr(100,525,100,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(bgImage);
  
  ground.display();
  footBall.display();
  slingshot.display();
  NeyMar.display();

  antMan.display1();
  blackPanther.display2();
  captainAmerica.display3();
  doctorStrange.display4();
  falcon.display5();
  groot.display6();
  hulk.display7();
  ironMan.display8();
  loki.display9();
  mystique.display10();
  spiderman.display11();
  storm.display12();
  thor.display13();
  vision.display14();
  wanda.display15();
  wolverine.display16();

  drawSprites();
 
}

function mouseDragged(){

	Matter.Body.setPosition(footBall.body,{x:mouseX,y:mouseY})
}



