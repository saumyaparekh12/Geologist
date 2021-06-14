const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron = new Iron(800, 400, 80, 80)
    rubber = new Rubber(600, 500, 20, 20)
    stone = new Stone(400, 400, 30, 50)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    iron.display();
    plane.display();
    hammer.display();
    stone.display();
    rubber.display();
 
}