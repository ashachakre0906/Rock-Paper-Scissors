//Defined and Assigned value to the variable 
var win = 0;
var ties = 0;
var losses = 0;

var compChoice = ["R","P","S"];
var gameStart = function(){
    var userChoices =window.prompt("Please enter R, P, S" );
    if (!userChoices){
        return;//if user presses cancel end the game
    }
}
var index = Math.floor(Math.random()* compChoice.length);

