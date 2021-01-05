import Matter from "Matter-js"

const Bodies = Matter.Bodies

const COLORS = {BUMPERS: "#DFFF00" }

export const bumpers = function bumpers() {
    let bumper1 = Bodies.circle(235, 120, 30, {label: 'bumper', isStatic: true, render: {fillStyle: COLORS.BUMPERS} });
    let bumper2 = Bodies.circle(146, 200, 30, {label: 'bumper', isStatic: true, render: {fillStyle: COLORS.BUMPERS}});
    return [bumper1, bumper2]
}


   



