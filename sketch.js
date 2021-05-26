var bg, bgImg;
var tom, tomImg, tomEnd,tomAnimation;
var jerry, jerryImg, jeryEnd,jerryAnimation;

function preload() 
{
    //load the images here
    bgImg= loadImage("images/garden.png");
    
    tomImg= loadAnimation("images/cat1.png");
    tomAnimation= loadAnimation("images/cat2.png","images/cat3.png");
    tomEnd=loadAnimation("images/cat4.png");

    jerryImg=loadAnimation("images/mouse1.png");
    jerryAnimation= loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryEnd= loadAnimation("images/mouse4.png");

}

function setup()
{
    createCanvas(1000,800);
    bg= createSprite(500,400);
    bg.addImage(bgImg);
    bg.scale=1.15;
    
    //create tom and jerry sprites here.
    tom= createSprite(800,700);
    tom.addAnimation("cat",tomImg);
    tom.addAnimation("end",tomEnd);
    tom.addAnimation("tomA",tomAnimation);
    tom.scale=0.2;

    jerry= createSprite(100,680);
    jerry.addAnimation("mouse",jerryImg);
    jerry.addAnimation("jerryE", jerryEnd);
    jerry.addAnimation("jerryA", jerryAnimation);
    jerry.scale=0.2;

}

function draw() 
{
    background("black");

    tom.addAnimation("cat",tomImg);
    jerry.addAnimation("mouse",jerryImg);
    
    //Write condition here to evalute if tom and jerry collide.
    if(tom.x - jerry.x < tom.width/4 + jerry.width/4)
    {
        tom.velocityX=0;
        tom.changeAnimation("end",tomEnd);
        tom.scale=0.2;
        
        jerry.changeAnimation("jerryE", jerryEnd);
    }
    
    keyPressed();
    drawSprites();
}


function keyPressed()
{
   //For moving and changing animation write code here
   if(keyDown(LEFT_ARROW))
   {
       //motion of tom.
       tom.changeAnimation("tomA",tomAnimation);
       tom.velocityX= -4;
       tom.scale=0.3;

       //motion of jerry.
       jerry.changeAnimation("jerryA", jerryAnimation);
       jerry.scale=0.2;
    
    }
}
