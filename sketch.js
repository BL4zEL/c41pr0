const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var rain = [];
var r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r14, r15,
    r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30 ;
var man;    

var thunder, thunderi,thunder1,thunder1i;

function preload() {
  thunderi = loadAnimation("ra1","ra4")
  thunder1i = loadAnimation("ra2","ra3")
}

function setup() {
var canvas =  createCanvas(400,600);
/*thunder =createSprite(75,75,50,50)
thunder.addAnimation("ra3",thunder1i)
thunder1 =createSprite(325,75,50,50)
thunder1.addAnimation("ra1",thunderi)*/
engine = Engine.create();
world = engine.world;

r1 = new Drop();
r2 = new Drop();
r3 = new Drop();
r4 = new Drop();
r5 = new Drop();
r6 = new Drop();
r7 = new Drop();
r8 = new Drop();
r8 = new Drop();
r9 = new Drop();
r10 = new Drop();
r11 = new Drop();
r12 = new Drop();
r13 = new Drop();
r14 = new Drop();
r15 = new Drop();
r16 = new Drop();
r17 = new Drop();
r18 = new Drop();
r19 = new Drop();
r20 = new Drop();
r21 = new Drop();
r22 = new Drop();
r23 = new Drop();
r24 = new Drop();
r25 = new Drop();
r26 = new Drop();
r27 = new Drop();
r28 = new Drop();
r29 = new Drop();
r30 = new Drop();

man = new Man();
}

function draw() {
  background(2,3,1);  
  Engine.update(engine);

  r1 .display();
  r2 .display();
  r3 .display();
  r4 .display();
  r5 .display();
  r6 .display();
  r7 .display();
  r8 .display();
  r8 .display();
  r9 .display();
  r10 .display();
  r11 .display();
  r12 .display();
  r13 .display();
  r14 .display();
  r15 .display();
  r16 .display();
  r17 .display();
  r18 .display();
  r19 .display();
  r20 .display();
  r21 .display();
  r22 .display();
  r23 .display();
  r24 .display();
  r25 .display();
  r26 .display();
  r27 .display();
  r28 .display();
  r29 .display();
  r30 .display();

  man.display();

stroke(210,105,30);
strokeWeight(12);
line(0, 595, 400, 595);





  drawSprites();
}