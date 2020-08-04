var angle;
var slider;

function setup() {
  createCanvas(800, 800);
  slider = createSlider(0,PI/2,PI/6,PI/12);
}

function draw() {
  angle = slider.value();
  background(51);
  stroke(255);
  translate(width / 2, height);
  branch(200);
}

function branch(len){
  if(len>4){
    push();
    line(0,0,0,-len);
    translate(0,-len);
    rotate(angle);
    branch(len*0.67);
    pop();
    push();
    line(0,0,0,-len);
    translate(0,-len);
    rotate(-angle);
    branch(len*0.67);
    pop();
  }
  else{
    fill(255,0,0);
    noStroke();
    ellipse(0,0,5,5);
  }
}