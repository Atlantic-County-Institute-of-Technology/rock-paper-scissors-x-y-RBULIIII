const Rock = document.getElementById("Rock")
const Paper = document.getElementById("Paper")
const Scissors = document.getElementById("Scissors")
/*The const tells the js that there is a document and whatever it is named*/
const button = document.getElementById("button")
const button1 = document.getElementById("button1")
const clear = document.getElementById("CLEAR")
let playerscore = document.getElementById("score1")
let computerscore = document.getElementById("score2")
/*The let links the js to the index*/
var userPick = 0;
var cpuPick = 0;
var cpuwins = 0;
var playerwins = 0;
const choices = ['Rock', 'Paper', 'Scissors', 'Pencil', 'Stapler'];



// clear.addEventListener('click', () => {
//    console.log("Clear button clicked.");
//    clear_game();
// })

function clear_game() {
   // clears the scores to zero
   player_score_val = 0;
   computer_score_val = 0;
}

function cpuChoice(){
   // cpuPick =  Math.floor(Math.random() * choices.length) + 1;
   cpuPick = Math.floor(Math.random() * 3) + 1;
}

function userChoiceRock() {
   console.log("Help Me")
   userPick = 1;
}
/*This shows the users choice and option*/


Rock.addEventListener("click", () => {
   userChoice();
   cpuChoice()
   checkWinner()
   console.log
   
})

function userChoice(choice) {
    userPick = 1;
    }

/*This is the userchoice function*/

function userChoicePaper() {
    userPick = 2;
}

Paper.addEventListener("click", () => {
    userChoice();
    cpuChoice()
    checkWinner()
})

Paper.addEventListener("click", userChoicePaper)

function userChoiceScissors() {
    userPick = 3;
}

Scissors.addEventListener("click", () => {
    userChoice();
    cpuChoice()
    checkWinner()
})

Scissors.addEventListener("click", userChoiceScissors)

function userChoicebutton() {
    userPick = 4;
}

button.addEventListener("click", () => {
    userChoice();
    cpuChoice()
    checkWinner()
})

button.addEventListener("click", userChoicebutton)

function userChoicebutton1() {
    userPick = 5;
        alert(userPick)
}

button1.addEventListener("click", () => {
    userChoice();
    cpuChoice()
    checkWinner()
})

function checkWinner(userChoice){
       if(userChoice == 1  && cpuPick == 1){
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
    if(cpuChoice == 1) {
        result.innerHTML = "You win!"
        playerwins++
        score1.innerHTML = "Player score:" + playerwins
       }
        else if (cpuChoice == 2 ) {
            result.innerHTML = "It is a draw!!";
        
     } else if(cpuChoice == 3) { 
        result.innerHTML = "Scissor cuts paper you LOSE!"
     } 
    
     else if(cpuChoice == 4) {
        result.innerHTML = "Pencil rips paper you lose!"
     } 
     else if (cpuChoice == 5) {
        result.innerHTML = "Stapler joins them together and doesn't rip them apart you win!"
        playerwins++
        score1.innerHTML = "Player score:" + playerwins
     }
}
function scissorscheck(){
    if (cpuChoice == 1 ) {
        result.innerHTML = "Rock crushes scissors You lose!";
     } 
     else if(cpuChoice == 2) {  
        result.innerHTML = "scissors cut paper You win!"
        playerwins++
        score1.innerHTML = "Player score:" + playerwins
     } 
     else if(cpuChoice == 3) {
        result.innerHTML = "It's a draw!"
       
     } else if(cpuChoice == 4) {
        result.innerHTML = "You slowly cut pencil overtime you win!"
        playerwins++
        score1.innerHTML = "Player score:" + playerwins
     } else if (cpuChoice == 5) {
        result.innerHTML = "Stapler crushes scissors you lose!"
        cpuwins++
        score2.innerHTML = "Computer score: " + cpuwins
}
}

function pencilcheck(){
    if (cpuChoice == 1 ) {
        result.innerHTML = "Rock incinerates pencil, you lose!";
        cpuwins++
        score2.innerHTML = "Computer score: " + cpuwins
     } 
     else if(cpuChoice == 2) {  
        result.innerHTML = "Pencil rips paper you win!"
        playerwins++
        score1.innerHTML = "Player score:" + playerwins
     } 
     else if(cpuChoice == 3) {
        result.innerHTML = "Pencil gets cut overtime you lose!"
        cpuwins++
        score2.innerHTML = "Computer score: " + cpuwins
     } else if(cpuChoice == 4) {
        result.innerHTML = "It is a draw"
     } else if (cpuChoice == 5) {
        result.innerHTML = "The pencil wins it jams the stapler you win!"
        playerwins++
        score1.innerHTML = "Player score:" + playerwins
}
}

function staplercheck(){
    if (cpuChoice == 1 ) {
        result.innerHTML = "Rock incinerates pencil, you lose!";
        cpuwins++
        score2.innerHTML = "Computer score: " + cpuwins
     } 
     else if(cpuChoice == 2) {  
        result.innerHTML = "Stapler joins them together and doesn't rip them apart you lose"
        cpuwins++
        score2.innerHTML = "Computer score: " + cpuwins
     } 
     else if(cpuChoice == 3) {
        result.innerHTML = "Stapler crushes scissors you win!"
        playerwins++
        score1.innerHTML = "Player score:" + playerwins
     } else if(cpuChoice == 4) {
        result.innerHTML = "It is a draw"
     } else if (cpuChoice == 5) {
        result.innerHTML = "The pencil wins it jams the stapler you lose!"
        cpuwins++
        score2.innerHTML = "Computer score: " + cpuwins
}
}

