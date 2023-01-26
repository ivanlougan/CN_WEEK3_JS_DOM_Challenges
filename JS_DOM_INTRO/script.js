// console.log( document.getElementById("listWrapper") );

// console.log( document.querySelector("li") );

// console.log( document.getElementsByTagName("li"));

// console.log( document.querySelectorAll(".listItem")); // always returns array

// const heading = document.querySelector("h1");

// console.log ( heading.textContent );

// heading.textContent = "New Value"

const heading = document.getElementById("heading");

// change heading to upper case after click
heading.addEventListener("click", () => {
    heading.textContent = heading.textContent.toUpperCase();    
});

 
const headingTwo = document.getElementById("headingTwo");

// change between two values with background colour as well
headingTwo.addEventListener("click", () => {
    if(headingTwo.textContent === "CLICKED") {
        headingTwo.textContent = "JS DOM";
        headingTwo.style.backgroundColor = "red";
    } else {
        headingTwo.textContent = "CLICKED";
        headingTwo.style.backgroundColor = "blue";
    }
});


const paragraph = document.getElementById("randomText");

paragraph.addEventListener('mouseover', () => {
    paragraph.style.color = "red";
});


const headingThree = document.getElementById("headingThree");
const input = document.getElementById("inputBox");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener('click', () => {
    headingThree.textContent = input.value;
});


const image = document.getElementById("myImage");

image.addEventListener('mouseover', () => {
    image.src = "./JS_DOM_INTRO/cat.jpg";
});
image.addEventListener('mouseout', () => {
    image.src = "./JS_DOM_INTRO/steve.jfif";
});




