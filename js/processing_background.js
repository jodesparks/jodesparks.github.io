var hue;

function setup() {
    hue = 0
    background_hue = 180
    // Create canvas of given size
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');

    // Set background color
    background("white");
} 

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function heart(x, y, size) {
    beginShape();
    vertex(x, y);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    endShape(CLOSE);
  }
  
  function draw() {
   
    noStroke();
    colorMode(HSB, 360);
    hue+=0.5;
    background_hue += 0.5;
      if (hue == 360) {
        hue = 0;
        }
        if (background_hue > 360) {
          background_hue = 0;
          print("switch")
        }
      
      fill(hue, 155 , 360);
      background(background_hue, 155, 360)
      circle(mouseX, mouseY, 150);
      print(hue, background_hue)
    }
    


      

