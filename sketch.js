var fixedRect;
var movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="yellow";
  fixedRect.debug=true;
  movingRect=createSprite(200,200,25,25);
  movingRect.shapeColor="yellow";
  movingRect.debug=true;

}

function draw() {
  background("black");
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x <= movingRect.width/2+fixedRect.width/2
     && fixedRect.x - movingRect.x <= movingRect.width/2+fixedRect.width/2 
     && movingRect.y - fixedRect.y <= movingRect.height/2+fixedRect.height/2
     &&fixedRect.y - movingRect.y <= movingRect.height/2+fixedRect.height/2 ){
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";

  }
  else{
    fixedRect.shapeColor="yellow";
    movingRect.shapeColor="yellow";
  }
  drawSprites();
}