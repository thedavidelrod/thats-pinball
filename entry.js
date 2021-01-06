document.addEventListener("DOMContentLoaded", function () {
  // module aliases
  var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

  // create an engine
  var engine = Engine.create();

  var ball = Bodies.circle(200, 0, 15, 80); //ball
  let bumper1 = Bodies.circle(255, 125, 30, { isStatic: true }); //bumper 2
  let bumper2 = Bodies.circle(180, 200, 30, { isStatic: true });
  let bumper3 = Bodies.circle(325, 200, 30, { isStatic: true });
  let bumper4 = Bodies.circle(255, 270, 30, { isStatic: true });

  let rightWall = Bodies.rectangle(0, 325, 650, 20, {
    angle: Math.PI / 2,
    isStatic: true,
  });
  let leftWall = Bodies.rectangle(550, 325, 650, 20, {
    angle: Math.PI / 2,
    isStatic: true,
  });
  let plungeLane = Bodies.rectangle(465, 455, 400, 20, {
    angle: Math.PI / 2,
    chamfer: { radius: 10 },
    isStatic: true,
  });
  let leftFlipperWallSlant = Bodies.rectangle(110, 490, 110, 20, {
    angle: Math.PI / 6,
    chamfer: { radius: 10 },
    isStatic: true,
  });
  let leftFlipperWallVert = Bodies.rectangle(58, 385, 180, 20, {
    angle: Math.PI / 2,
    chamfer: { radius: 10 },
    isStatic: true,
  });
  let leftFlipper = Bodies.rectangle(195, 545, 100, 20, {
    angle: Math.PI / 6,
    chamfer: { radius: 10 },
    isStatic: true,
  });
  let rightFlipperWallSlant = Bodies.rectangle(370, 490, 110, 20, {
    angle: (5 * Math.PI) / 6,
    chamfer: { radius: 10 },
    isStatic: true,
  });
  let rightFlipperWallVert = Bodies.rectangle(410, 385, 180, 20, {
    angle: Math.PI / 2,
    chamfer: { radius: 10 },
    isStatic: true,
  });
  let rightFlipper = Bodies.rectangle(300, 545, 100, 20, {
    angle: (5 * Math.PI) / 6,
    chamfer: { radius: 10 },
    isStatic: true,
  });
  let ceiling = Bodies.rectangle(275, 0, 550, 20, { isStatic: true });
  let baseLeft = Bodies.rectangle(100, 550, 280, 20, {
    angle: Math.PI / 6,
    chamfer: { radius: 10 },
    isStatic: true,
  });
  let baseRight = Bodies.rectangle(365, 565, 230, 20, {
    angle: (5 * Math.PI) / 6,
    chamfer: { radius: 10 },
    isStatic: true,
  });

  // add all of the bodies to the world
  World.add(engine.world, [
    ball,
    bumper1,
    bumper2,
    bumper3,
    bumper4,
    leftFlipper,
    leftFlipperWallSlant,
    leftFlipperWallVert,
    rightFlipper,
    rightFlipperWallSlant,
    rightFlipperWallVert,
      baseLeft,
      baseRight,
    rightWall,
    leftWall,
    plungeLane,
    ceiling,

  ]);

  // create a renderer
  let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 550,
      height: 650,
      wireframes: false,
    },
  });

  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);
});
