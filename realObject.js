//person class
function Person(age, race){ 
    this.age = age; 
    this.race = race;
}
var Bao = new Person(16, "asian"); 
console.log("Bao is " + Bao.age + " and his race is " + Bao.race);

//drink class
function Drink(type, color, sugar){
    this.type = type; 
    this.color = color; 
    this.sugar = sugar;
}
var greenTea = new Drink("tea", "green", 0);
var Coke = new Drink("soda", "black", 132); 


