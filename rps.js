/*
var Choice = ["rock", "scissors", "paper"]; 
//Players Choices
var randnomChoice = Math.floor(Math.random() * 3);
var p1Choice = Choice[0]; //rock
var p2Choice = Choice[randnomChoice]; //random

if (p1Choice == p2Choice){
    console.log("It's a tie");

} else if ( p1Choice === "scissors")    { //if p1 is scissors
    if ( p2Choice === "rock" ){
        console.log("Player one loses");
        console.log("Player two wins");
    }else   { 
        console.log("Player one wins");
        console.log("Player two loses");   
    }

}  else if ( p1Choice === "rock")   { //if p1 is rock
    if ( p2Choice === "scissors" ){
        console.log("Player one wins");
        console.log("Player two loses");
    }else   { 
        console.log("Player one loses");
        console.log("Player two wins");   
    }
}  else if ( p1Choice === "paper")   { //if p1 is paper
    if ( p2Choice === "scissors" ){
        console.log("Player one loses");
        console.log("Player two wins");
    }else   { 
        console.log("Player one wins");
        console.log("Player two loses");  
    }
} 
*/





// Easier/ Simpler Version 
var selection  = ["rock", "Paper", "Scissors"]; //selection to pick

var newRandnomChoice = Math.floor(Math.random() * 3);
var anotherRandomChoice = Math.floor(Math.random() * 3);
var  p1Choice = selection[newRandnomChoice];
var  p2Choice = selection[anotherRandomChoice];

if (p1Choice == p2Choice){
    console.log("It's a tie");

} else if ( p1Choice === "scissors" && p2Choice === "rock")    { //if p1 is scissors
        console.log("Player one loses");
        console.log("Player two wins");

}  else if ( p1Choice === "rock" && p2Choice === "scissors" )   { //if p1 is rock
        console.log("Player one wins");
        console.log("Player two loses");

}  else if ( p1Choice === "paper" && p2Choice === "scissors")   { //if p1 is paper
        console.log("Player one loses");
        console.log("Player two wins");
} 
