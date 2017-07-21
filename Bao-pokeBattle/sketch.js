var Something = ["Baozzer's\nPokemon has\ntaken a hit ", "Opponent's\nPokemon has\ntaken a hit "]
var button;
var YourHP = 200;
var OpponentHP = 350;
var Pikachu;
var Bulbasaur;
// function preload(){ 
//     Pikachu = loadImage("Bao-pokeBattle\Pikachu.png");
// }
function setup() {
//Image 
//     image(Pikachu, 10, 15);

//Canvas
    var w = color(255,255,255) //white
    createCanvas(650, 650);
    background ('hsba(160, 100%, 50%, 0.5)');

//pokemon logo box
fill(w) // white box
rect( 0, 0, 54, 48); 
textSize(12);
fill(0, 102, 153);
text("Pokemon", 2, 28);

//option box
fill(w) // white box
rect( 150, 0, 250, 50);
textSize(15);
fill(0, 102, 153);
text("Pokemon VS. Pokemon", 185, 28);

//Username 
fill(w) // white box
rect( 455, 0, 100, 50);
textSize(15);
fill(0, 102, 153);
text("Baozzer", 475, 28);

//Setting box
fill(w) // white box
rect( 599, 0, 50, 50);
textSize(12);
fill(0, 102, 153);
text("Setting", 605, 28);

//Fighting (Vision)
fill(w) // white box
rect( 50, 100, 450, 350);

//Turn box 
fill(w) // white box
rect( 555, 100, 94, 350);
textSize(12);
fill(0, 102, 153);
//Hitting Text
text("Turn: 7", 560, 120);
text(Something[0], 560, 135);

text("Turn: 8", 560, 185);
text(Something[1], 560, 195);

text("Turn: 9", 560, 245);
text(Something[0], 560, 255);

text("Turn: 10", 560, 305);
text(Something[1], 560, 315);

text("Turn: 11", 560, 365);
text(Something[0], 560, 375);

//Attack 
button = createButton('Click To Attack');
button.position(100, 500);
button.size(350,50);
button.mousePressed(attackBG)

//Swtich pokemon 
button = createButton('Click To Switch Your Pokemon');
button.position(45, 590);
button.size(475, 50);
button.mousePressed(changeBG)

//New Turn 
button = createButton('Click To End Turn');
button.position(475, 500);
button.size(150,50);
button.mousePressed(fightBG)

// HP of the Opponent's Pokemon
textSize(15);
fill('red');
text("HP:", 400, 120);
            // the HP vaule
            noStroke();
            fill(255);
            rect(435, 103, 50, 25)
            textSize(20);
            fill(0);
            text(OpponentHP, 437, 122);
    // Your Pokemon
    ellipse(450, 150, 50, 50); 

// HP of the Opponent's Pokemon
textSize(15);
fill('red');
text("HP:", 55, 325);
 // the HP vaule
            noStroke();
            fill(255);
            rect(85, 308, 50, 25)
            textSize(20);
            fill(0);
            text(YourHP, 87, 327);
    //Opponent's Pokemon
    ellipse(80, 355, 50, 50);
}

function attackBG(){ 
    // Your Oppponent Change
            OpponentHP -= 10
            noStroke();
            fill(255);
            rect(435, 103, 50, 25)
            textSize(20);
            fill(0);
            text(OpponentHP, 437, 122);
}

function fightBG(){ 
    // our HP change
            YourHP -= 10;
            noStroke();
            fill(255);
            rect(85, 308, 50, 25)
            textSize(20);
            fill(0);
            text(YourHP, 87, 327);
}

function changeBG(){ 
 // the new Pokemon on Your Side
            YourHP = Math.floor(random(350) + 75);
            noStroke();
            fill(255);
            rect(85, 308, 50, 25)
            textSize(20);
            fill(0);
            text(YourHP, 87, 327);
 // the new Pokemon on the Opponent side
            OpponentHP = Math.floor(random(350) + 75);
            noStroke();
            fill(255);
            rect(435, 103, 50, 25)
            textSize(20);
            fill(0);
            text(OpponentHP, 437, 122);
}
