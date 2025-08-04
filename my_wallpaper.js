//your parameter variables go here!

let midX = 100;
let midY = 100;


let numPetals = 5;
let innerRadius = 10; 
let outerRadius = 50; 

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  //pWallpaper.output_mode(GRID_WALLPAPER);  //DEVELOP_GLYPH
  
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;


  angleMode(DEGREES);


}

function wallpaper_background() {
  background('#aee3b5ff'); 
}



function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  translate(midX, midY); //makes the origin in the middle of the canvas
  drawDancheongPattern();


}


function drawDancheongPattern() {


  let wobble = 0;
  let colorShift = 0;
  if (numPetals > 7) {
    wobble = random(-15, 15);
    colorShift = random(0, 100);
  }

  for (let i = 0; i < numPetals; i++) { //i starts from 0, i stops at numPetals, i++ is i = i + 1;(increase by 1)
    let angle = 360 / numPetals * i + wobble;

    push();
    rotate(angle);

    // Green Petal
    fill(108 + colorShift, 168, 79); // green + colorShift 적용
    stroke(0);
    strokeWeight(2);

    beginShape();
    vertex(0, 0);
    bezierVertex(0, 0, -55, -50, 0, -90);
    bezierVertex(0, -90, 55, -50, 0, 0);
    endShape(CLOSE);

    // Green inner Petal
    fill(66 + colorShift, 90, 59); // darker green + colorShift 적용
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




  if (numPetals > 7) {
    noFill();
    stroke('#e9c46a'); // Yellow
    strokeWeight(2);
    circle(0, 0, outerRadius * 2);
  }


}