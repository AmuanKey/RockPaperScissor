var computerScore = 10;
var humanScore = 0;
let humanChoice;
let computerChoice;
let roundCount = 0;

function getComputerChoice() {

let num =  Math.floor(Math.random()*3)+1;


switch (num) {
case 1:
    computerChoice = "rock";
    break;
case 2:
    computerChoice ="paper";
case 3:
    computerChoice = "scissor";

default:
    break;
}
console.log("Computer's choice is "+computerChoice);
return computerChoice;
}



const Container = document.querySelector("#btn-container");
const Rock = document.querySelector("#rock");
const Paper = document.querySelector("#paper");
const Scissor = document.querySelector("#scissor");



    Container.addEventListener("click", (e)=>{
humanChoice = e.target.id;
console.log("Your choice is "+humanChoice);
    playRound(humanChoice,getComputerChoice());
    roundCount++;
    console.log("Round " + roundCount);
    console.log("computer score" +computerScore);
    console.log("human score" +humanScore);
})


function playRound(humanChoice,computerChoice){
if (humanChoice == "rock" && computerChoice == "scissor"){
console.log("You Win Rock beats Scissor");
humanScore++;
}
else if(humanChoice == "paper" && computerChoice == "rock"){
console.log("You Win Paper beats Rock");
humanScore++;
}
else if(humanChoice == "scissor" && computerChoice == "paper"){
console.log("You Win Scissor beats Paper");
humanScore++;
}
else if(humanChoice == computerChoice){
 console.log("It's a Tie") ;
}
else {
console.log("You Lose. Computer Wins");
computerScore++;
}
}