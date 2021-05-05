 


var bg1,bg2,bg1img,bg2img;//backgrounds
var man,manimage//boy
var next,nextimg,magic,magicimg//button
var starimg,star1,star2,star3,star4,star5//stars

function preload(){
//images
manimage = loadImage("boy.png")
man2image = loadImage("smiling boy.png")
bg1img = loadImage("snow3.jpg")
bg2img = loadImage("snow2.jpg")
nextimg = loadImage("next.png")
starimg = loadImage("snow4.webp")
magicimg = loadImage("magic.png") 
}

function setup() {
  createCanvas(600,600);
  //background
  bg1 = createSprite(300,300,600,600);
  bg1.addAnimation("bg1",bg1img)
  bg1.addAnimation("bg2",bg2img)
  //boy
  man = createSprite(400, 408, 50, 50);
  man.addAnimation("man",manimage)
  man.scale = 0.9
//button
  next = createSprite(560,100,50,50)
  next.addAnimation("next",nextimg)
  next.scale = 0.15

  magic = createSprite(100,100,50,50)
  magic.addAnimation("lady",magicimg)
  magic.scale = 0.2
 //stars with diffrent velocitys 
star1 = createSprite(100,100,50,50)
star1.addAnimation("1",starimg)
star1.scale = 0.2
star1.visible = false;


star2 = createSprite(200,100,50,50)
star2.addAnimation("2",starimg)
star2.scale = 0.2
star2.visible = false;


star3 = createSprite(300,100,50,50)
star3.addAnimation("3",starimg)
star3.scale = 0.2
star3.visible = false;

star4 = createSprite(400,100,50,50)
star4.addAnimation("4",starimg)
star4.scale = 0.2
star4.visible = false;

star5 = createSprite(500,100,50,50)
star5.addAnimation("5",starimg)
star5.scale = 0.2
star5.visible = false;

}

function draw() {
  background(0);  
  
 //changes on clicking space 
if(mousePressedOver(magic))
{
  //stars with velocitys
  star1.velocityY = 4;
  star2.velocityY = 2;  
  star3.velocityY = 6;
  star4.velocityY = 9;
  star5.velocityY = 3;
 // visibles
  star1.visible = true;
  star2.visible = true;  
  star3.visible = true;
  star4.visible = true;
  star5.visible = true;
}
  //to change the background
  if(mousePressedOver(next)) {
   bg1.changeAnimation("bg2",bg2img)
  }

  //boy to move
if(keyDown("RIGHT"))
{
  man.x = man.x+10
}
if(keyDown("LEFT"))
{
  man.x = man.x-10
}
  drawSprites();
}