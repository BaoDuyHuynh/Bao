var pokemonStats = [["Name: Pidgeot ", "Type: Flying", "HP: 83", "DEF: 75", "ATK: 80", "Legend: No"],  //col 0
                    ["Name: Arcanine", "Type: Fire", "HP: 90", "DEF: 80", "ATK: 110", "Legend: No"],  // col 1
                    ["Name: Dragonite", "Type: Dragon", "HP: 91", "DEF: 95", "ATK: 134", "Legend: No"],  //col 2  
                    ["Name: Snorlax", "Type: Normal", "HP: 160", "DEF: 65", "ATK: 110", "Legend: No"],  //col 3
                    ["Name: Lugia", "Type: Psychic", "HP: 106", "DEF: 130", "ATK: 90", "Legend: Yes"],  //col 4
                    ["Name: Blaziken", "Type: Fire", "HP: 80", "DEF: 70", "ATK: 120", "Legend: No"]];  //col 5
for(var i = 0; i < pokemonStats.length; i++){
    for(var j = 0; j <pokemonStats.length; i++){
        console.log(pokemonStats[i][j]);
    }
}

