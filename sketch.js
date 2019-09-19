function preload(){
  // put preload code here
}

let circleRadius = 200;

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

  frameRate(60);

}

function draw() {
  background(220);
  fill("springgreen");
  noStroke();
  ellipse(mouseX,mouseY,25);
  ellipse(0,0,25);

  strokeWeight(5)
  stroke("deeppink");
  noFill();
  ellipse(width/2,height/2,circleRadius*2);

  translate(width/2, height/2);
  rotate(frameCount);

  strokeWeight(5)
  stroke("deeppink");
  line(0+circleRadius,0, 0-circleRadius,0);

}
