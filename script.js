document.addEventListener("DOMContentLoaded", () => {
    const choices = ["rock", "paper", "scissors"];
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 0;
    const maxRounds = 10;

    const resDisplay = document.getElementById("res");
    const scoreDisplay = document.getElementById("score");
    const img = document.querySelectorAll("img");

    img.forEach(button => {
        button.addEventListener("click", () => {
            if (rounds >= maxRounds) {
                resDisplay.textContent = "Game over!";
                return;
            }

            const playerChoice = button.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            
            let result = "";
            console.log(playerChoice, computerChoice);
            if (playerChoice === computerChoice) {
                result = "It's a tie!";

            } else if (
                (playerChoice === "rock" && computerChoice === "scissors") ||
                (playerChoice === "paper" && computerChoice === "rock") ||
                (playerChoice === "scissors" && computerChoice === "paper")
            ) {
                result = "You win!";
                playerScore++;
            } else {
                result = "Computer wins!";
                computerScore++;
            }
            
            rounds++;
            resDisplay.textContent = `Round ${rounds}: ${result} (Computer: ${computerChoice})`;
            scoreDisplay.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

            if (rounds === maxRounds) {
                resDisplay.textContent += playerScore > computerScore 
                    ? "\nGG WP as we say around here 🤝"
                    : playerScore < computerScore
                    ? "\nAhhhhhh you're too bad, noob! 💩"
                    : "\nIt's a draw...";
            }
        });
    });
});
