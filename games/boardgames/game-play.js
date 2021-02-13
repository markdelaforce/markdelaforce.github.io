var
dice = 6,
player = players - 1,
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
searchButton = document.getElementById('search-btn'),
buttonShowing = false,
removeOrCancel = false;

playerImage.addEventListener('click', () => {
	allowRoll = false;
	removeOrCancel = true;
	removeDiv.style.display = 'flex';
	removeDiv.style.zIndex = ++z_index;
	document.getElementById('player-name').innerHTML = playerImage.src.split('/')[11].split('.')[0].replace('%20', ' ');
});

function addAllIndexes() {
	for (let i = 0; i < qsLength; i++) {
		qsIndexes.push(i);
	}
}

function rollDice() {
	if (allowRoll === true) {
		player = (player + 1) % players;
		rollSound.play();
		if (players > 0) {
			playerImage.src = pathToImages + gameCounters[player] + '.png';
		}
		else {
			playerImage.src = 'images/game/blank.png';
		}
		diceBtn.classList.remove('working');
		diceBtn.classList.add('not-working');
		allowRoll = false;
		nextRoll(22);
	}
	else if (removeOrCancel === true) {
		playBeep();
	}
}

function nextRoll(rollsLeft) {
	if (rollsLeft === 0) {
		setTimeout ( () => {
			diceBtn.classList.remove('not-working');
			diceBtn.classList.add('working');
			if (removeOrCancel === false) {
				allowRoll = true;
			}
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
	if (removeOrCancel === true) {
		playBeep();
	}
	else {
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
}

function searchAnswer() {
	let searchIndex = indexesForSearch.indexOf(qIndex);
	window.open(`https://www.google.com/search?q=${searchTerms[searchIndex]}`);
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

function removePlayer() {
	for (let i = 0; i < players; i++) {
		if (i === player) {
			gameCounters.splice(i, 1);
			break;
		}
	}
	players--;
	player--;
	clearRemove();
}

function clearRemove() {
	removeDiv.style.display = 'none';
	removeOrCancel = false;
	allowRoll = true;
}

function playBeep() {
	let beep = new Audio ();
	beep.src = 'error.wav';
	beep.play();
}
