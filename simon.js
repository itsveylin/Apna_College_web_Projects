let gamesequence = [];
let playersequence = [];
let level = 0;
let started = false;
document.addEventListener("keydown", function () {
    if (!started) {
      console.log("Game started");
        started = true;
    } }  );
function nextSequence() {
    playersequence = [];
    level++;
    document.querySelector("h1").textContent = "Level " + level;
    let randomnumber = Math.floor(Math.random() * 4) + 1;
    gamesequence.push(randomnumber);
    console.log(gamesequence);
}