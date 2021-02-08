var hr, min, sec;
var scAngle, minAngle, hrAngle;
function setup() {
  createCanvas(800,400);
hr = hour();
min = minute();
sec = second();
}

function draw() {
  background(255,255,255);
  angleMode(DEGREES);
  scAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 24, 0, 360);
  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(100, 100, 100, 0);
  pop();
  push();
  rotate(minAngle);
  stroke("blue");
  strokeWeight(7);
  line(100, 100, 100, 0);
  pop();
  push();
  rotate(hrAngle);
  stroke("green");
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();
  strokeWeight(10); 
  noFill();
  //Seconds 
  stroke(255,0,0); 
  arc(0,0,300,300,0,scAngle); 
  //Minutes 
  stroke(0,255,0); 
  arc(0,0,280,280,0,minAngle); 
  //Hour 
  stroke(0,0,255); 
  arc(0,0,260,260,0,hrAngle);
  drawSprites();
}