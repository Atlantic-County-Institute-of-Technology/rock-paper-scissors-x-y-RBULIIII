const Rock = document.getElementById("Rock")
const Paper = document.getElementById("Paper")
const Scissors = document.getElementById("Scissors")
const button = document.getElementById("button")
const button1 = document.getElementById("button1")
var userPick = 0;

function userChoiceRock() {
    userPick = 1;
    alert(userPick)
}

function cpuChoice(){
    opponentchoice = Math.floor(Math.random()* 5) + 1;
    console.log(opponentchoice)
}

Rock.addEventListener("click", () => {
    userChoice(1);
    cpuChoice()
    // checkWinner()
})

function userChoice(choice) {
    userPick = choice;
}

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