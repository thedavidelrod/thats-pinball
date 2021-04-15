# Thats-Pinball
![logo](https://github.com/thedavidelrod/thats-pinball/blob/master/app/assets/style/images/128edd5de81fc55d.png)

That's Pinball! is my take on my favorite thing in the world, pinball! The game was written in JavaScript while utilizing Matter.JS to handle physics and shape rendering. 

## Technology Overview

The game is built using Matter.JS to render shapes and handle ball and flipper physics. The game is built on Javascript and rendered using HTML5 canvas. 


## Flippers
![flippers](https://github.com/thedavidelrod/thats-pinball/blob/master/app/assets/style/images/shapes.png)

Flipper control proved to be the most difficult part of this project. Flippers angular velocity are set on on a keyDown event. The flippers would fire repeatedly
if the key was held down. This was fixed with a boolean that is toggled by flipper movement. Invisible shapes were added to hold the flippers up and restrict them 
from over rotating. 


## Ball Monitoring

One of the significant challenges that I faced in this project was managing multiple asynchronous event listeners to keep track of the state of the pinball. It was 
the single threaded nature of JavaScript that made this a challenge. I ultimately solved this by appending the necessary functions onto a keyup event listener that 
I was already using to monitor key commands controlling paddle movement. By using a boolean variable along with my ball tracking method, I was able to invoke it 
just once per game, checking for ball position on an interval throughout the stint of that round.


```  
let keyCode = e.keyCode;
    if (keyCode === 37) {
      leftFlipped = false;
      leftFlipper.isSleeping = false;
    } else if (keyCode === 39) {
      rightFlipped = false;
      rightFlipper.isSleeping = false;
    }
    if (ballCount > 0) {
      launch();
      if (listening === false) {
        ballOut();
      }
    } else {
      newGame();
    }
  }
```
  The above code snippet ties the monitoring function (ballOut) to the key up listener.
  
```
  if (inPlay) {
    listening = true;
    let pinball = engine.world.bodies.filter(findPinball);
    let ballTracker = setInterval(function () {
      if (pinball[0].position.y > 650) {
        Matter.Composite.remove(engine.world, pinball);
        clearInterval(ballTracker);
        inPlay = false;
        ballCount -= 1;
        let displayBallCount = document.getElementById("ball-count");
        displayBallCount.classList.add("lose-ball");
        displayBallCount.innerHTML = ballCount;
        displayBallCount.addEventListener("transitionend", removeTransition);
        listening = false;
      } else if (pinball[0].position.x < 490 && plungeOpen === false) {
        closePlunge();
      } 
```
And here I fire my setInterval just once, thanks to a boolean variable (listening).



     
