var ground,boy,boyimg;
function preload(){

  boyimg = loadImage("bo1.png");
     

}

function setup(){ 
    createCanvas(windowWidth,windowHeight);
    boy = createSprite(50,height-120,10,10);
    boy.addImage(boyimg);
    //creating a scroolling effect
    ground = createSprite(width/2,height-100,windowWidth,20);
    ground.x = ground.width /2;
    ground.velocityX = -3; 

}

function draw(){
    background("darkblue");
    drawSprites();


    if (ground.x < 0){
        ground.x = ground.width/2;
      }

       //jump when the space key is pressed
    if(keyDown("space")&& boy.y >= 100) {
        boy.velocityY = -12;
        
    }
    
    //add gravity
    boy.velocityY = boy.velocityY + 0.8


     //stop trex from falling down
    boy.collide(ground);

}


