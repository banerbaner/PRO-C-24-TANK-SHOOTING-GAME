const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width / 2, height + 10, width, 40, 100);
    cannon = new Cannon(120, 575, 200, 30,300,30);
     

}

function draw() {
    background(220);
    Engine.update(engine);

    cannon.display();
    ground.display();
    
}