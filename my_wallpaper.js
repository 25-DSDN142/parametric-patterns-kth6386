//your parameter variables go here!

let midX = 100;
let midY = 100;


let numPetals = 8;
let innerRadius = 10; 
let outerRadius = 50; 

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

  //outer turquoise rotating circle
  fill('#2a9d8f');
  ellipse(0, outerRadius, 20, 40);

  //inner orange rotating circle
  fill('#e76f51');
  ellipse(0, innerRadius, 10, 20);


  fill('red');
curve(
  -150 - 50, 275 - 60,   // control point 1
   50  - 50,  60 - 60,   // start point
   50  - 50,  60 - 60,   // end point (same as start for this curve)
  250 - 50, 275 - 60     // control point 2
);






  pop();

}

  // Center Circle
  fill('#264653'); // deep cyan circle
  noStroke();
  circle(0, 0, innerRadius * 1.5);

  // Yellow circle stroke
  noFill();
  stroke('#e9c46a'); // Yellow
  strokeWeight(2);
  circle(0, 0, outerRadius * 2);






}