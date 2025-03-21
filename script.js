const Rock = document.getElementById("Rock")
const Paper = document.getElementById("Paper")
const Scissors = document.getElementById("Scissors")
const button = document.getElementById("button")
const button1 = document.getElementById("button1")
let userPick = "";

function userChoiceRock() {
    userPick = 1;
        alert(userPick)
}

Rock.addEventListener("click", userChoiceRock)


// let mouse = new Audio('assests/mouse.mp3');

// buttons.addEventListener("click" , annoy);

// function annoy (){
//     mouse.play();
// }

