var car , wall



function setup() {
  createCanvas(1200,400);
 

speed=random(55,200)
weight=random(400,1500)
car=createSprite(50,200,50,50)
car.velocityX=speed
car.shapeColor=color("blue")

wall=createSprite(1100,200,50,200)

}

function draw() {

if(wall.x-car.x < car.width+wall.width/2 ){
car.velocityX=0
var deformation=0.5*weight*speed*speed/22509
if(deformation > 180){

  car.shapeColor=color("red")

}
if(deformation < 180&& deformation >100){

  car.shapeColor=color("green")

}
if(deformation < 100){

  car.shapeColor=color("yellow")

}
if(mousePressedOer("car")){

  car.x=50;
}
}






  background("pink");  
  drawSprites();
}