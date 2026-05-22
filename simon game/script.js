const btns = ["red", "yellow", "green", "blue"];

let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

const h2 = document.querySelector("h2");
const allBtns = document.querySelectorAll(".btn");


// START GAME

document.addEventListener("keypress", () => {

    if (!started) {
        started = true;
        levelUp();
    }

});


// LEVEL UP

function levelUp() {

    userSeq = [];
    level++;

    h2.innerText = `Level ${level}`;

    const randomColor = btns[Math.floor(Math.random() * 4)];

    gameSeq.push(randomColor);

    const randomBtn = document.querySelector(`#${randomColor}`);

    flashBtn(randomBtn, "flash");
}


// BUTTON FLASH

function flashBtn(btn, className) {

    btn.classList.add(className);

    setTimeout(() => {
        btn.classList.remove(className);
    }, 250);
}


// USER CLICK

function btnPress() {

    const btn = this;

    flashBtn(btn, "userflash");

    const userColor = btn.id;

    userSeq.push(userColor);

    checkAnswer(userSeq.length - 1);
}


// CHECK ANSWER

function checkAnswer(index) {

    if (userSeq[index] === gameSeq[index]) {

        if (userSeq.length === gameSeq.length) {

            setTimeout(levelUp, 800);

        }

    } else {

        h2.innerHTML = `Game Over! Score: <b>${level}</b><br>Press any key to restart`;

        wrongAnimation();

        resetGame();
    }
}


// WRONG ANIMATION

function wrongAnimation() {

    const container = document.querySelector(".btn-container");

    container.classList.add("wrong");

    setTimeout(() => {
        container.classList.remove("wrong");
    }, 300);
}


// RESET

function resetGame() {

    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


// EVENT LISTENERS

allBtns.forEach((btn) => {
    btn.addEventListener("click", btnPress);
});