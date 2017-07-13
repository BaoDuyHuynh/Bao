var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function randLetter(input){ //new function that generate random words
    return Math.floor(Math.random() * input); //generating and random letter
}
console.log (alphabet[randLetter(alphabet.length)]); //printing out the random letter from the alphabet array


//var randomWord = []; // creating a new array for random word
var word = ""; //making a word that will be added 
function randWord(){ // new function that generate a random word
    for(var i = 0; i < Math.floor(Math.random() * 26); i++ ){ 
        word += alphabet[randLetter(26)];
    } 
    return word;
}
console.log(randWord());


var sentence = "";
var space = " ";
function randSentence(){ 
    for(var i = 0; i < Math.floor(Math.random() * 10); i++ ){ 
        sentence += randWord() + space;
    } 
    return sentence;
}
console.log(randSentence());