 import Matter from "matter-js";
 const Bodies = Matter.Bodies;

export const ball = function ball() {
let playBall = Bodies.circle(100, 0, 15, 80); //ball
return playBall
}


