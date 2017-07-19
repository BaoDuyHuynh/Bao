var x = 0; // X axis 
var y = 0; // Y axis
// Just called once and done
function setup () {
    createCanvas(windowWidth,windowHeight);
}

// Draw runs over and over again
function draw() {
    background('purple');
    fill(200, 120, 3);
    ellipse(x,y,50,50)
    x = x + 10;
    y = y + 10;
    if (x > width){ 
        X = 0; 
    }

}