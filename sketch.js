const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var d1,d2,d3,d4;
var particle;
var plinko;

var particles = [];
var plinkos = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,780,480,30);

  d1 = new Divisions(20,565,20,400);
  d2 = new Divisions(180,565,20,400);
  d3 = new Divisions(330,565,20,400);
  d4 = new Divisions(470,565,20,400);

  particle = new Particle(200,200,10);

  // plinko = new Plinko(30,30,15);

  for (var i = 40  ; i < 500 ; i = i + 50){
    plinkos.push(new Plinko(i,55,15));
  }
  for (var i = 20  ; i < 500 ; i = i + 50){
    plinkos.push(new Plinko(i,150,15));
  }
  for (var i = 20  ; i < 500 ; i = i + 50){
    plinkos.push(new Plinko(i,250,15));
  }

  Engine.run(engine);  
 
}

function draw() {
  background(0);  

  ground.display();
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  // plinko.display();
  particle.display();

  for (var i = 0  ; i < plinkos.length ;i++ ){ 
    plinkos[i].display();
  }
  if(frameCount%30===0){
    particles.push( new Particle(random(width/2 + 300,width/2-200),10,10));
 } 
  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  } 

//  for (var k = 0; k < divisions.length; k++){
//   divisions[k].display;
// }
// if(frameCount%50===0){
//   divisions.push(new Divisions(random(width/2 + 300,width/2-200),20,10));
// } 

drawSprites();
}