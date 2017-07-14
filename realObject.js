//person class
function Person(age, race){ 
    this.age = age; 
    this.race = race;
}
var Bao = new Person(16, "asian"); 
console.log("Bao is " + Bao.age + " and his race is " + Bao.race);

//drink class
function drink(type, color, sugar){
    this.type = type; 
    this.color = color; 
    this.sugar = sugar;
}
var greenTea = new drink("tea", "green", 0);
var Coke = new drink("soda", "black", 132); 

