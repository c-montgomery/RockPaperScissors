//create game display text in header
let output  = document.querySelector('.output');
let para = document.createElement('p');
para.textContent = 'Make a choice...'
output.appendChild(para);

let rockButton = document.querySelector('.rock');
let paperButton = document.querySelector('.paper');
let scissorsButton = document.querySelector('.scissors');

rockButton.addEventListener('click', choose);
paperButton.addEventListener('click', choose);
scissorsButton.addEventListener('click', choose);

let isPlaying = true;



function choose(e){

    if (playerScore + compScore < 5){
        switch(e.target.className){
        case 'rock':
            console.log('got to rock')
            play('rock');
            console.log('ran function')
            break;
        case 'paper':
            play('paper');
            break;
        case 'scissors':
            play('scissors');
            break;
        default:
            console.log('ERROR, failure to select option');
        }
    }else{
        play('endGame')
    }
    
}


//Returns random choice of RPS
array = ['Rock', 'Paper', 'Scissors'];
function computerPlay(){

    let compChoice = array[Math.floor(Math.random() * 3)];
    return compChoice;
}

let playerScore = 0;
let compScore = 0;
let visiblePlayerScore = document.querySelector('.player')
let visibleCompScore= document.querySelector('.computer')

//compares choices, chooses winner, increments score
function gamePlay(playerSelection, computerSelection){
    
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return('TIE! You chose ' + playerSelection +' and so did the computer')
    } else if(playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() !== 'paper'){
        playerScore++;
        visiblePlayerScore.textContent = playerScore;
        return ('Player wins, ' + playerSelection + ' beats the computer\'s ' + computerSelection);   
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() !== 'scissors'){
        playerScore++;
        visiblePlayerScore.textContent = playerScore;
        return ('Player wins, ' + playerSelection + '  beats the computer\'s ' + computerSelection);
    }else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() !=='rock'){
        playerScore++;
        visiblePlayerScore.textContent = playerScore;
        return ('Player wins, ' + playerSelection + ' beats the computer\'s ' + computerSelection);
    }else{
        compScore++;
        visibleCompScore.textContent = compScore
        return ('Computer chose ' + computerSelection +' beating your' + playerSelection  )
    }
}   

//obtains player choice, informs of computer choice
function play(choice){
    if (choice !== 'endGame'){
        let playerSelection = choice
        const computerSelection = computerPlay();
        let result = gamePlay(playerSelection, computerSelection)
        para.textContent = result;
    }else{
        if (playerScore > compScore){
            para.textContent = 'MAN OVER MACHINE!'
        } else {
            para.textContent = 'MACHINE OVER MAN'
        }
    }
}

