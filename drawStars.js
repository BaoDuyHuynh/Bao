//var drawing = prompt("Please enter how many level of starts do you want");
function draw(num){
var string = "";
    for (var i = 0; i < num; i++ ){ 
        for( var j = i-1; j < i; j++ ){ 
            string += "*";
        }
        console.log(string);
    }
    return string
}

draw(9);