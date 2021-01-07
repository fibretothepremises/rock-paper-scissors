let playerName = prompt("Enter player name: ","");
// H1 //
const h1 = document.querySelector('h1');
// H2 //
const h2 = document.querySelector('h2');
// H3 //
let playerId = document.querySelector('#playerId');
playerId.textContent = playerName;
// HP numbers //
let computerHpNum = 500;
let playerHpNum = 500;
// Sounds //
const audios = document.querySelectorAll('audio');
const fg2 = document.querySelector('.fg2');
const lose1 = document.querySelector('.lose1');
const lose3 = document.querySelector('.lose3');
const pain1 = document.querySelector('.pain1');
const pain3 = document.querySelector('.pain3');
const pain5 = document.querySelector('.pain5');
const chains5 = document.querySelector('.chains5');
const fist1 = document.querySelector('.fist1');
const win1 = document.querySelector('.win1');
const win3 = document.querySelector('.win3');
const happy3 = document.querySelector('.happy3');
const laugh5 = document.querySelector('.laugh5');
const laugh18 = document.querySelector('.laugh18');
// Skills //
const skills = document.querySelector('.skills');
const chains = document.querySelector('#chains');
const fist = document.querySelector('#fist');
const fg = document.querySelector('#fg');
// Reset //
const reset = document.querySelector('.reset');
const btnReset = document.querySelector('.btn-reset');
// Listen for skill button click and if clicked--playRound //
window.addEventListener("click", playRound);
// When button is clicked, assign new value to playerSelection and call round function.
function playRound(e) {
    if (!(e.target.className == "btn")) { // only selects skill buttons.
        return;
    }
    let playerSelection = e.target.id;
    round(playerSelection);
}
// Generate computerSelection //
let choice = ['chains', 'fist', 'fg']
function random() {
    return Math.floor(Math.random() * 3)
};
function computerPlay() {
    return choice[random()];
}
////// ATTACK COMPUTER //////
function attackComputer() {
    let computerHP = document.querySelector('#computer-hp');
    computerHpNum -= 100;
    switch(true) {
        case (computerHpNum < 175):
            computerHP.style.backgroundColor = "var(--red)";
            break;
        case (computerHpNum < 300):
            computerHP.style.backgroundColor = "var(--yellow)";
            break;
        case (computerHpNum < 500):
            computerHP.style.backgroundColor = "var(--orange)";
            break;
    }
    console.log(computerHpNum);
    let hpPx = computerHpNum + "px";
    computerHP.style.width = hpPx;
}
////// ATTACK PLAYER /////////
function attackPlayer() {
    let playerHP = document.querySelector('#player-hp');
    playerHpNum -= 100;
    switch(true) {
        case (playerHpNum < 175):
            playerHP.style.backgroundColor = "var(--red)";
            break;
        case (playerHpNum < 350):
            playerHP.style.backgroundColor = "var(--yellow)";
            break;
        case (playerHpNum < 450):
            playerHP.style.backgroundColor = "var(--orange)";
            break;
    }
    console.log(playerHpNum);
    let hpPx = playerHpNum + "px";
    playerHP.style.width = hpPx;
}
//////// END GAME /////////
function endGame() {
    if (computerHpNum == 0) {
        audios.currentTime = 0;
        // hide skill buttons
        skills.style.opacity = 0;
        // show reset button
        reset.style.display = "grid";
        btnReset.style.display = "block";
        btnReset.style.opacity = 1;
        // hide h1
        h1.style.opacity = 0;
        // show victory sign
        h2.classList.toggle("h2-show");
        h2.style.color = "var(--green)";
        h2.style.textShadow = "2px 2px var(--green)";
        h2.textContent = "VICTORY";
        // change prompt
        document.querySelector('#prompt').style.fontSize = "4.5rem";
        document.querySelector('#prompt').textContent = `Victory at long last!`;
        // play win sound
        win1.play();
    } else if (playerHpNum == 0) {
        audios.currentTime = 0;
        // hide skill buttons
        skills.style.opacity = 0;
        // show reset button
        reset.style.display = "grid";
        btnReset.style.display = "block";
        btnReset.style.opacity = 1;
        // hide h1
        h1.style.opacity = 0;
        // show defeat sign
        h2.classList.toggle("h2-show");
        h2.style.color = "var(--red)";
        h2.style.textShadow = "2px 2px red";
        h2.textContent = "DEFEAT";
        // change prompt
        document.querySelector('#prompt').style.fontSize = "4.5rem";
        document.querySelector('#prompt').textContent = `Perhaps defeat was inevitable.`;
        // play lose sound
        // lose1.play();
        lose1.play();
    }
}
////// ROUND //////
function round(playerSelection) {
    playerSelection = playerSelection.toUpperCase();
    let computerSelection = computerPlay().toUpperCase();
    console.log("You chose: " + playerSelection);
    console.log("The computer chose: " + computerSelection);
    switch(true) {
        //// PLAYER LOSE
        case (playerSelection == 'CHAINS' && computerSelection == 'FG'):
            console.log(`Enemy used Flame Guard and absorbed all magical damage from Searing Chains.`);
            attackPlayer();
            pain1.currentTime = 0;
            pain1.play();
            document.querySelector('#prompt').textContent = `Enemy used Flame Guard and absorbed all magical damage from Searing Chains.`;
            break;
        case (playerSelection == 'FG' && computerSelection == 'FIST'):
            console.log(`Enemy used Sleigh of Fist and pierced through your magical shield.`);
            attackPlayer();
            pain3.currentTime = 0;
            pain3.play();
            document.querySelector('#prompt').textContent = `Enemy used Sleigh of Fist and pierced through your magical shield.`;
            break;
        case (playerSelection == 'FIST' && computerSelection == 'CHAINS'):
            console.log(`Enemy used Searing Chains. You're rooted in place and cannot use Sleight of Fist.`);
            attackPlayer();
            pain5.currentTime = 0;
            pain5.play();
            document.querySelector('#prompt').textContent = `Enemy used Searing Chains. You're rooted in place and cannot use Sleight of Fist.`;
            break;
        //// TIE
        case (playerSelection == 'CHAINS' && computerSelection == 'CHAINS'):
            console.log(`You both used Searing Chains. Get Ready!`);
            laugh5.currentTime = 0;
            laugh5.play();
            document.querySelector('#prompt').textContent = `You both used Searing Chains. Get Ready!`;
            break;
        case (playerSelection == 'FIST' && computerSelection == 'FIST'):
            console.log(`You both used Sleight of Fist. Get Ready!`);
            happy3.currentTime = 0;
            happy3.play();
            document.querySelector('#prompt').textContent = `You both used Sleight of Fist. Get Ready!`;
            break;
        case (playerSelection == 'FG' && computerSelection == 'FG'):
            console.log(`You both used Flame Guard. What's your next move?`);
            laugh18.currentTime = 0;
            laugh18.play();
            document.querySelector('#prompt').textContent = `You both used Flame Guard. What's your next move?`;
            break;
        //// PLAYER WIN
        case (playerSelection == 'CHAINS' && computerSelection == 'FIST'):
            console.log(`Chained in searing heat!`);
            attackComputer();
            chains5.currentTime = 0;
            chains5.play();
            document.querySelector('#prompt').textContent = `Chained in searing heat!`;
            break;
        case (playerSelection == 'FIST' && computerSelection == 'FG'):
            console.log(`The sleight of fist!`);
            attackComputer();
            fist1.currentTime = 0;
            fist1.play();
            document.querySelector('#prompt').textContent = `The sleight of fist!`;
            break;
        case (playerSelection == 'FG' && computerSelection == 'CHAINS'):
            console.log(`The flame protects me!`);
            attackComputer();
            fg2.currentTime = 0;
            fg2.play();
            document.querySelector('#prompt').textContent = `The flame protects me!`;
            break;
    }
    endGame();
}

function game() {
    let numberOfRounds = 5;
    let playerScore = 0;
    let computerScore = 0;    
    while (numberOfRounds > 0) {
        // GET USER INPUT //
        playerSelection = playerSelection.toUpperCase();
        // MAKE SURE INPUT IS VALID //
        let result = round(playerSelection, computerPlay());
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
    