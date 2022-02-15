var hue;

function setup() {
      hue = 30
    // Create canvas of given size
    createCanvas(windowWidth, windowHeight);
    
      
    // Set background color
    background('pink');
      
    var div = createDiv('').size(windowWidth, windowHeight);
      
    div.html("Happy<br> Valentine's<br> ♥ Day ♥ ", true); 

    
    div.center();
    
    // Set font-size of text
    div.style('font-size', '150px');
    
    // Set font-color of text
    div.style('color', 'pink');

    div.style('text-align', 'center');
    div.style("font-family", 'Didot');

   // var div2 = createDiv('').size(windowWidth, windowHeight);

   // div2.html("click and drag around the page", true);
   // div2.position(200,500);
   // div2.style('font-size', '80px');
   // div2.style('color', 'white');
  
} 

function heart(x, y, size) {
    beginShape();
    vertex(x, y);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    endShape(CLOSE);
  }
  
  function draw() {

        if (hue > 320) {
            hue = 30;
        } else {
            hue+=0.5;
        }
        noStroke();
    colorMode(HSB, 360);
      fill(hue, 155 , 360, ((hue/360) * 255) + 50);
      heart(mouseX, mouseY, 150);
    
    }
    


      

