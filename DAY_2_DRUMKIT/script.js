let tom = document.getElementById("tom");
let tink = document.getElementById("tink");
let snare = document.getElementById("snare");
let ride = document.getElementById("ride");
let openhat = document.getElementById("openhat");
let kick = document.getElementById("kick");
let hihat = document.getElementById("hihat");
let clap = document.getElementById("clap");
let boom = document.getElementById("boom");

const allBoxes = document.querySelectorAll("drumKeys");

id.addEventListener("click", () => {
    tom.pause();
    tom.currentTime = 0;
    allBoxes[0] = tom.play();
});
id2.addEventListener("click", () => {
    tink.pause();
    tink.currentTime = 0;
    allBoxes[1] = tink.play();
});
id3.addEventListener("click", () => {
    snare.pause();
    snare.currentTime = 0;
    allBoxes[2] = snare.play();
});
id4.addEventListener("click", () => {
    ride.pause();
    ride.currentTime = 0;
    allBoxes[4] = ride.play();
});
id5.addEventListener("click", () => {
    openhat.pause();
    openhat.currentTime = 0;
    allBoxes[5] = openhat.play();
});
id6.addEventListener("click", () => {
    kick.pause();
    kick.currentTime = 0;
    allBoxes[6] = kick.play();
});
id7.addEventListener("click", () => {
    hihat.pause();
    hihat.currentTime = 0;
    allBoxes[7] = hihat.play();
});
id8.addEventListener("click", () => {
    clap.pause();
    clap.currentTime = 0;
    allBoxes[8] = clap.play();
});
id9.addEventListener("click", () => {
    boom.pause();
    boom.currentTime = 0;
    allBoxes[9] = boom.play();
});


document.addEventListener("keypress", (keyCodeValue) => {
    switch (keyCodeValue.key) {
        case "q":
            tom.pause();
            tom.currentTime = 0;
            tom.play();
          break;  
        case "w":
            tink.pause();
            tink.currentTime = 0;
            tink.play();
            break;
        case "e":
            snare.pause();
            snare.currentTime = 0;
            snare.play();
        case "r":
            ride.pause();
            ride.currentTime = 0;
            ride.play();
            break;  
        case "t":
            openhat.pause();
            openhat.currentTime = 0;
            openhat.play();
            break;
        case "y":
            kick.pause();
            kick.currentTime = 0;
            kick.play();
            break;
        case "u":
            hihat.pause();
            hihat.currentTime = 0;
            hihat.play();
            break;
        case "i":
            clap.pause();
            clap.currentTime = 0;
            clap.play();
            break;
        case "o":
            boom.pause();
            boom.currentTime = 0;
            boom.play();
        default:
            console.log("error");
    }
});