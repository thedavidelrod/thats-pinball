 import Matter from "matter-js";
 const Bodies = Matter.Bodies;

export const ball = function ball() {
let playBall = Bodies.circle(200, 0, 15, 80); //ball
return playBall
}


