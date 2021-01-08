import Matter from "matter-js";

import {
  bumpers,
  walls,
  flippers,
  slingShot,
} from "./app/assets/javascripts/playfield";
import { ball } from "./app/assets/javascripts/ball";

var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint;

let engine;
let world;
let leftFlipper;
let rightFlipper;
let leftFlipped = false;
let rightFlipped = false;
const bufferGroup = Matter.Body.nextGroup(false);
let score;
let inPlay;
let ballCount;








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
    },
  });

  world = engine.world;
    world.gravity.y = 0.8;

  const playfield = [bumpers(), walls(), flippers(), ball(), slingShot()];

  World.add(
    engine.world,
    playfield.reduce((prev, curr) => {
      return prev.concat(curr);
    })
  );

  leftFlipper = engine.world.bodies.filter(
    (body) => body.label === "leftFlipper"
  )[0];
  rightFlipper = engine.world.bodies.filter(
    (body) => body.label === "rightFlipper"
  )[0];
let buffers = engine.world.bodies.filter((body) => body.label === "buffer");
for (let buffer of buffers) {
  buffer.collisionFilter = { group: bufferGroup };
  // buffer.collisionFilter = {group: flipperGroup}
}
  leftFlipper.collisionFilter = {
    group: bufferGroup,
    category: 4294967295,
    mask: 2,
  };
  rightFlipper.collisionFilter = {
    group: bufferGroup,
    category: 4294967295,
    mask: 2,
  };  
    inPlay = false;


  Engine.run(engine);
  Render.run(render);
}

function fireFlipper(e) {
  let keyCode = e.keyCode;
  if (
    keyCode === 37 &&
    leftFlipper.isSleeping === false &&
    leftFlipped === false
  ) {
    leftFlipped = true;
    Matter.Body.setAngularVelocity(leftFlipper, -1);
  } else if (
    keyCode === 39 &&
    rightFlipper.isSleeping === false &&
    rightFlipped === false
  ) {
    rightFlipped = true;
    Matter.Body.setAngularVelocity(rightFlipper, 1);
  }
}

function flipperCommand() {
  document.addEventListener("keydown", function keyDown(e) {
    fireFlipper(e);
  });
  document.addEventListener("keyup", function keyUp(e) {
    releaseFlipper(e);
  });
}

function releaseFlipper(e) {
  let keyCode = e.keyCode;
  if (keyCode === 37) {
    leftFlipped = false;
    leftFlipper.isSleeping = false;
  } else if (keyCode === 39) {
    rightFlipped = false;
    rightFlipper.isSleeping = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setup();
  flipperCommand();
});
