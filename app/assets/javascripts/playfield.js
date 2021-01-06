 import Matter from "matter-js";
const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;


//round things like bumpers and the ball
const ball = Bodies.circle(200, 0, 15, 80); //ball

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

let rightFlipperWallSlant = Bodies.rectangle(395, 490, 110, 20, {
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
})
return [rightThorn, rightFlipperWallVert, rightFlipperWallSlant, leftThorn, leftFlipperWallVert, leftFlipperWallSlant, rightDiag, leftDiag, baseRight, baseLeft, ceiling, plungeLane, rightWall, leftWall]
}



//flippers
export const flippers = function flippers() {
let leftFlipper = Bodies.trapezoid(205, 545, 20, 70, 0.25, {
  angle: (2 * Math.PI) / 3,
  chamfer: { radius: 10 },
  isStatic: true,
});
let rightFlipper = Bodies.trapezoid(305, 545, 20, 70, 0.25, {
  angle: (4 * Math.PI) / 3,
  chamfer: { radius: 10 },
  isStatic: true,
})
let rightHinge = Bodies.circle(325, 533, 5, {
    isStatic: true,
    render: { fillStyle: "orange" },
  });

   let leftHinge = Bodies.circle(185, 533, 5, {
     isStatic: true,
     render: { fillStyle: "green" },
   });

return [leftFlipper, rightFlipper, leftHinge, rightHinge]
};



