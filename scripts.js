// Begin with a function called computerPlay that will randomly return either 'Rock', 'Paper' or 'Scissors'.
    // Algo

    // create a function that returns a random integer from 0 to 2 inclusive.

    function random() {
        return Math.floor(Math.random() * 3)
    };
    // store values 'Rock', 'Paper' and 'Scissors' as an array

    let choice = ['Rock', 'Paper', 'Scissors']

    // create function computerPlay with 0 parameters that returns a random object in array - choice. 

    function computerPlay() {
        return choice[random()];
    }
    // Write a function that plays a single round of Rock Paper Scissors and takes two parameters - playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You lose! Paper beats Rock"
    // - make the function case insensitive
    // - console.log the results

    //// create function round() that takes 2 parameters - playerSelection and computerSelection.
    function round(playerSelection, computerSelection) {
        //// make both parameters all uppercase to make it case insensitive - use value.toUpperCase();
        playerSelection = playerSelection.toUpperCase();
        computerSelection = computerSelection.toUpperCase();
        console.log("You chose: " + playerSelection);
        console.log("The computer chose: " + computerSelection);
        switch(true) {
            //// If playerSelection beats computerSelection, return "You win! ${playerSelection} beats ${computerSelection}"
            case (playerSelection == 'ROCK' && computerSelection == 'SCISSORS'):
            case (playerSelection == 'SCISSORS' && computerSelection == 'PAPER'):
            case (playerSelection == 'PAPER' && computerSelection == 'ROCK'):
                console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
                return `You win! ${playerSelection} beats ${computerSelection}.`;
            //// If playerSelection equals computerSelection, return "It's a tie!"c
            case (playerSelection == 'ROCK' && computerSelection == 'ROCK'):
            case (playerSelection == 'PAPER' && computerSelection == 'PAPER'):
            case (playerSelection == 'SCISSORS' && computerSelection == 'SCISSORS'):
                console.log(`It's a tie, go again!`);
                return `It's a tie, go again!`;
            //// If playerSelection loses to computerSelection, return "You lose... ${computerSelection} beats ${playerSelection}"
            case (playerSelection == 'ROCK' && computerSelection == 'PAPER'):
            case (playerSelection == 'PAPER' && computerSelection == 'SCISSORS'):
            case (playerSelection == 'SCISSORS' && computerSelection == 'ROCK'):
                console.log(`You lose.. ${computerSelection} beats ${playerSelection}.`);
                return `You lose.. ${computerSelection} beats ${playerSelection}.`;
        }
    }
    
    // write a new function game()
    // use previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
    //// create function game()
    function game() {
        //// create a variable that states how many rounds left to be played
        let numberOfRounds = 5;
        //// create a variable that keeps score of player and computer
        let playerScore = 0;
        let computerScore = 0;    
        //// loop the round() according to constant
        while (numberOfRounds > 0) {
            //// use prompt to get input from the user at each round
            let playerSelection = prompt('Rock, paper or scissors?', '');
            //// make input case insensitive
            playerSelection = playerSelection.toUpperCase();
            //// Make sure the input is either rock paper or scissors
            while (!(playerSelection == 'ROCK' || playerSelection == 'TIE' || playerSelection == 'SCISSORS')) {
                playerSelection = prompt('You must choose between rock, paper, scissors. Try again!', '');
                playerSelection = playerSelection.toUpperCase();
            }
            //// call round() function and store the returned value in a variable called result
            let result = round(playerSelection, computerPlay());
            //// using regex and test(), conduct 3 tests for a match for the word 'win', 'tie' and 'lose' and playerScore++, or do nothing, computerScore++ accordingly.
            let regexWin = /win/;
            let regexTie = /tie/;
            let regexLose = /lose/;
            switch(true) {
                case (regexWin.test(result)):
                    playerScore++;
                    numberOfRounds -= 1;
                    console.log(playerScore);
                    console.log(computerScore);
                    break;
                case (regexTie.test(result)):
                    console.log(playerScore);
                    console.log(computerScore);
                    break;
                case (regexLose.test(result)):
                    computerScore++;
                    numberOfRounds -= 1;
                    console.log(playerScore);
                    console.log(computerScore);
                    break;
            }
        }
        return (playerScore > computerScore) ? `you won THE GAME!!!` : `you lost the game :(((`;
    }
    // When button is clicked, call round() function with correct playerSelection
    function callRound(e) {
        e.id
    }
    window.addEventListener('click', callRound);
    game();