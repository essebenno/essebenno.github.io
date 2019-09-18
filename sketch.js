function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  fill("springgreen");
  noStroke();
  ellipse(mouseX,mouseY,25);
  strokeWeight(5)
  stroke("orangered");
  line(width/2+100,height/2,width/2-100,height/2);
  stroke("red");
  line(width/2+100,height/2+25,width/2-100,height/2+25);
  stroke("deeppink");
  line(width/2+100,height/2+50,width/2-100,height/2+50);
}
