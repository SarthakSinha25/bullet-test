var bullet,wall,speed,weight,thickness

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  speed = random(70,90);
  weight = random(400,1500);

bullet = createSprite(100, 200, 50, 10);
wall = createSprite(1300, 200, 50, 175);

bullet.velocityX = speed;
bullet.shapeColor = color(225);

}
function draw() {
  background(0); 
  hasCollided(bullet,wall);
  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage=0.5 * weight * speed * speed / (thickness * thickness * thickness);

   console.log(damage);

    if (damage>10){
    wall.shapeColor=color(255,0,0);
    }

    if (damage<10){
    wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(lbullet, lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}