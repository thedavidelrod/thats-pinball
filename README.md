# Thats-Pinball
![logo](https://github.com/thedavidelrod/thats-pinball/blob/master/app/assets/style/images/128edd5de81fc55d.png)

That's Pinball! is my take on my favorite thing in the world, pinball! The game was written in JavaScript while utilizing Matter.JS to handle physics and shape rendering. 

## Technology Overview

The game is built using Matter.JS to render shapes and handle ball and flipper physics. The game is built on Javascript and rendered using HTML5 canvas. 


## Flippers

Flipper control proved to be the most difficult part of this project. Flippers angular velocity are set on on a keyDown event. The flippers would fire repeatedly
if the key was held down. This was fixed with a boolean that is toggled by flipper movement. Invisible shapes were added to hold the flippers up and restrict them 
from over rotating. 


## Playfield 

![playfield](https://github.com/thedavidelrod/thats-pinball/blob/master/app/assets/style/images/playfield.png "playfield")

![flippers](https://github.com/thedavidelrod/thats-pinball/blob/master/app/assets/style/images/shapes.png "flippers")


