document.addEventListener("DOMContentLoaded", function () {
  // module aliases
  var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

  // create an engine
  var engine = Engine.create();

  // create a renderer
  var render = Render.create({
    element: document.body,
    engine: engine,
  });

  var ball = Bodies.circle(200, 0, 25, 80); //ball
  let bumper1 = Bodies.circle(255, 120, 30, { isStatic: true }); //bumper 2
  let bumper2 = Bodies.circle(180, 200, 30, { isStatic: true });
  let bumper3 = Bodies.circle(330, 200, 30, { isStatic: true });

  var ground = Bodies.rectangle(190, 610, 380, 60, { isStatic: true });
  var ground1 = Bodies.rectangle(620, 610, 380, 60, { isStatic: true });

  // add all of the bodies to the world
  World.add(engine.world, [ball, ground, ground1, bumper2, bumper1, bumper3]);

  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);
});
