const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const TIE = "Tie! ";
const PLAYERWIN = "You win! ";
const PLAYERLOSE = "You lose! ";

let games = parseInt(prompt("How many games would you like to play?"));
console.log("Games: " + games);
while(Number.isNaN(games) || games < 1)
{
    console.log("Please enter a number greater than 0");
    games = parseInt(prompt("How many games would you like to play?"));
}
game(games);

// Player 5 rounds of rock, paper, scissors
function game(rounds)
{
    for(let i = 1; i <= rounds; i++)
    {
        console.log("Round " + i)
        let playerSelection;
        while(!isValid(playerSelection = prompt("Rock, paper, or scissors? ")))
        {
            console.log("Invalid input, try again");
        }
        const computerSelection = getComputerSelection();
        console.log("Computer selects: " + computerSelection.toLowerCase());
        console.log(playRound(playerSelection, computerSelection));
    }
}

// Takes in two strings representing player's and computer's selection, returns string representing results of round
function playRound(playerSelection, computerSelection)
{
    // Format strings to match constant variables
    playerSelection = capitalizeFirst(playerSelection);
    computerSelection = capitalizeFirst(computerSelection);
    if(playerSelection === computerSelection)
    {
        return TIE + playerSelection + " cancels out " + computerSelection.toLowerCase();
    }
    else if((playerSelection === ROCK && computerSelection === SCISSORS) || (playerSelection === SCISSORS && computerSelection === PAPER)
    || (playerSelection === PAPER && computerSelection === ROCK))
    {
        return PLAYERWIN + playerSelection + " beats " + computerSelection.toLowerCase();
    }
    return PLAYERLOSE + computerSelection + " beats " + playerSelection.toLowerCase();
}

// Clean up strings to capitalize first character and uncapitalize the remaining chars
function capitalizeFirst(str)
{
    return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

// Check to see if player selection is valid
function isValid(selection)
{
    selection = capitalizeFirst(selection);
    if(selection === ROCK || selection === PAPER || selection === SCISSORS)
    {
        return true;
    }
    return false;
}

// Randomly generates a selection for the computer
function getComputerSelection()
{
    // rand = 0, 1, or 2
    let rand = Math.floor(Math.random() * 3);
    switch (rand)
    {
        case 0:
            return SCISSORS;
        case 1:
            return ROCK;
        case 2:
            return PAPER;
        default:
            return "ERROR";
    }
}

