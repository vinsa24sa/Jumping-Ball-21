var canvas;
var block1, block2, block3, block4;
var square;
var music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
    edges = createEdgeSprites();
    //create 4 different surfaces
    block1 = createSprite(95,585,180,20);
    block1.shapeColor = "red";
    block2 = createSprite(295,585,180,20);
    block2.shapeColor = "pink";
    block3 = createSprite(497,585,180,20);
    block3.shapeColor = "blue";
    block4 = createSprite(695,585,180,20);
    block4.shapeColor = "purple";
    //create box sprite and give velocity
    square = createSprite(630,100,30,30);
    square.shapeColor = "white";
    square.velocityY = 10;
    square.velocityX = 10;
   
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    square.bounceOff(edges);

    if(isTouching(square,block3)&&square.bounceOff(block3)){
        square.shapeColor = "blue";
        music.loop();
    }

    if(isTouching(square,block1)&&square.bounceOff(block1)){
        square.velocityY = 0;
        square.velocityX = 0;
        square.shapeColor = "red";
        music.stop();
    }

    if(isTouching(square,block2)&&square.bounceOff(block2)){
        square.shapeColor = "pink";
    }

    

    if(isTouching(square,block4)&&square.bounceOff( block4)){
        square.shapeColor = "purple";
    }
    
    drawSprites();
}
