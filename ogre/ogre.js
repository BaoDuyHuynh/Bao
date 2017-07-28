var HP = 100; 
var gold = 0;
var ogresDefeated = 0;

function displayStats(){
    $('#stats').text('It works!');
}

function attack() { 
    console.log("You killed an Ogre.");
}

function setup(){
 $('body').append("<h1>Welcome to OGRE GAME</h1>");
 $('body').append('<div><h3>Stats</h3><p id = "stats"></p></div>');
 $('body').append("<button onclick = 'displayStats()'>Attack</button>");
 $('body').append('<div id = "ogre"></div>');
}

$(document).ready(setup);