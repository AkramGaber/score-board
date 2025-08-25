let scoreH = document.getElementById("home-score");
let scoreG = document.getElementById("guest-score");
let homeScore = 0
let guestScore = 0


function onePointH() {
    homeScore += 1;
    scoreH.textContent = homeScore;
}

function twoPointH() {
    homeScore += 2;
    scoreH.textContent = homeScore;
}

function threePointH() {
    homeScore += 3;
    scoreH.textContent = homeScore;
}


function onePointG() {
    guestScore += 1;
    scoreG.textContent = guestScore;
}

function twoPointG() {
    guestScore += 2;
    scoreG.textContent = guestScore;
}

function threePointG() {
    guestScore += 3;
    scoreG.textContent = guestScore;
}