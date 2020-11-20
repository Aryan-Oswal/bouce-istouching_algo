var fixedRect , movingRect ;
var obj1;
function setup() {
  createCanvas(800,800);
  background ("blue")
  fixedRect = createSprite(100, 100, 50, 50);
  movingRect = createSprite(100, 300, 80, 50);
  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green"

  fixedRect.velocityY = 0;
  movingRect.velocityY = 2;
  obj1 = createSprite(100,500,20,90)
  obj1.velocityY = -2;
  
}

function draw() {
  background("blue");  
   

  bounce(obj1, movingRect);
  if(isTouching(obj1,movingRect)){
    obj1.shapeColor = "black"
    movingRect.shapeColor = "white"

    console.log("touched")
  }else{
    obj1.shapeColor = "white"
    movingRect.shapeColor = "black"   
  }
  drawSprites();
}
