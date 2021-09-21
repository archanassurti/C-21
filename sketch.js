var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(1100, 200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityX = -3;
  fixedRect.velocityX = +3;
}

function draw() {
  background(0,0,0);  
  bounceOff(movingRect,fixedRect);
  
  drawSprites();
}
