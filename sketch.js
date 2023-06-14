var mar
var navio
var navionavegando

function preload(){

  navionavegando = loadAnimation("ship-1.png","ship-2.png","ship-3.png");
  seaImg = loadImage("sea.png")

}

function setup(){
  createCanvas(1400, 1200);
  mar = createSprite(500, 350, 100, 100)
  mar.addImage(seaImg)
  navio= createSprite(500, 400, 70, 70);
navio.addAnimation("navegando",navionavegando)
navio.scale = 0.4
mar.velocityX = -3
}

function draw() {
  background("blue");


    drawSprites();
if(mar.x < 0 ){
  mar.x = width/2



}
 
}
