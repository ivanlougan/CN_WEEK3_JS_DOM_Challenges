const key = document.getElementById("key");
const intro = document.querySelector("#intro");
const codeInfo = document.querySelector("#codeInfo");
const keyInfo = document.querySelector("#keyInfo");
const charCodeInfo = document.querySelector("#charCodeInfo");
const firstSection = document.querySelector(".firstSection");


document.addEventListener('keypress', (event) => {
    key.textContent = event.key;
    intro.style.display = "none";
    firstSection.style.display = "block";
    codeInfo.textContent = event.code;
    keyInfo.textContent = event.key;
    charCodeInfo.textContent = event.timeStamp;
})
