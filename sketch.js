function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowsHeight);
  angleMode(DEGREES);
}

function draw() {
  background(190);
  color("springgreen");
  noStroke();
  ellipse(mouseX,mouseY,25);// put drawing code here
}
