let x=0;
function setup() {
  createCanvas(760,400);
}

function draw() {
  //background(220);
  //fill(mouseX,mouseY,150); //顏色
  //circle(mouseX, mouseY, 20+5*sin(x)); //(x座標,y座標,直徑)
  if(mouseIsPressed){ //若壓下滑鼠，使用筆刷1
    stroke(mouseX,mouseY,150);
    line(mouseX, mouseY, 150, 25);
  }else{ //若放開滑鼠，使用筆刷2
    fill(mouseX,mouseY,150); //顏色
    circle(mouseX, mouseY, 20+5*sin(x)); //(x座標,y座標,直徑)
  }
  x=x+0.1;
}