

let buttonChoice;
const scrchoice = document.querySelector('.playchoice')
const cmpscrchoice =  document.querySelector('.compchoice')
const result = document.querySelector('.result')
const playscore = document.querySelector('.playscore')
const srccompscore = document.querySelector('.compscore')
let playerScore =0;
let compScore =0;


const ROCK = document.querySelector('.rock')
ROCK.addEventListener('click', () => {
    let buttonChoice = "rock";
    scrchoice.textContent = `Your Choice: ${buttonChoice.toUpperCase()}`
    result.textContent = play(buttonChoice)
})


const PAPER = document.querySelector('.paper');
PAPER.addEventListener('click', () => {
    let buttonChoice = "paper";
    scrchoice.textContent = `Your Choice: ${buttonChoice.toUpperCase()}`
    result.textContent = play(buttonChoice)
});

const SCISSORS = document.querySelector('.scissors');
SCISSORS.addEventListener('click', () => {
    let buttonChoice = "scissors";
    scrchoice.textContent = `Your Choice: ${buttonChoice.toUpperCase()}`
    result.textContent = play(buttonChoice)
});



function play(buttonChoice){
    let a = ['rock','paper','scissors'];
    let compChoice= a[Math.floor(Math.random()*3)];
    cmpscrchoice.textContent = `Computer choice: ${compChoice.toUpperCase()}`
    
    if(buttonChoice==compChoice)
    {
        return("It's A Tie!! No Big Deal");
    }

    if((buttonChoice=='paper'&& compChoice== 'rock')||(buttonChoice=='rock'&& compChoice== 'scissors')||(buttonChoice=='scissors'&& compChoice== 'paper')){
        ++playerScore
        playscore.textContent = `Player Score: ${playerScore}`
        return("HaHa , AI Loses")
        
    }
    else{
        ++compScore
        srccompscore.textContent = `Computer Score: ${compScore}`
        return("Dammit!! AI Wins")
        
    }


}


/*
function round5()
{
    for(let i=0 ; i <5;i++)
    {
        console.log(play());
    }
}
*/




