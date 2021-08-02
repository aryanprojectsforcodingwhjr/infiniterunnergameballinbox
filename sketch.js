
var boxImg, box;
var obstacleImg, obstacle, obstaclesGroup;
var ball, ballImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload() {
    boxImg = loadImage("box.png");
    obstacleImg = loadImage("obstacle.png");
    ballImg = loadImage("ball.png");
  }

function setup() {
    createCanvas(600, 600);
    box = createSprite(300, 300);
    box.addImage("box", boxImg);
    box.velocityY = 1;
    //groups
    obstacleGroup = new Group();
    invisibleBlockGroup = new Group();
    ball = createSprite(200, 200, 50, 50)
    ball.scale = 0.35
    ball.addImage("ball", ballImg);
  }

  function draw() {
    background(200);
  
    if (gameState == "play") {
      if (keyDown("left_arrow")){
        ball.x = ball.x - 3;
      }
      if(keyDown("right_arrow")){
        ball.x = ball.x + 3;
      }
      if(keyDown("up_arrow")){
        ball.y = ball.y - 5;
      }
      ball.y = ball.y + 3;
      spawnObstacles();
      if(invisibleBlockGroup.isTouching(ball)){
        ball.destroy()
        gameState = "end";
      }
    }

    if (gameState == "end") {
        stroke("yellow");
        fill("yellow");
        textSize(30)
        text("game over",200,200)
      }
    
    
    
      if (box.y > 400) {
        box.y = 300
      }
      drawSprites();
    }
    
    function spawnObstacles(){
      if(frameCount%240 == 0){
        var obstacle = createSprite(200,-50)
        var invisibleBlock = createSprite(200,15)
        invisibleBlock.width = obstacle.width;
        invisibleBlock.height = 2;
        obstacle.x = Math.round(random(120,400))
        invisibleBlock.x = obstacle.x
        obstacle.addImage(obstacleImg)
        obstacle.velocityY = 1;
        invisibleBlock.velocityY = 1;
        obstacle.lifetime = 800;
        invisibleBlock.lifetime = 800;
        obstaclesGroup.add(obstacles);
        invisibleBlock.debug = true;
        invisibleBlockGroup.add(invisibleBlock);
      }
    }
    