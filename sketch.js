function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(190);
  fill("springgreen");
  noStroke();
  ellipse(mouseX,mouseY,25);
}
