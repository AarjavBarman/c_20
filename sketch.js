var rectf,rectm;




function setup() {
  createCanvas(800,400);
  rectf   = createSprite(400, 200, 50, 50);
  rectf.shapeColor = "green";
  rectm = createSprite(100,300,50,50);
  rectm.shapeColor = "green";
  
}

function draw() {
  background(255,255,255);  
  
  rectm.y = World.mouseY;
  rectm.x = World.mouseX;
  if(rectm.x-rectf.x < rectm.width/2+rectf.width/2 &&rectf.x-rectm.x < rectm.width/2+rectf.width/2 && 
    rectm.y-rectf.y < rectm.height/2+rectf.height/2 && rectf.y-rectm.y < rectm.height/2+rectf.height/2) {
  rectm.shapeColor = "red";
  rectf.shapeColor = "red";  
  }
  else{
    rectm.shapeColor = "green";
    rectf.shapeColor = "green";  
  }
  drawSprites();
}