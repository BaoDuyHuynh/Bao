// App Key 
//15f40a0ba774d16ae16d7c8bb7a13d68
var appKey = "15f40a0ba774d16ae16d7c8bb7a13d68"
//App ID
//129933f6
var appID = "129933f6"
var userInput = prompt("Please enter food")
var McDolandsFood = "https://api.nutritionix.com/v1_1/search/"+ userInput + "?results=0:5&fields=item_name,nf_calories&appId=" + appID+ "&appKey=" + appKey

$.ajax({ 
    url: McDolandsFood,
}).done(function(data){
    //console.log(data);
    var food = data.hits[0]; 
    var name = food.fields.item_name;
    var cals = food.fields.nf_calories;
    $("body").append("<h2> This " + name + " has " + cals + "kcal !!!</h2>");
});  
