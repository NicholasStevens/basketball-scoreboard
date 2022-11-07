let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
console.log(homeScore);
console.log(guestScore);

let scoreHome = 0;
let scoreGuest = 0;

function addOneHome() {
  console.log("clicked plus 1");
  scoreHome += 1;
  homeScore.textContent = scoreHome;
}

function addTwoHome() {
  console.log("clicked plus 2");
  scoreHome += 2;
  homeScore.textContent = scoreHome;
}

function addThreeHome() {
  console.log("clicked plus 3");
  scoreHome += 3;
  homeScore.textContent = scoreHome;
}

function addOneGuest() {
  console.log("clicked plus 1");
  scoreGuest += 1;
  guestScore.textContent = scoreGuest;
}

function addTwoGuest() {
  console.log("clicked plus 2");
  scoreGuest += 2;
  guestScore.textContent = scoreGuest;
}

function addThreeGuest() {
  console.log("clicked plus 3");
  scoreGuest += 3;
  guestScore.textContent = scoreGuest;
}
