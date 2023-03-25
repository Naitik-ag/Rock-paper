

let a = ['rock','paper','scissors'];
let compChoice= a[Math.floor(Math.random()*3)];


function play(){
    inp = prompt("ENter");
    playerChoice= inp.toLowerCase();

    if(playerChoice==compChoice)
    {
        return "It is tie";
    }

    else if(playerChoice== 'paper')
    {
        if (compChoice=='rock')
        {
            return "You win";
        }    

        else{
            return "You lose";
        } 
    }

    else if(playerChoice== 'scissors')
    {
        if (compChoice=='paper')
        {
            return "You win";
        }   

        else
        {
            return "You lose";
        } 
    }

    else if(playerChoice== 'rock')
    {
        if (compChoice=='scissors')
        {
            return "You win";
        }  

        else{
            return "You lose";
        } 
    }
}


function round5()
{
    for(let i=0 ; i <5;i++)
    {
        console.log(play());
    }
}
