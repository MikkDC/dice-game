// set variable for dice roll, total score and totel number of rolls (maybe also best score=least rolls)

let totalScore = 0;

const showScore = document.getElementById("showScore");
const diceImage = document.getElementById("diceImage");
const rollDice = document.getElementById("rollDice");

rollDice.addEventListener("click", () => {
	let currentRoll = Math.floor(Math.random() * 6) +1;
	diceImage.src = `img/dice${currentRoll}.png`;

	totalScore += currentRoll;
	showScore.textContent = totalScore;

	if (totalScore >= 20) {
		showScore.textContent = `${totalScore} - You Win!`;
		
		totalScore = 0;
    } 
    else if (currentRoll == 1) {
			showScore.textContent = `${totalScore} - Sorry, You lose!`;
			
	
			totalScore = 0;
        }
	
});



