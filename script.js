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
    userChoice(1);
    cpuChoice()
    checkWinner()
    opponentchoice = cpuChoice()
})

function userChoice(choice) {
    userPick = choice;
}

/*This is the userchoice function*/

function userChoicePaper() {
    userPick = 2;
        alert(userPick)
}

Paper.addEventListener("click", () => {
    userChoice(2);
    cpuChoice()
    // checkWinner()
})

Paper.addEventListener("click", userChoicePaper)

function userChoiceScissors() {
    userPick = 3;
        alert(userPick)
}

Scissors.addEventListener("click", () => {
    userChoice(3);
    cpuChoice()
    //checkWinner()
})

Scissors.addEventListener("click", userChoiceScissors)

function userChoicebutton() {
    userPick = 4;
        alert(userPick)
}

button.addEventListener("click", () => {
    userChoice(4);
    cpuChoice()
    // checkWinner()
})

button.addEventListener("click", userChoicebutton)

function userChoicebutton1() {
    userPick = 5;
        alert(userPick)
}

button1.addEventListener("click", () => {
    userChoice(5);
    cpuChoice()
    // checkWinner()
})

button1.addEventListener("click", userChoicebutton1)
