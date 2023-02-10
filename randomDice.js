function onClick() {
  function randomDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  let player1Score = randomDice();
  let player2Score = randomDice();

  document
    .querySelector(".player-1-dice")
    .setAttribute("src", `images/dice${player1Score}.png`);
  document
    .querySelector(".player-2-dice")
    .setAttribute("src", `images/dice${player2Score}.png`);

  var bigHeader = document.querySelector(".big-header");
  if (player1Score > player2Score) {
    bigHeader.textContent = "🚩 Player 1 Wins!";
  } else if (player2Score > player1Score) {
    bigHeader.textContent = "Player 2 Wins! 🚩";
  } else {
    bigHeader.textContent = "Draw!";
  }
}
