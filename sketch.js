const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var engine, world;

var backgroundImg ;
var frontFacingIMG;
var leftSideFacingIMG;
var rightSideFacingIMG;

var characterSprite;

var snows = [];

function preload(){
    backgroundImg = loadImage("images/snow3.jpg");

    frontFacingIMG = loadImage("images/front facing.png");
    leftSideFacingIMG = loadImage("images/left side facing.png");
    rightSideFacingIMG = loadImage("images/right side facing.png");

}
function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

   //create sprites here;
   characterSprite = createSprite(500,300);
   characterSprite.addImage(frontFacingIMG);
   characterSprite.scale = 0.1;


   //gravity;
   
   

}

function draw() {
  background(backgroundImg);
  
  if(frameCount % 5 === 0){
    snows.push(new Snow(random(-10,1200),10,10));
  }
  for (var s = 0; s < snows.length; s++) {
    snows[s].display();
  }
  
  if(keyCode === RIGHT_ARROW){
    characterSprite.velocityY = -10
 }
 characterSprite.velocityY = characterSprite.velocityY + 0.8;



    drawSprites();
}


