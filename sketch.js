const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var drop;
var maxDrops = 100;
var drops = [];
var walkingAnimation;
var thunderImage1, thunderImage2, thunderImage3, thunderImage4;
var walkingDude;

function preload(){
    walkingAnimation = loadAnimation("proc41images/images/Walking Frame/walking_1.png", "proc41images/images/Walking Frame/walking_2.png", "proc41images/images/Walking Frame/walking_3.png", "proc41images/images/Walking Frame/walking_4.png", "proc41images/images/Walking Frame/walking_5.png", "proc41images/images/Walking Frame/walking_6.png", "proc41images/images/Walking Frame/walking_7.png", "proc41images/images/Walking Frame/walking_8.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(400, 800);

    for (var i = 0; i < maxDrops; i++) {
        drops.push(new Drops(random(0, 400), random(0, 400)));
    }

    weirdDude = createSprite(200, 600);
    weirdDude.addAnimation("walking", walkingAnimation);
    weirdDude.scale = 0.5

}

function draw(){
    background("black");

    Engine.update(engine);


    for (var i = 0; i < maxDrops; i++) {
        drops[i].display();
        drops[i].update();
    }

    drawSprites();
}   

