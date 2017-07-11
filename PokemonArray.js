var myPokemonRoster = ["Dragonite", "Swanpert", "Swellow", "Gengar", "Machamp"]
var firstToFight = myPokemonRoster[4];
var secondToFight = myPokemonRoster[2];
//Extra 
myPokemonRoster.pop(); // remove the last peokmon
myPokemonRoster.push("Acanine");
myPokemonRoster.push("Charmander");
var RosterSize = myPokemonRoster.length

//Looping Pokemon
for (var i = 0; i < 5; i++){ 
    console.log(myPokemonRoster[i]);
}
// reverse 
for (var i = 5; i > -1; i--){ 
    console.log(myPokemonRoster[i]);
}
// runs the whole loop
for (var i = 0; i <myPokemonRoster.length; i++){ 
    console.log(myPokemonRoster[i]);
}
//if loop
if(myPokemonRoster.length >= 5){ 
    for (var i = 0; i < 5; i++){ 
    console.log(myPokemonRoster[i]);
    }
}
console.log("You Can’t Play! Not Enough Pokemon");