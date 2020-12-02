var clawMachine, claw, toy1, toy2, toy3, toy4, toy5, toy6, backgroundImg;
var clawMachineImg, clawImg, toy1Img, toy2Img, toy3Img, toy4Img, toy5Img, toy6Img, backgroundImg;
var hook1, hook2, hook3, hook4, hook5, hook6;
var hookImg;
var gameState="play";
var dropButton;
var score=0;
var invisibleGround;
var invisibleGround2;

function preload(){
clawMachineImg=loadImage("images/clawMachine.png")
clawImg=loadAnimation("images/claw.png","images/closedClaw.png")
toy1Img=loadImage("images/toy 1.png")
toy2Img=loadImage("images/toy 2.png")
toy3Img=loadImage("images/toy 3.png")
toy4Img=loadImage("images/toy 4.png")
toy5Img=loadImage("images/toy 5.png")
toy6Img=loadImage("images/toy 6.png")
backgroundImg=loadImage("images/arcade bg.jpg")
hookImg=loadImage("images/hook.png")


}

function setup() {
  createCanvas(1000,600);
   clawMachine=createSprite(500, 200, 50, 50);
   claw=createSprite(480, 70, 20,20);
   toy1=createSprite(430,130,10,10);
   toy2=createSprite(480,180,10,10);
   toy3=createSprite(525,210,10,10);
   toy4=createSprite(480,130,10,10);
   toy5=createSprite(530,130,10,10);
   toy6=createSprite(430,210,10,10);
   hook1=createSprite(430,110,10,10);
   hook2=createSprite(460,160,10,10);
   hook3=createSprite(525,190,10,10);
   invisibleGround=createSprite(width/2,500,width,20);
   invisibleGround2=createSprite(width/2,455,width,20);
   dropButton=createButton("Drop the toy")
   dropButton.position(width/2-20,height/2)

   clawMachine.addImage(clawMachineImg)
   clawMachine.scale=0.9
claw.addAnimation("clawImg",clawImg)
claw.scale=0.2
claw.debug=true
toy1.addImage(toy1Img)
toy1.scale=0.1
toy2.addImage(toy2Img)
toy2.scale=0.13
toy3.addImage(toy3Img)
toy3.scale=0.12
toy4.addImage(toy4Img)
toy4.scale=0.1
toy5.addImage(toy5Img)
toy5.scale=0.1
toy6.addImage(toy6Img)
toy6.scale=0.1
hook1.addImage(hookImg)
hook1.scale=0.08
hook1.debug=true
hook2.addImage(hookImg)
hook2.scale=0.08
hook3.addImage(hookImg)
hook3.scale=0.08
}

function draw() {
  background(backgroundImg);
  
  if(keyWentDown(UP_ARROW)){
    console.log(claw.y)
claw.y=claw.y-5
  }

  if(keyWentDown(DOWN_ARROW)){
claw.y=claw.y+5
  }

  if(keyWentDown(LEFT_ARROW)){
    claw.x=claw.x-5
  }

  if(keyWentDown(RIGHT_ARROW)){
    claw.x=claw.x+5
  }
//console.log(claw.x)
//console.log(claw.y)
  if((claw.x>=hook1.x-5&&claw.x<=hook1.x+5)&&(claw.y>=hook1.y-35&&claw.y<=hook1.y-25)){
gameState="hooked1"
console.log(gameState)
  }

  else if((claw.x>=hook2.x-5&&claw.x<=hook2.x+5)&&(claw.y>=hook2.y-35&&claw.y<=hook2.y-25)){
    gameState="hooked2"
    console.log(gameState)
      }
      else if((claw.x>=hook3.x-5&&claw.x<=hook3.x+5)&&(claw.y>=hook3.y-35&&claw.y<=hook3.y-25)){
        gameState="hooked3"
        console.log(gameState)
          }

  if(gameState==="hooked1"){
 hook1.x=claw.x
 toy1.x=hook1.x
 hook1.y=claw.y
 toy1.y=hook1.y+20
  }

  if(gameState==="hooked2"){
    hook2.x=claw.x
    toy2.x=hook2.x+20
    hook2.y=claw.y
    toy2.y=hook2.y+20
     }

     if(gameState==="hooked3"){
      hook3.x=claw.x
      toy3.x=hook3.x
      hook3.y=claw.y
      toy3.y=hook3.y+20
       }
  

  dropButton.mousePressed(()=>{
score=score+1
if(gameState==="hooked1"){
  toy1.velocityY=2
  hook1.velocityY=2
}

else if(gameState==="hooked2"){
  toy2.velocityY=2
  hook2.velocityY=2
}

else if(gameState==="hooked3"){
  toy3.velocityY=2
  hook3.velocityY=2
}


console.log("mousePressed")
gameState="released"

console.log(gameState)
claw.x=480
claw.y=70


  })
  
  hook1.collide(invisibleGround2)
  toy1.collide(invisibleGround)
  hook2.collide(invisibleGround2)
  toy2.collide(invisibleGround)
  hook3.collide(invisibleGround2)
  toy3.collide(invisibleGround)
  drawSprites();
  fill("white")
  text("score"+score,width-100,15)
}