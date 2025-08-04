//your parameter variables go here!

let midX = 100;
let midY = 100;


let numPetals = 5;
let innerRadius = 10; 
let outerRadius = 50; 
let partyMode = false; 

//if //requirement

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);  //DEVELOP_GLYPH
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;


  angleMode(DEGREES);
  //noLoop(); //makes the draw fuction run once

}

function wallpaper_background() {
  background(240, 230, 210); //light orange (neutral colour)
}



function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  translate(midX, midY); //makes the origin in the middle of the canvas
  drawDancheongPattern();


}


function drawDancheongPattern() {

  for (let i = 0; i < numPetals; i++) { //i starts from 0, i stops at numPetals, i++ is i = i + 1;(increase by 1)
  let angle = 360 / numPetals * i;

  push();

  rotate(angle);

  // Green Petal
  fill('#6ca84f'); // green
  stroke(0);
  strokeWeight(2);

  beginShape();
  vertex(0, 0);
  bezierVertex(0, 0, -55, -50, 0, -90);
  bezierVertex(0, -90, 55, -50, 0, 0);
  endShape(CLOSE);

  // Green inner Petal
  fill('#425a3b'); // darker green
  stroke(0);
  strokeWeight(2);

  beginShape();
  vertex(0, 0);
  bezierVertex(0, 0, -45, -50, 0, -75);
  bezierVertex(0, -75, 45, -50, 0, 0);
  endShape(CLOSE);











  
  // Red petal
  fill('#c72a2c'); // red
  stroke(0);
  strokeWeight(2);

  beginShape();
  vertex(0, 0);
  bezierVertex(0, 0, -35, -50, 0, -60);
  bezierVertex(0, -60, 35, -50, 0, 0);
  endShape(CLOSE);


  // Red inner petal
  fill('#f9c5ab'); // peach
  stroke(0);
  strokeWeight(2);

  beginShape();
  vertex(0, 0);
  bezierVertex(0, 0, -15, -35, 0, -40);
  bezierVertex(0, -40, 15, -35, 0, 0);
  endShape(CLOSE);

  // Red inner petal 2
  fill('black');
  stroke(0);
  strokeWeight(2);

  beginShape();
  vertex(0, 0);
  bezierVertex(0, 0, -5, -25, 0, -30);
  bezierVertex(0, -30, 5, -25, 0, 0);
  endShape(CLOSE);































  pop();

}

  // Center Outer Circle
  fill('#f1931b'); 
  noStroke();
  circle(0, 0, innerRadius * 4.0);
  
  // Center Inner Circle
  fill('#f7d2c1'); 
  noStroke();
  circle(0, 0, innerRadius * 2.0);
  
  // 재미있는 효과: 꽃잎이 8개 이상일 때만 무지개 원과 별 추가
  if (numPetals > 7) {
    partyMode = true;
  // 무지개 원
  let rainbowColors = ['#e74c3c','#f1c40f','#2ecc71','#3498db','#9b59b6','#f39c12','#1abc9c'];
  for (let r = 7; r >= 1; r--) {
  noStroke();
  fill(rainbowColors[rainbowColors.length - r]);
  circle(0, 0, innerRadius * (1.5 + r));
  }
  // 회전하는 별
  push();
  rotate(frameCount % 360);
  fill('#fff700');
  stroke('#e67e22');
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < 10; i++) {
  let angle = i * 36;
  let rad = (i % 2 === 0) ? innerRadius * 1.5 : innerRadius * 0.7;
  vertex(rad * cos(angle), rad * sin(angle));
  }
  endShape(CLOSE);
  pop();
  }
  }