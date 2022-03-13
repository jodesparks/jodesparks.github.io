var hue;

function setup() {
      hue = 30
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
    hue+=0.5;
        noStroke();
    colorMode(HSB, 360);
      fill(hue, 155 , 360, ((hue/360) * 255) + 50);
      background(hue-180, 155, 360)
      circle(mouseX, mouseY, 150);
    }
    


      

