var
dice = 6,
player = 0,
allowRoll = true,
instructionsShowing = false,
questionButtons = Array.from(document.getElementsByClassName('q-btn')),
diceImg = document.getElementById('dice'),
diceBtn = document.getElementById('dice-btn'),
playerImage = document.getElementById('player-image'),
question = document.getElementById('question'),
inner = document.getElementById('inner'),
qText = document.getElementById('q-text'),
qNumber = document.getElementById('q-number'),
instructionDiv = document.getElementById('instructions'),
closeBtn = document.getElementById('close'),
rollSound = new Audio ('roll sound.mp3'),
qsLength = questions.length,
qsIndexes = [],
qIndex,
exactRoll = true,
end_options = document.getElementById('end-options'),
checkbox_1 = document.getElementById('checkbox-1'),
checkbox_2 = document.getElementById('checkbox-2'),
readyForOptions = false,
searchButton = document.getElementById('search-btn'),
buttonShowing = false;

diceBtn.onmouseover = () => {
	if (readyForOptions === true) {
		readyForOptions = null;
		end_options.style.display = 'flex';
		end_options.style.zIndex = z_index + 1;
		document.getElementById('player-img-1').src = `images/${pathToImages.split('/')[1]}/${gameCounters[player]}.png`
		document.getElementById('player-img-2').src = `images/${pathToImages.split('/')[1]}/${gameCounters[player]}.png`
	}
}

function addAllIndexes() {
	for (let i = 0; i < qsLength; i++) {
		qsIndexes.push(i);
	}
}

function rollDice() {
	if (allowRoll === true) {
		rollSound.play();
		if (playerIndexes.length > 0) {
			playerImage.src = pathToImages + gameCounters[playerIndexes[player]] + '.png';
		}
		else {
			playerImage.src = 'images/game/blank.png';
		}
		diceBtn.classList.remove('working');
		diceBtn.classList.add('not-working');
		allowRoll = false;
		nextRoll(22);
	}
}

function nextRoll(rollsLeft) {
	if (rollsLeft === 0) {
		setTimeout ( () => {
			let currentIndex = playerIndexes[player];
			diceBtn.classList.remove('not-working');
			diceBtn.classList.add('working');
			if (exactRoll === true) {
				let temp = dice;
				while (playerScores[currentIndex] < 28 && temp > 0) {
					playerScores[currentIndex]++;
					temp--;
				}
				playerScores[currentIndex] -= temp;
				if (playerScores[currentIndex] === 28) {
					removePlayer(currentIndex);
				}
			}
			else {
				playerScores[currentIndex] += dice;
				if (playerScores[currentIndex] >= 28) {
					removePlayer(currentIndex);
				}
			}
			player = (player + 1) % players;
			if (playerScores[player] + 6 >= 28 && readyForOptions === false) {
				readyForOptions = true;
			}
			allowRoll = true;
			return;
		}, 5000);
	}
	else {
		setTimeout ( () => {
			let random = Math.floor(Math.random() * 5);
			dice = ((dice + random) % 6) + 1;
			diceImg.src = 'images/game/' + dice + '.png';
			nextRoll(rollsLeft-1);
		}, 100);
	}
}

function askQuestion(color) {
	if (qsIndexes.length === 0) {
		addAllIndexes();
	}
	let
	random = Math.floor(Math.random() * qsIndexes.length);
	
	qIndex = qsIndexes.splice(random, 1)[0];
	
	qText.innerHTML = questions[qIndex];
	question.style.visibility = 'visible';
	question.style.zIndex = z_index+1;
	question.style.background = color;
	outer.style.visibility = 'visible';
	outer.style.zIndex = z_index+2;
	qNumber.innerHTML = `${qIndex+1} / ${qsLength}`;
	if (indexesForSearch.includes(qIndex)) {
		searchButton.style.display = 'initial';
		buttonShowing = true;
	}
}

function searchAnswer() {
	let searchIndex = indexesForSearch.indexOf(qIndex);
	window.open(`https://www.google.com/?#q=${searchTerms[searchIndex]}`);
}

function hide() {
	question.style.visibility = 'hidden';
	question.style.zIndex = '0';
	outer.style.visibility = 'hidden';
	outer.style.zIndex = '0';
	
	if (instructionsShowing === true) {
		instructionDiv.style.visibility = 'hidden';
		instructionsShowing = false;
	}
	else {
		qText.innerHTML = '';
		qNumber.innerHTML = '';
		
		if (buttonShowing === true) {
			searchButton.style.display = 'none';
			buttonShowing = false;
		}
	}
}

function instructions() {
	instructionsShowing = true;
	instructionDiv.style.visibility = 'visible';
	question.style.visibility = 'visible';
	question.style.zIndex = z_index+1;
	question.style.background = '#fff';
	outer.style.visibility = 'visible';
	outer.style.zIndex = z_index+2;
	closeBtn.style.zIndex = z_index+3;
}

checkbox_1.addEventListener('click', () => {
	exactRoll = true;
	checkbox_1.src = 'images/game/checked.png';
	checkbox_2.src = 'images/game/unchecked.png';
});

checkbox_2.addEventListener('click', () => {
	exactRoll = false;
	checkbox_1.src = 'images/game/unchecked.png';
	checkbox_2.src = 'images/game/checked.png';
});

function closeOptions() {
	end_options.style.display = 'none';
}

function removePlayer(index) {
	for (let i = 0; i < playerScores.length; i++) {
		if (playerIndexes[i] === index) {
			playerIndexes.splice(i, 1);
			break;
		}
	}
	players--;
	player--;
}
