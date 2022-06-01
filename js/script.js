//Defined and Assigned value to the variable 
var win = 0;
var ties = 0;
var losses = 0;

var option = ["R", "P", "S"];
var gameStart = function(){
    var userChoices = window.prompt("Please enter R, P, S: " );
    if (!userChoices){
        return;
    
}
var index = Math.floor(Math.random()* option.length);
var compChoices = option[index];//get random index from array of options
window.alert("The computer chose " + compChoices);
if (userChoices === compChoices){
    ties++;
    window.alert("its a tie!");
}else if(
     (userChoices === "R" && compChoices === "S" )|| 
     (userChoices === "P" && compChoices === "R" )||
     (userChoices === "S" && compChoices === "P" )

){
    win++;
    window.alert("You win");
} else {
   losses++;
   window.alert("You lost!");//if the above condition failed then display error
}
window.alert(
    "stats:\n Wins:" + win + "\nlosses: " + losses + "\n tie: " + ties
);
var playAgain = window.confirm("Do you want to play again?");
if (playAgain){
    gameStart();
}
};
gameStart();




