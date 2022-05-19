var bg,bg2,form,system,code,security;
var score=0;
var pressed = false 

function preload() {
  bg = loadImage("hogwarts.webp");
  ron = loadImage("Ron.png")
  harry  = loadImage("harry.jpeg")
  trio = loadImage("pic-3.png")
}

function setup() {
  createCanvas(1500,709);
 // system = new System()
  //security = new Security()
form = new Form
}

function draw() {
  background(bg);
  fill("darkgrey")
  textSize(40)
  text("QUIZZLERS",600,40)
  
  

  if(score === 20 && pressed == true ) {
    background(ron)
    fill("black")
    textSize(40);
    text(" Better Luck NextTime ",250, 200);
  }

  /*if(score <50 && score >=80 && pressed == true) {
    clear()
    background(harry)
    fill("black")
    textSize(40);
    text(" Could do Better ",250, 200);
  }
*/
  drawSprites()
}