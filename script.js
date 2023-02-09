function getComputerChoice(){
    let choice= Math.floor(Math.random() * 3) + 1;
    switch(choice){
        case 1: return "rock"
        case 2: return "paper"
        case 3: return "scissor"
    }
}

function palyRound(playerSelection,computerSelection){  // if player win return 1
    let j,i;                                            // if computer win return -1
    const possib=["scissor","paper","rock"];            // if null return 0
    playerSelection=playerSelection.toLowerCase();

    // Debug prints ##################################
    console.log("Computer choice: "+computerSelection);
    console.log("Your choice: "+playerSelection);
    // ###############################################


    for(i=0;i<3;i++){
        if(possib[i]===playerSelection){break;}
    }
    if(i==2){j=0;}
    else{j=i+1;}
    
    if(possib[i]===computerSelection){ return 0}
    else if(possib[j]===computerSelection){ return 1}
    else{ return -1}
}

function visualResult(value){
    switch(value){
        case 0:console.log("Match null");return "Match null";break;
        case 1:console.log("You won!");return;break;
        case -1:console.log("You lost...");return;break;
    }
}
function visualResultWithAlert(value){
    switch(value){
        case 0:alert("Match null");return;
        case 1:alert("You won!");return;
        case -1:alert("You lost...");return;
    }
}

function retResult(value){
    switch(value){
        case  0: return "Match null"
        case  1: return "You won!"
        case -1: return "You lost..."
    }
}

function getPlayerChoice(){
    let myChoice;
    do{
        myChoice=prompt("What's your choice? (Paper,Scissor,Rock)");
        myChoice=myChoice.toLowerCase();
    }while(myChoice!="rock" && myChoice!="paper" && myChoice!="scissor");
    return myChoice
}

function game(rounds){
    let T=[],i;
    for(let i=0;i<rounds;i++){
        T[i]=palyRound(getPlayerChoice(),getComputerChoice());
    }
    console.log("-Result display:");
    for(i=0;i<rounds;i++){
        console.log(retResult(T[i])+"\t(Round "+i+")");
    }
}

const click = document.querySelector("#parent");
click.addEventListener('click',function(e){
    console.log(e);
    visualResultWithAlert(palyRound(e.target.outerText,getComputerChoice()));
});