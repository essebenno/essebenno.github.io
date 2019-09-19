function preload(){
  // put preload code here
}

let circleRadius = 200;
let scalar = 200;
//let myAngle = frameCount + 90;

function setup() {
  createCanvas(windowWidth,windowHeight);
background(10);

  angleMode(DEGREES);

  frameRate(12);
}

function draw() {
  //background(220);
  let myAngle1 = frameCount * 3;

  //Line
  translate(width/2, height/2);

  strokeWeight(1);
  stroke(lerpColor(color("deeppink"),color("yellow"),frameCount/120));

  noFill();
  ellipse(scalar * cos(myAngle1),scalar * sin(myAngle1), scalar * cos(myAngle1));
  ellipse(scalar * cos(myAngle1),scalar * sin(myAngle1), scalar * sin(myAngle1));

  line(0+circleRadius,0, scalar * cos(myAngle1), scalar * sin(myAngle1));

  if (frameCount == 120){
    noLoop();
  }
}
