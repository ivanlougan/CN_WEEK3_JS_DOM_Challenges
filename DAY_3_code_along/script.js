
const boxes = document.querySelectorAll(".box");
const colorToGuess = document.getElementById("colorToGuess");
const newColBtn = document.getElementById("newColBtn");
const scoreDisplay = document.getElementById("score");
const winMsg = document.getElementById("isCorrect");


let newColor = null;
let score = 0;
let guessing = false;


boxes.forEach( (box) => {
    box.addEventListener("click", () => {

        if(guessing) {
            if(newColor === box.style.backgroundColor) {
                correct();
            } else {
                box.style.opacity = 0;
            }
        } 
    })
});


const correct = () => {
    guessing = false;
    score++;
    scoreDisplay.textContent = score;
    winMsg.textContent = "Correct!";

    for( let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = newColor;
        boxes[i].style.opacity = 1;
    }
};


const resetGame = () => {
    guessing = true;
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.opacity = 1;
        boxes[i].style.backgroundColor = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;
    }

let itemToGuess = boxes[ Math.floor(Math.random() * boxes.length) ];

newColor = itemToGuess.style.backgroundColor;
colorToGuess.textContent = newColor;

winMsg.textContent = "";
}

resetGame();

newColBtn.addEventListener("click", resetGame);