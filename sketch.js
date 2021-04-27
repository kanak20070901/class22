const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var myball;
var myengine,myworld,myground;

function setup(){
   createCanvas(400,400);
 myengine=Engine.create();
 myworld=myengine.world;
 
 var ground_options={
   isStatic:true
 }
 myground=Bodies.rectangle(200,400,400,20,ground_options);
 World.add(myworld,myground);
  
 var ball_options={
  restitution:1
}

 myball=Bodies.circle(200,200,25,ball_options);
 World.add(myworld,myball);
}

function draw() {
  background("black");  
  Engine.update(myengine)
  rectMode(CENTER)
  rect(myground.position.x,myground.position.y,400,20);
  ellipse(RADIUS)
  ellipse(myball.position.x,myball.position.y,25,25)
}