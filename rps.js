//issue with rock beating paper needs fixed
//Returns random choice of RPS
array = ['Rock', 'Paper', 'Scissors'];
function computerPlay(){
    let compChoice = array[Math.floor(Math.random() * 3)];
    console.log('comp picked ' + compChoice)
    return compChoice;
}

let playerScore = 0;
let compScore = 0;
//compares choices, chooses winner, increments score
function gamePlay(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return('TIE!!!!! You chose ' + playerSelection +' and so did the computer')
    } else if(playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase !== 'paper'){
        playerScore++;
        return ('player wins, ' + playerSelection + ' beats ' + computerSelection);   
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase !== 'scissors'){
        playerScore++;
        return ('player wins, ' + playerSelection + ' beats ' + computerSelection);
    }else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase !=='rock'){
        playerScore++;
        return ('player wins, ' + playerSelection + ' beats ' + computerSelection);
    }else{
        compScore++;
        return ('comp wins, ' + playerSelection + ' is beaten by ' + computerSelection)
    }
}
//obtains player choice, informs of computer choice
function play(){
    
    let playerSelection = prompt('Pick rock, paper or scissors')
    const computerSelection = computerPlay();
    alert('computer picked ' + computerSelection)
    let result = gamePlay(playerSelection, computerSelection)
    console.log(result);
    alert(result);
    
}
//runs game 5 times, determines champion
function game(){
    for (let i = 0; i < 5; i++){
        play();
        alert('player: ' + playerScore + ' comp: ' + compScore )
    }
    if (playerScore >  compScore){
        alert('Player is the CHAMPION')
    } else{ 
        alert('Computer demolishes player')
    }
}
game();