// import playField from './app/assets/javascripts/playfield'
 import Matter from "matter-js";

import {
  bumpers,
  walls,
  flippers
  
} from "./app/assets/javascripts/playfield";


var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;




let engine;
let world;

function setup() {
  engine = Engine.create();

  let render = Render.create({
    canvas: document.getElementById("playfield"),

    element: document.body,
    engine: engine,
    options: {
      width: 550,
      height: 650,
      wireframes: false,
    }
  });

  world = engine.world;
  const playfield = [bumpers(), walls(), flippers()];
 
  World.add(engine.world, playfield.reduce((prev, curr) => {
    return prev.concat(curr)
  }))

Engine.run(engine);
Render.run(render)
}

document.addEventListener('DOMContentLoaded', function() {
  setup()
})