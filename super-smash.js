var mashArray = ["Stage", "Halberd", "Kanto: Pokemon Stadium", "Pirate Ship"]; //Stage
var firstQuestion = [6,7 + " "]; //how times that the character will strike
var secondQuestion = [" Pit","Fox","Ness", "Link", "Mario", "Luigi", "Kirby "] // Character

var prompt = require('prompt-sync')(); //interactive prompt

//ask the user question
    var firstAnswer = prompt("How many times will you strike?" + firstQuestion);
    var secondAnswer = prompt("Who will you choose to fight?" + secondQuestion); 


console.log("You fought " + secondQuestion[Math.floor(Math.random() * secondQuestion.length)] + 
" in the "+ mashArray[Math.floor(Math.random() * mashArray.length)] + " and hit them " + 
firstAnswer + " times. Too Bad. Mewtwo wins!");
