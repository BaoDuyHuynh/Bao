var timesClicked = 0; //timer
var x = 0;//index x
var y = 0;//index y
var value = 0; //color

var randomX = Math.floor(Math.random()*4)
var randomY = Math.floor(Math.random()*4)

function setup() {
    createCanvas(400,400);
    for(var row = 0; row < 4; row++){ //getting the row
        for( var col = 0; col < 4; col++){
            fill(255, 204, 0); //filling the boxes with the color
            rect( x, y, 100, 100);
            y+= 100;
        }
        y = 0;
        x+= 100;
    }
    
}

function mousePressed() {
    if (mouseIsPressed)
    timesClicked += 1;
}

function mouseClicked() {
// turn the boxes that is not the ship into black
    if (mouseX < 100 && mouseY < 100){
        x = 0;
        y = 0;
        fill(value);
        rect( 0, 0, 100, 100);
    } else if (mouseX > 100 && mouseY < 100){
        x = 1;
        y = 0;  
       fill(value);
        rect( 100, 0, 100, 100);
    } else if (mouseX < 100 && mouseY > 100){
        x = 0;
        y = 1;
        fill(value);
        rect( 0, 100, 100, 100);
    } else if (mouseX > 100 && mouseY > 100){
        x = 1;
        y = 1;
        fill(value);
        rect( 100, 100, 100, 100);
    } else if (mouseX < 200 && mouseY < 200){
        x = 0;
        y = 0;
        fill(value);
        rect( 0, 0, 100, 100);
    } else if (mouseX > 200 && mouseY < 200){
        x = 1;
        y = 0;  
       fill(value);
        rect( 200, 0, 100, 100);
    } else if (mouseX < 200 && mouseY > 200){
        x = 0;
        y = 1;
        fill(value);
        rect( 0, 200, 100, 100);
    } else if (mouseX > 200 && mouseY > 200){
        x = 1;
        y = 1;
        fill(value);
        rect( 200, 200, 100, 100);
    } else if (mouseX < 300 && mouseY < 300){
        x = 0;
        y = 0;
        fill(value);
        rect( 0, 0, 100, 100);
    } else if (mouseX > 300 && mouseY < 300){
        x = 1;
        y = 0;  
       fill(value);
        rect( 300, 0, 100, 100);
    } else if (mouseX < 300 && mouseY > 300){
        x = 0;
        y = 1;
        fill(value);
        rect( 0, 300, 100, 100);
    } else if (mouseX > 300 && mouseY > 300){
        x = 1;
        y = 1;
        fill(value);
        rect( 300, 300, 100, 100);
    }
//turns the box with the ship into another color
    if (x == randomX && y == randomY){
        fill('hsl(160, 100%, 50%)');
        rect(randomX * 100, randomY* 100, 100,100);
        alert("Win! You clicked " + timesClicked + " times.")
    }
}