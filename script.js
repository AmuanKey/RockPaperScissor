var computerScore = 0;
var humanScore = 0;
let humanChoice;
let computerChoice;
let roundCount = 0;

let RoundText = document.querySelector(".header-text");
let Footer = document.querySelector(".footer");

let yourscore = document.querySelector(".yourscore");
let pcscore = document.querySelector(".pcscore");




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
    RoundText.innerText = "Round - "+roundCount;
    pcscore.innerText = "Computer score "+ computerScore;
    yourscore.innerText = "Your score " +humanScore;
    
})


function playRound(humanChoice,computerChoice){
if (humanChoice == "rock" && computerChoice == "scissor"){
Footer.innerText = "You Win Rock beats Scissor";
humanScore++;
}
else if(humanChoice == "paper" && computerChoice == "rock"){
Footer.innerText = "You Win Paper beats Rock";
humanScore++;
}
else if(humanChoice == "scissor" && computerChoice == "paper"){
Footer.innerText = "You Win Scissor beats Paper";
humanScore++;
}
else if(humanChoice == computerChoice){
 Footer.innerText = "It's a Tie" ;
}
else {
Footer.innerText = "You Lose. Computer Wins";
computerScore++;
}
}