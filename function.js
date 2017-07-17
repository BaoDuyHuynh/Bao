function shoutOut(){ 
    console.log("Bao is the best");
    return "Baooo!";
}

shoutOut(); // to call a function


//having an input 
function randomizer (input){
    // want to use the input as the range 
    var randomNumber = Math.floor(Math.random() * input);
    return randomNumber; 
}
 console.log(randomizer(7));

 // finding the winners 
 var people = ["p1", "p2", "p3", "p4"]; 

 function Winner (input){
     // doing the random and getting the random number
    var randomNumber = Math.floor(Math.random() * input);
    return randomNumber; 
 }

 console.log(people[Winner(people.length)]);
