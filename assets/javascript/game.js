
function getRandomshoot() {
    var randomnum = Math.floor((Math.random() * 10) + 1);
    return randomnum;
}

function play() {
    var audio = new Audio('black-ops-2-hd-dsr-50-gun-sound-hq-download.mp3')
    audio.play();
};

let team1_shootButton = document.querySelector("#teamone-shoot-button");
let team1_shots = document.querySelector("#teamone-numshots");
let team1_goals = document.querySelector("#teamone-numgoals");

team1_shootButton.addEventListener("click", function () {

    console.log("team1_shots");
    team1_shots.innerHTML = Number(team1_shots.innerHTML) + 1;

    var result = "f";
    var rnum = getRandomshoot();

    if (rnum == 2 || rnum == 7)
        result = "p";

    if (result == "p") {
        console.log("team1_goals");
        team1_goals.innerHTML = Number(team1_goals.innerHTML) + 1;
    }
    play();
})

let team2_shootButton = document.querySelector("#teamtwo-shoot-button");
let team2_shots = document.querySelector("#teamtwo-numshots");
let team2_goals = document.querySelector("#teamtwo-numgoals");

team2_shootButton.addEventListener("click", function () {

    console.log("team2_shots");
    team2_shots.innerHTML = Number(team2_shots.innerHTML) + 1;

    var result = "f";
    var rnum = getRandomshoot();

    if (rnum == 4 || rnum == 7)
        result = "p";

    if (result == "p") {
        console.log("team2_goals");
        team2_goals.innerHTML = Number(team2_goals.innerHTML) + 1;
    }

    play();
})


/*

let count = 0;
const resets = document.querySelector("#num-reset");
const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", function () {


    if (console.log("team1_goal"));
    let team1_goal = Number("teamone- numgoals".innerHTML) * 0;
    ("teamone-numgoals".innerHTML) = "team1_goal";

    if (console.log("team2_goal"));
    let team2_goal = Number("teamtwo - numgoals".innerHTML) * 0;
    ("teamtwo-numgoals".innerHTML) = "team2_goal";



})*/
let resetButton = document.querySelector("#reset-button")


resetButton.addEventListener("click", function () {

    console.log("reset team1 shot");
    team1_shots.innerHTML = Number(team1_shots.innerHTML) * 0;
    play();

    console.log("reset team2 shot");
    team2_shots.innerHTML = Number(team2_shots.innerHTML) * 0;
    play();

    console.log("reset team1 goal");
    team1_goals.innerHTML = Number(team1_goals.innerHTML) * 0;
    play();

    console.log("reset team2 goal");
    team2_goals.innerHTML = Number(team2_goals.innerHTML) * 0;
    play();


})



