var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
function preload() {
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
trex_collided = loadImage("trex_collided.png");
groundImage = loadImage("ground2.png")
}
function setup() {
createCanvas(600, 200);
//create a trex sprite
trex = createSprite(40,1,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -7;
ground2=createSprite(200,190,400,15)
ground2.visible=false

add();


}
function draw() {
background(220);
//jump when the space button is pressed
if (keyDown("space")&& trex.y>150) {
trex.velocityY = -10;
}
trex.velocityY = trex.velocityY + 0.8
if (ground.x < 0) {
ground.x = ground.width / 2;
}
trex.collide(ground2);
drawSprites();
}

//functions --finding sum of 3 numbers

var a=[10,20,30,40,60,20,60,80,22,55];
console.log(a);

function add(){
var sum=0;
for(var i=0 ; i=a.length ;i=i+1 ){
sum = sum + a[i];
}

console.log(sum);

}


 


