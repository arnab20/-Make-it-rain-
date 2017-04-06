var xPositions = [];
var yPositions = [];
var colors = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    for(var i = 0; i < 20 ; i++) {
        xPositions.push(random(0,window.outerWidth));
        yPositions.push(random(0,window.outerHeight));
        colors.push(color(random(0,255),random(0,255),random(0,255)));
    }
}

function draw() {
  background(204, 247, 255);
    
    mouseClicked = function() {
       xPositions.push(mouseX);
       yPositions.push(mouseY);
       colors.push(color(random(0,255),random(0,255),random(0,255)));
       
    };
       
    for (var i = 0; i < xPositions.length; i++) {
         noStroke();
         fill(colors[i]);
         ellipse(xPositions[i], yPositions[i], 50, 50);
         yPositions[i] += 5;
        
        if(yPositions[i] > window.outerHeight) {
          yPositions[i]= 0;
          xPositions[i] = random(0,window.outerWidth);
        } 
    }
    
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
