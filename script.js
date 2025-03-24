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

Rock.addEventListener("click", () => {
    userChoice(1);
    // cpuChoice()
    // checkWinner()
})

function userChoice(choice) {
    userPick = choice;
}

function userChoicePaper() {
    userPick = 2;
        alert(userPick)
}

Paper.addEventListener("click", userChoicePaper)

function userChoiceScissors() {
    userPick = 3;
        alert(userPick)
}

Scissors.addEventListener("click", userChoiceScissors)

function userChoicebutton() {
    userPick = 4;
        alert(userPick)
}

button.addEventListener("click", userChoicebutton)

function userChoicebutton1() {
    userPick = 5;
        alert(userPick)
}

button1.addEventListener("click", userChoicebutton1)

// let mouse = new Audio('assests/mouse.mp3');

// buttons.addEventListener("click" , annoy);

// function annoy (){
//     mouse.play();
// }

