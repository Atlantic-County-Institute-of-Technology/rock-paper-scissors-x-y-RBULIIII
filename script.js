const Rock = document.getElementById("Rock")
const Paper = document.getElementById("Paper")
const Scissors = document.getElementById("Scissors")
/*The const tells the js that there is a document and whatever it is named*/
const button = document.getElementById("button")
const button1 = document.getElementById("button1")
let playerscore = document.getElementById("score1")
let computerscore = document.getElementById("score2")
/*The let links the js to the index*/
var userPick = 0;

function userChoiceRock() {
    userPick = 1;
    alert(userPick)
}
/*This shows the users choice and option*/
function cpuChoice(){
    return Math.floor(Math.random()* 5) + 1;
    console.log(opponentchoice)
}
/*This shows the cpu choice*/

Rock.addEventListener("click", () => {
    userChoice();
    cpuChoice()
    checkWinner()
    opponentchoice = cpuChoice()
})

function userChoice(choice) {
    userPick = 1;
}

/*This is the userchoice function*/

function userChoicePaper() {
    userPick = 2;
    alert(userPick)
}

Paper.addEventListener("click", () => {
    userChoice(2);
    cpuChoice()
    checkWinner()
})

Paper.addEventListener("click", userChoicePaper)

function userChoiceScissors() {
    userPick = 3;
        alert(userPick)
}

Scissors.addEventListener("click", () => {
    userChoice(3);
    cpuChoice()
    checkWinner()
})

Scissors.addEventListener("click", userChoiceScissors)

function userChoicebutton() {
    userPick = 4;
        alert(userPick)
}

button.addEventListener("click", () => {
    userChoice(4);
    cpuChoice()
    checkWinner()
})

button.addEventListener("click", userChoicebutton)

function userChoicebutton1() {
    userPick = 5;
        alert(userPick)
}

button1.addEventListener("click", () => {
    userChoice(5);
    cpuChoice()
    checkWinner()
})

function checkWinner(){
       if(cpuChoice == 1) {
        result.innerHTML = "It's a draw!"
       }
        else if (cpuChoice == 2 ) {
            result.innerHTML = "Paper Covers Rock, You Lose!";
            cpuwins++
            score2.innerHTML = "Computer score: " + cpuwins
        
     } else if(cpuChoice == 3) { 
        result.innerHTML = "Rock Crushes Scissors, You win!"
        playerwins++;
        score1.innerHTML = "Player score: " + playerwins

     } else if(cpuChoice == 4) {
        result.innerHTML = "Rock incinerates pencil, You win!"
        playerwins++;
        score1.innerHTML = "Player score: " + playerwins
     } 
     else if (cpuChoice == 5) {
        result.innerHTML = "The rocks durability against the stapler wins you win!"
        playerwins++;
        score1.innerHTML = "Player score: " + playerwins
     }
}

function papercheck(){
    if(cpuchoice == 1) {
        result.innerHTML = "You win!"
        playerwins++
        score1.innerHTML = "Player score:" + playerwins
       }
        else if (cpuchoice == 2 ) {
            result.innerHTML = "It is a draw!!";
        
     } else if(cpuchoice == 3) { 
        result.innerHTML = "Scissor cuts paper you LOSE!"
     } 
    
     else if(cpuchoice == 4) {
        result.innerHTML = "Pencil rips paper you lose!"
     } 
     else if (cpuchoice == 5) {
        result.innerHTML = "Stapler joins them together and doesn't rip them apart you win!"
        playerwins++
        score1.innerHTML = "Player score:" + playerwins
     }
}
function scissorscheck(){
    if (cpuchoice == 1 ) {
        result.innerHTML = "Rock crushes scissors You lose!";
     } 
     else if(cpuchoice == 2) {  
        result.innerHTML = "scissors cut paper You win!"
        playerwins++
        score1.innerHTML = "Player score:" + playerwins
     } 
     else if(cpuchoice == 3) {
        result.innerHTML = "It's a draw!"
       
     } else if(cpuchoice == 4) {
        result.innerHTML = "You slowly cut pencil overtime you win!"
        playerwins++
        score1.innerHTML = "Player score:" + playerwins
     } else if (cpuchoice == 5) {
        result.innerHTML = "Stapler crushes scissors you lose!"
        cpuwins++
        score2.innerHTML = "Computer score: " + cpuwins
}
}

function pencilcheck(){
    if (cpuchoice == 1 ) {
        result.innerHTML = "Rock incinerates pencil, you lose!";
        cpuwins++
        score2.innerHTML = "Computer score: " + cpuwins
     } 
     else if(cpuchoice == 2) {  
        result.innerHTML = "Pencil rips paper you win!"
        playerwins++
        score1.innerHTML = "Player score:" + playerwins
     } 
     else if(cpuchoice == 3) {
        result.innerHTML = "Pencil gets cut overtime you lose!"
        cpuwins++
        score2.innerHTML = "Computer score: " + cpuwins
     } else if(cpuchoice == 4) {
        result.innerHTML = "It is a draw"
     } else if (cpuchoice == 5) {
        result.innerHTML = "The pencil wins it jams the stapler you win!"
        playerwins++
        score1.innerHTML = "Player score:" + playerwins
}
}

function staplercheck(){
    if (cpuchoice == 1 ) {
        result.innerHTML = "Rock incinerates pencil, you lose!";
        cpuwins++
        score2.innerHTML = "Computer score: " + cpuwins
     } 
     else if(cpuchoice == 2) {  
        result.innerHTML = "Stapler joins them together and doesn't rip them apart you lose"
        cpuwins++
        score2.innerHTML = "Computer score: " + cpuwins
     } 
     else if(cpuchoice == 3) {
        result.innerHTML = "Stapler crushes scissors you win!"
        playerwins++
        score1.innerHTML = "Player score:" + playerwins
     } else if(cpuchoice == 4) {
        result.innerHTML = "It is a draw"
     } else if (cpuchoice == 5) {
        result.innerHTML = "The pencil wins it jams the stapler you lose!"
        cpuwins++
        score2.innerHTML = "Computer score: " + cpuwins
}
}

