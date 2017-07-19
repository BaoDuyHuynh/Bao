var score = 0; // the score
var selection = ["text", "I have failed", "I won", "a", "b", "c", "dot", "ASC", "I am the best"];
var textSample = selection[Math.floor(Math.random()*selection.length)];
var inp;
var r = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255)+155;
var b = Math.floor(Math.random()*255)+155;
//randon placement of either you win or lose
var randomX = Math.floor(Math.random()*350)+73;
var randomY = Math.floor(Math.random()*450)+15;
var randomZ = Math.floor(Math.random()*350)+86;
var randomA = Math.floor(Math.random()*450)+82;
var randomB = Math.floor(Math.random()*350)+93;
var randomC = Math.floor(Math.random()*450)+34;

function setup () {
    createCanvas(windowWidth,windowHeight);
    background(r,g,b);
// what to do
textSize(20);
text("Text Below: Beware to Not Mistype.",0, 15);
fill(0, 0, 0);
//the score 
textSize(20);
text("Score: ", 350, 15);
fill(0, 0, 0);

// the what you should tupe up box
textSize(20);
text("Type Up:", 0, 100)
fill(0, 0, 0);
//the text that is gonna be type 
textSize(30);
fill(50, 55, 100);
text(textSample, 10, 130);
// create the type here box
textSize(20);
fill(0, 0, 0);
text("Type Here:", 0, 350)

//Where user input
inp = createInput('', "text");
inp.position(0, 365);
inp.size(400,90);
}
function keyTyped() {
    if (keyCode === ENTER) {
        if (inp.value() === textSample) {
            score += 10; // add into the score 
            fill(244, 208, 63);
            textSize(30);
            text("You Won", randomY, randomX)

            fill(244, 208, 63);
            textSize(30);
            text("You Won", randomB, randomA)

            fill(244, 208, 63);
            textSize(30);
            text("You Won", randomZ, randomC)

            fill(244, 208, 63);
            textSize(30);
            text("You Won", randomY + randomC, randomB + randomX)

            // the score that will be print
            noStroke();
            fill(r,g,b);
            rect(415, 0,100,100)
            textSize(20);
            fill(0, 0, 0);
            text(score, 415, 15);
        }else if (inp.value() !== textSample){ 
          score -= 10 // add into the score
          // prints many you suck
            fill(244, 208, 63);
            textSize(30);
            text("You Suck", randomX, randomY)

            fill(244, 208, 63);
            textSize(30);
            text("You Suck", randomA, randomB)

            fill(244, 208, 63);
            textSize(30);
            text("You Suck", randomC, randomZ)

            fill(244, 208, 63);
            textSize(30);
            text("You Suck", randomX + randomB, randomY + randomC)

            // the score that will be print
            noStroke();
            fill(r,g,b);
            rect(415, 0,100,100)
            textSize(20);
            fill(0, 0, 0);
            text(score, 415, 15);

        }
    }
}



