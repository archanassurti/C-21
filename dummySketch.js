var fixedRect, movingRect;
var wall,car;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(500, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  wall = createSprite(1000,200,40,80);
  wall.shapeColor = "blue";
  wall.debug = true;

  car = createSprite(100,200,40,30);
  car.shapeColor = "yellow";
  car.debug = true;
  car.velocityX = 4;


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  /*if(collisionMaster(car,wall)){
    car.shapeColor = "red";
    wall.shapeColor = "red";
  } else{
    car.shapeColor = "yellow";
    wall.shapeColor = "blue";
  }*/

  bounceOff(car,wall);
  
  drawSprites();
}

function collisionMaster(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
}
else {
  return false;
}
}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = -1 * object1.velocityX;
      object2.velocityX = -1 * object2.velocityX;
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = -1 * object1.velocityY;
    object2.velocityY = -1 * object2.velocityY;
}
}