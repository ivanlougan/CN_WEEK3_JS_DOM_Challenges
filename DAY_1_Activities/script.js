const image = document.querySelector("#image");
const button = document.getElementById("button")

button.addEventListener('click', () => {

    if (image.style.display === "none") {
        image.style.display = "block"
    } else {
    image.style.display = "none";
    }
});


// a2


const imageToChange = document.getElementsByClassName("imageToChange")[0];
const inputImg = document.querySelector(".inputImg");
const submitImg = document.getElementById("submitImg");

submitImg.addEventListener('click', () => {
    imageToChange.src = inputImg.value;

    inputImg.value= "";
})



// a3



const inputColor = document.querySelector(".inputColor");
const submitColor = document.getElementById("submitColor");
const headingThree = document.getElementById("headingThree");

submitColor.addEventListener('click', () => {
    headingThree.style.color = inputColor.value;
});



// a4

const coorX = document.getElementById("coorX");
const coorY = document.getElementById("coorY");


document.addEventListener("click", (event) => {

    coorX.textContent = event.clientX;
    coorY.textContent = event.clientY;
    
});





