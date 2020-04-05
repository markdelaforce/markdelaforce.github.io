var
dice = 6,
player = 0,
allowRoll = true,
allowQuestion = false,
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
questions = [
	'What time do you usually have breakfast ?',
	'What time do you usually have lunch ?',
	'What time do you usually have dinner ?',
	'What do you usually have for breakfast ?',
	'What did you have for lunch yesterday ?',
	'What did you have for dinner yesterday ?',
	'What did you have for lunch today ?',
	'What will you have for dinner today ?',
	'Have you ever tried Chinese food ?',
	'Have you ever tried Indian food ?',
	'Do you like Italian food ?',
	'Do you like fruits and vegetables ?',
	'Which are your favourite desserts ?',
	'Which are your favourite drinks ?',
	'Which is your favourite meat ?',
	'Which is your favourite ice-cream flavour ?',
	'How often do you eat Take-away food ?',
	'How often do you eat at a restaurant ?',
	'Are there any foods you hate ?',
	'How many healthy foods can you think of ?',
	'How many unhealthy foods can you think of ?',
	'How many pizza toppings can you think of ?',
	'How many hamburger ingredients can you think of ?',
	'How many vegetables can you name ?',
	'How many fruits can you name ?',
	'What foods do you eat at a Birthday party ?',
	'What foods do you eat at Christmas ?',
	'What foods do you eat at the cinema ?',
	'What is cheese made of ?',
	'What is yoghurt made of ?',
	'Where do apples grow ?',
	'What do rabbits eat ?'
],
qsLength = questions.length,
qsIndexes = [];

function addAllIndexes() {
	for (let i = 0; i < qsLength; i++) {
		qsIndexes.push(i);
	}
}

function rollDice() {
	if (allowRoll === true) {
		rollSound.play();
		playerImage.src = pathToImages + gameCounters[player++] + '.png';
		player = player % players;
		diceBtn.classList.remove('working');
		diceBtn.classList.add('not-working');
		allowRoll = false;
		nextRoll(22);
	}
}

function nextRoll(rollsLeft) {
	if (rollsLeft === 0) {
		setTimeout ( () => {
			diceBtn.classList.remove('not-working');
			diceBtn.classList.add('working');
			allowRoll = true;
			return;
		}, 5000);
	}
	else {
		if (rollsLeft === 1) {
			allowQuestion = true;
			questionButtons.forEach(button => {
				button.classList.add('btn-in-use');
			});
		}
		setTimeout ( () => {
			let random = Math.floor(Math.random() * 5);
			dice = ((dice + random) % 6) + 1;
			diceImg.src = 'images/game/' + dice + '.png';
			nextRoll(rollsLeft-1);
		}, 100);
	}
}

function askQuestion(color) {
	if (allowQuestion === true) {
		if (qsIndexes.length === 0) {
			addAllIndexes();
		}
		let
		random = Math.floor(Math.random() * qsIndexes.length),
		qIndex = qsIndexes.splice(random, 1)[0];
		
		qText.innerHTML = questions[qIndex];
		question.style.visibility = 'visible';
		question.style.zIndex = z_index+1;
		question.style.background = color;
		outer.style.visibility = 'visible';
		outer.style.zIndex = z_index+2;
		qNumber.innerHTML = qIndex+1;
	}
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
		allowQuestion = false;
		questionButtons.forEach(button => {
			button.classList.remove('btn-in-use');
		});
		qText.innerHTML = '';
		qNumber.innerHTML = '';
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
