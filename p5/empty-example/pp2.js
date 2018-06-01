// Aysha Muzaffar and Sophia Stoyanova
// Computer Science Final Project

var ball = {
  x: 50,
  y: 20,
  diam: 40,
  dx: 5,
  dy: 5,
};

var paddleL;
var paddleR;
var gameOver;
var scoreElem1;
var scoreElem2;

// Nikhil helped with this

var player1score = 0;
var player2score = 0;
var score1 = 0;
var score2 = 0;

var dx = 5;
var dy = 5;
var x;
var y;
var paddleSpeed = 12;

function preload(){
  soundFormats('mp3', 'ogg');
  mySound = loadSound('ping.mp3');
}

function setup (){
    createCanvas(windowWidth, windowHeight);

    paddleL = {
      x: 10,
      y: 100,
      w: 20,
      h: 150,
    };

    paddleR = {
      x: width - 50,
      y: 100,
      w: 20,
      h: 150,
    };
    fill(255);

  scoreElem1 = createDiv('Score = ' + player1score);
  scoreElem2 = createDiv('Score = '+ player2score);

  scoreElem1.position(20, 20);
  scoreElem1.id = 'score';
  scoreElem1.style('color', 'white');

  scoreElem2.position(1800, 20);
  scoreElem2.id = 'score';
  scoreElem2.style('color', 'white');
  // soundFormats('mp3', 'ogg');
  // mySound = loadSound('ping.mp3');
  mySound.play()

}

function draw(){
    background("skyblue");

    scoreElem1.html('Score = ' + player1score);
    scoreElem2.html('Score = ' + player2score);

    createBall();
    createLeftPaddle();
    createRightPaddle();
    bounce();
    // x = x + dx;
    // y = y + dy;

    stroke(255);
    line(1000, 3, 1000, 1000);
    checkBounds();
    // ball(x,y);

  if (player1score >= 5) {
    scoreElem1.html('YOU WIN!!! :D ')
    noLoop()
  }
  else {
    if(player2score >= 5){
    scoreElem2.html('YOU WIN!!! :D ')
    noLoop()
    }
  }

  //mySound = loadSound('enter sound file we are going to put here');

}

function createBall(){
    fill("lightgreen");
    ellipse( ball.x, ball.y, ball.diam, ball.diam);
    ball.x = ball.x + dx;
    ball.y = ball.y + dy;
}

function createLeftPaddle() {
    fill("pink");
    rect(paddleL.x, paddleL.y, paddleL.w, paddleL.h);

    if (keyIsDown(90) === true) { //move paddle down  (z)
      if (paddleL.y + paddleL.h < height - 5) {
        paddleL.y = paddleL.y + paddleSpeed;
      }
    }
    if (keyIsDown(65) === true) { //move paddle up  (a)
      if (paddleL.y > 5) {
        paddleL.y = paddleL.y - paddleSpeed;
      }
    }
    if (ball.x - 12.5 < paddleL.x + paddleL.w && ball.y + 12.5 > paddleL.y && ball.y + 12.5 < paddleL.y + paddleL.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      dx = dx * -1;
      ball.x = ball.x + dx;
    }
}

function createRightPaddle(){
  fill("pink");
  rect(paddleR.x, paddleR.y, paddleR.w, paddleR.h);
   if (ball.x + 12.5 > paddleR.x && ball.y + 12.5 > paddleR.y && ball.y + 12.5 < paddleR.y + paddleR.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      dx = dx * -1;
      ball.x = ball.x + dx;

    }

    else if (ball.y + 12.5 > paddleR.y && ball.y < paddleR.y + paddleR.y + paddleR.h && ball.x + 12.5 > paddleR.x && ball.x < paddleR.x + paddleR.x && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      dy = dy * -1;
      ball.y = ball.y + dy;
    }

    else if (ball.y + 12.5 < paddleR.y + paddleR.h && ball.y > paddleR.y && ball.x > paddleR.x && ball.x < paddleR.x + paddleR.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      dy = dy * -1;
      ball.y = ball.y + dy;
    }

     if (keyIsDown(77) === true) { //move paddle down   (m)
      if (paddleR.y + paddleR.h < height - 5) {
        paddleR.y = paddleR.y + paddleSpeed;
      }
    }

    if (keyIsDown(75) === true) { //move paddle up   (k)
      if (paddleR.y > 5) {
        paddleR.y = paddleR.y - paddleSpeed;
      }
    }
}

function bounce(){
    if (ball.y + 12.5 > height || ball.y <12.5 && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height){
       dy = dy * -1;
       ball.y = ball.y + dy;
  }
}

function checkBounds(){
  if(ball.x < 0){
    player1score++;
    console.log(player1score);
    ball.x = 948;
    ball.y = 90;
    return;
  }

else if (ball.x > width){
   player2score++;
   console.log(player2score);
   ball.x = 948;
   ball.y = 90;
  }
}