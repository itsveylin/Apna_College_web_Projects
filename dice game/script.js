const dice = document.getElementById("dice");
const result = document.getElementById("result");

function rollDice(){

    let random = Math.floor(Math.random() * 6) + 1;

    switch(random){

        case 1:
            dice.style.transform =
            "rotateX(0deg) rotateY(0deg)";
            break;

        case 2:
            dice.style.transform =
            "rotateX(90deg) rotateY(0deg)";
            break;

        case 3:
            dice.style.transform =
            "rotateY(-90deg)";
            break;

        case 4:
            dice.style.transform =
            "rotateY(90deg)";
            break;

        case 5:
            dice.style.transform =
            "rotateX(-90deg)";
            break;

        case 6:
            dice.style.transform =
            "rotateY(180deg)";
            break;
    }

    result.innerText = `You rolled ${random} 🎉`;
}
