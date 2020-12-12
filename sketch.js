
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var ground, groundImg;
var bananaGroup, obstacleGroup;
var score;
var gamestate = play;
var gamestate;
var play;
var end;

function preload(){
  

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);

  monke = createSprite (60,400,30,60);
  monke.addAnimation("running",monkey_running);
 
  monke.scale = 0.2; 
  
  ground = createSprite(100,400,1000,10);
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  SurvivalTime=0;
}


function draw() {
 background ("white");
  
  gamestate = play;
  
  spawnBanana();
  spawnRock();
   
  textSize (15);
  text ("Survival Time = "+SurvivalTime,250,25);
  
  SurvivalTime=SurvivalTime+Math.round(getFrameRate()/60);
  
  if(monke.isTouching(obstacleGroup)){
     
  gamestate = end
    
  }
  
  if (gamestate===play){
    
     if (keyDown ("space") && monke.y>=320) 
  {
    monke.velocityY = -15;  
  }
  
  monke.velocityY = monke.velocityY+1;
  
  monke.collide(ground);
    
  } else if(gamestate===end){
    
    monke.velocityY = 0;
     monke.velocityX = 0;
    
     obstacleGroup.velocityY = 0;
     obstacleGroup.velocityX = 0;
    
  }
  
  drawSprites();
  
}


  function spawnBanana () {
  
  if(frameCount % 60===0) {
  
  var banana = createSprite (600,100,10,10);
    
  banana.addImage(bananaImage);
    
  banana.y = Math.round (random(200,350))
  banana.scale = 0.1;
  banana.velocityX=-3; 
    
  banana.lifetime = 200;
  
  banana.depth=monke.depth;
  banana.depth=monke.depth+1      
    
  bananaGroup.add(banana);
  }
    
  
}

  function spawnRock () {
  
  if(frameCount % 240===0) {
  
  var obstacle = createSprite (600,100,10,10);
    
  obstacle.addImage(obstacleImage);
    
  obstacle.y = 375;
  obstacle.scale = 0.1;
  obstacle.velocityX=-3; 
    
  obstacle.lifetime = 200;     
    
  obstacleGroup.add(obstacle);
  }
  }
  