/* Welcome to the Baozzer's Boujee Bodega. 
   Everything here is $100 or more :)))))))).

   In this person's hero adventure campaign 
   the hero enters my bodega and has to spend 
   all his money before continuing. He has 
   to buy as much supplies as his money allows.
*/

var prompt = require('prompt-sync')();  //Allows to use prompt (interact with the user)

var cat = "CoolCat247"; 
var money = 1000; 
var name = prompt("What's your name? "); 

while (money > 0){ 
    var item = prompt ("What do you want to buy? "); 
    console.log("You purchased the" + item); //printing out the you what you have bought
    money =- 100; // Everything is $100
}