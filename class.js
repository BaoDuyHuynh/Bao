var charizard = { 
    "HP" : 266, 
    "Level" : 53,
}

var blastoise = { 
    "HP" : 150,
    "Level" : 99,
}

function Pokemon(HP, Level){ 
    this.HP = HP; 
    this.Level = Level;
}
var Dragonite = new Pokemon(470, 37146); 
console.log(Dragonite.HP); 
console.log(Dragonite.Level);