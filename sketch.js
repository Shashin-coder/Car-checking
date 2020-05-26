var car,wall,speed,weight;
speed=random(55,90);
weight=random(500,1500);
car=createSprite(50,200,30,20)
wall=createSprite(1500,200,60,height/2);


function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,30,20)
wall=createSprite(1500,200,60,height/2);

}

function draw() {
  background(0);  
  car.ve3locityX=speed;
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0;
    var deformation=0.5*speed*weight/22500;
    if(deformation>180){
      car.shapeColor="red"
    }
    if(deformation<180){
      car.shapeColor="yellow"
    }
    if(deformation>100){
      car.shapeColor="green";
    }
  }
  drawSprites();
}