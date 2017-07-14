var pokemonObjectArray = [ {"Name" : "Pidgeot" , "Type" : "Flying", "HP" : 83, "DEF": 75, "ATK" : 80, "Legend" : false},  
                           {"Name" : "Arcanine", "Type" : "Fire", "HP" : 90, "DEF" : 80, "ATK" : 110, "Legend" : false}, 
                           {"Name" : "Dragonite", "Type" : "Dragon", "HP" : 91, "DEF": 95, "ATK": 134, "Legend" : false},   
                           {"Name": "Snorlax", "Type" : "Normal", "HP" : 160, "DEF" : 65, "ATK" : 110, "Legend" : false},  
                           {"Name" : "Lugia", "Type" : "Psychic", "HP" : 106, "DEF" : 130, "ATK" : 90, "Legend": true},  
                           {"Name" : "Blaziken", "Type" : "Fire", "HP": 80, "DEF" : 70, "ATK": 120, "Legend": false}  
                         ];
function printRoster() {
    for(var i = 0; i < pokemonObjectArray.length; i++){ 
            console.log(pokemonObjectArray[i]);
    }
} 
//printRoster();

function pokemonAttack(){ 
     for(var i = 0; i < pokemonObjectArray.length; i++){ 
        pokemonObjectArray[i].HP -= 10;
    }
}
pokemonAttack(); 
printRoster();