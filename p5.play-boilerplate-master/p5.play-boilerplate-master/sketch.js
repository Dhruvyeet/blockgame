var fixedrect , movingrect, g1, g2, g3


function setup() {
  createCanvas(1200,600);
fixedrect = createSprite(600,300,40,40)

movingrect = createSprite(450,280,40,40)

g1 = createSprite(100,280,40,40)

g2 = createSprite(200,280,40,40)

g3 = createSprite(300,280,40,40)
}


function draw() {
  background("black");  

fixedrect.shapeColor="red"

movingrect.shapeColor="red"

movingrect.x = mouseX

movingrect.y = mouseY 
  
drawSprites();

if(isTouching(movingrect,g1)){

movingrect.shapeColor="red"
g1.shapeColor="red"


}
else{

movingrect.shapeColor="blue"
g1.shapeColor="blue"



}
}

function isTouching(object1,object2)
{
  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2 &&
    object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object1.height/2 + object2.height/2)
     {
      return true
     }
     else
     {
  
      return false
}
}





