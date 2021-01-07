import Matter from "matter-js";
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const bufferGroup = Matter.Body.nextGroup(true);

//bumpers
export const bumpers = function bumpers() {
  let bumper1 = Bodies.circle(255, 125, 30, { isStatic: true });
  let bumper2 = Bodies.circle(180, 200, 30, { isStatic: true });
  let bumper3 = Bodies.circle(325, 200, 30, { isStatic: true });
  let bumper4 = Bodies.circle(255, 270, 30, { isStatic: true });
  return [bumper1, bumper2, bumper3, bumper4];
};

//walls and lanes
export const walls = function walls() {
  let leftWall = Bodies.rectangle(0, 325, 650, 20, {
    angle: Math.PI / 2,
    isStatic: true,
  });

  let rightWall = Bodies.rectangle(550, 325, 650, 20, {
    angle: Math.PI / 2,
    isStatic: true,
  });
  let ceiling = Bodies.rectangle(275, 0, 550, 20, { isStatic: true });
  let plungeLane = Bodies.rectangle(490, 455, 400, 20, {
    angle: Math.PI / 2,
    chamfer: { radius: 10 },
    isStatic: true,
  });

  let baseLeft = Bodies.rectangle(90, 560, 220, 20, {
    angle: Math.PI / 6,
    chamfer: { radius: 10 },
    isStatic: true,
  });

  let baseRight = Bodies.rectangle(400, 560, 220, 20, {
    angle: (5 * Math.PI) / 6,
    chamfer: { radius: 10 },
    isStatic: true,
  });

  let leftDiag = Bodies.rectangle(100, 0, 350, 200, {
    angle: (5 * Math.PI) / 6,
    chamfer: { radius: 10 },
    isStatic: true,
  });

  let rightDiag = Bodies.rectangle(420, 0, 400, 200, {
    angle: Math.PI / 6,
    chamfer: { radius: 10 },
    isStatic: true,
  });

  let leftFlipperWallSlant = Bodies.rectangle(110, 490, 110, 20, {
    angle: Math.PI / 6,
    chamfer: { radius: 10 },
    isStatic: true,
  });
  let leftFlipperWallVert = Bodies.rectangle(63, 415, 120, 20, {
    angle: Math.PI / 2,
    chamfer: { radius: 10 },
    isStatic: true,
  });

  let leftThorn = Bodies.trapezoid(10, 280, 50, 50, 0.5, {
    isStatic: true,
    angle: Math.PI / 2,
    chamfer: { radius: 10 },
  });

  let rightFlipperWallSlant = Bodies.rectangle(385, 495, 120, 20, {
    angle: (5 * Math.PI) / 6,
    chamfer: { radius: 10 },
    isStatic: true,
  });
  let rightFlipperWallVert = Bodies.rectangle(435, 415, 120, 20, {
    angle: Math.PI / 2,
    chamfer: { radius: 10 },
    isStatic: true,
  });

  let rightThorn = Bodies.trapezoid(475, 280, 50, 50, 0.5, {
    isStatic: true,
    angle: (3 * Math.PI) / 2,
    chamfer: { radius: 10 },
  });
  return [
    rightThorn,
    rightFlipperWallVert,
   rightFlipperWallSlant,
    leftThorn,
     leftFlipperWallVert,
    leftFlipperWallSlant,
    rightDiag,
    leftDiag,
    baseRight,
    baseLeft,
    ceiling,
    plungeLane,
    rightWall,
    leftWall,
  ];
};

//flippers
export const flippers = function flippers() {
  let leftFlipper = Bodies.trapezoid(190, 540, 25, 80, 0.25, {
    label: "leftFlipper",
    angle: (2 * Math.PI) / 3,
    chamfer: { radius: 10 },
    isSleeping: false,
  });
  let rightFlipper = Bodies.trapezoid(300, 540, 25, 80, 0.25, {
    label: "rightFlipper",
    angle: (4 * Math.PI) / 3,
    chamfer: { radius: 10 },
    isSleeping: false,
  });
  let rightHinge = Bodies.circle(318, 529, 5, {
    isStatic: true,
    render: { fillStyle: "orange" },
  });

  let leftHinge = Bodies.circle(172, 529, 5, {
    isStatic: true,
    render: { fillStyle: "green" },
  });

  let leftConstraint = Constraint.create({
    bodyA: leftFlipper,
    bodyB: leftHinge,
    pointA: { x: -19.6, y: -11 },
    stiffness: 0,
    length: 0,
      render: { visable: false },
  });
  let rightConstraint = Constraint.create({
    bodyA: rightFlipper,
    bodyB: rightHinge,
    pointA: { x: 19.6, y: -11 },
    stiffness: 0,
    length: 0,
      render: { visable: false },
  });

  let leftBlock = Bodies.rectangle(200, 550, 30, 20, {
    
    isStatic: false,
    render: { visible: false },
  });

  let rightBlock = Bodies.rectangle(290, 550, 30, 20, {
    isStatic: false,
      render: { visible: false },
  });

  let leftWeight = Constraint.create({
    bodyA: leftFlipper,
    bodyB: leftBlock,
    pointA: { x: 13, y: 11 },
    stiffness: 1,
    length: 1,
    render: { visible: false },
  });

  let rightWeight = Constraint.create({
    bodyA: rightFlipper,
    bodyB: rightBlock,
    pointA: { x: -13, y: 11 },
    stiffness: 1,
    length: 1,
     render: { visible: false },
  });

   let leftBuffer = Bodies.circle(190, 605, 50, {
     label: "buffer",
     isStatic: true,
     render: { visible: false },
   });
   let leftTopBuffer = Bodies.circle(190, 450, 50, {
     label: "buffer",
     isStatic: true,
     render: { visible: false },
   });
   let rightBuffer = Bodies.circle(300, 605, 50, {
     label: "buffer",
     isStatic: true,
     render: { visible: false },
   });
   let rightTopBuffer = Bodies.circle(300, 450, 50, {
     label: "buffer",
     isStatic: true,
     render: { visible: false },
   });


  return [
    leftFlipper,
    rightFlipper,
    leftHinge,
    rightHinge,
    leftConstraint,
    rightConstraint,
    leftBlock,
    rightBlock,
     leftWeight,
    rightWeight,
    leftBuffer,
    leftTopBuffer,
    rightBuffer,
    rightTopBuffer
  ];
};

//slings
export const slingShot = function slingShot() {
  let leftSlingShot = Bodies.trapezoid(150, 400, 40, 100, 0.5, {
    isStatic: true,
    angle: 5.58505,
    chamfer: { radius: 10 },
  });
  let leftLaunchPad = Bodies.rectangle(155, 386, 5, 95, {
    label: "launchpad",
    isStatic: true,
    angle: 5.47805,
    chamfer: { radius: 2 },
  });
  let rightSlingShot = Bodies.trapezoid(340, 400, 40, 100, 0.5, {
    isStatic: true,
    angle: 0.698132,
    chamfer: { radius: 10 },
  });
  let rightLauchPad = Bodies.rectangle(335, 386, 5, 95, {
    label: "launchpad",
    isStatic: true,
    angle: 0.810132,
    chamfer: { radius: 2 },
  });

  return [leftSlingShot, rightSlingShot, leftLaunchPad, rightLauchPad];
};
