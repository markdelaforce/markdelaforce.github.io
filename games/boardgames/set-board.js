var
pathToImages = sessionStorage.pathToImages,
gameCounters = sessionStorage.gameCounters.split(','),
players = gameCounters.length,
z_index = players+1,
counter_z = players,
squares = Array.from(document.getElementsByClassName('square')),
gameBoard = document.getElementById('game-board'),
endIndex = squares.length - 1,
leftStart,
leftPosition,
leftDecrease,
leftLimit,
topPosition = 3.5,
secret_index = 0,
allow_secret_typing = true,
playerIndexes = [],
playerScores = [];

squares.forEach((square, index) => {
	setBackground(square, index);
	setInnerHTML(square, index);
});

showSquare(0);
setCounterPositions();

gameCounters.forEach((gameCounter, index) => {
	var counter = document.createElement('img');
	counter.src = pathToImages + gameCounters[index] + '.png';
	counter.classList.add('counter');
	placeCounter(counter);
	gameBoard.appendChild(counter);
	makeDraggable(counter);
	playerIndexes.push(index);
	playerScores.push(0);
});

function setBackground(square, index) {
	if (index%12 === 0) {
		square.style.background = '#88d8b0';
	}
	else if (index%12 === 2) {
		square.style.background = '#ff4d4d';
	}
	else if (index%12 === 4) {
		square.style.background = '#4cadcc';
	}
	else if (index%12 === 6) {
		square.style.background = '#ffcc5c';
	}
	else if (index%12 === 8) {
		square.style.background = '#586ba4';
	}
	else if (index%12 === 10) {
		square.style.background = '#e65c00';
	}
	else {
		square.style.background = '#fff';
	}
}

function setInnerHTML(square, index) {
	if (index === 0) {
		square.innerHTML = 'START';
	}
	else if (index === endIndex) {
		square.innerHTML = 'FINISH';
	}
	else {
		square.innerHTML = index;
	}
}

function showSquare(index) {
	squares[index].style.visibility = 'visible';
	if (index === endIndex) {
		document.getElementById('question-buttons').style.opacity = '1';
		document.getElementById('player-display').style.opacity = '1';
		document.getElementById('dice-roller').style.opacity = '1';
		document.getElementById('info').style.opacity = '1';
		return;
	}
	setTimeout ( () => {
		showSquare(index+1);
	}, 25);
}

function setCounterPositions() {
	if (players > 6) {
		positions(11, 2.5, 1);
	}
	else if (players > 4) {
		positions(11, 3.5, 0.5);
	}
	else if (players > 2) {
		positions(10, 5, 0);
	}
	else {
		topPosition = 5;
		positions(10, 4, 2);
	}
}

function positions(start, increase, limit) {
	leftStart = start;
	leftPosition = start;
	leftDecrease = increase;
	leftLimit = limit;
}

function placeCounter(counter) {
	counter.style.top = topPosition + 'vw';
	counter.style.left = leftPosition + 'vw';
	leftPosition -= leftDecrease;
	if (leftPosition === leftLimit) {
		leftPosition = leftStart;
		topPosition += 4;
	}
	counter.style.zIndex = counter_z--;
}

var
secret_display = document.getElementById('secret'),
secret_list = document.getElementById('secret-list');
document.addEventListener('keyup', secretText);
secret_display.addEventListener('click', closeSecretText),
last_question = questions.length - 1;

questions.forEach((question, i) => {
	var entry = question.split('<br><br>');
	entry.forEach((part, index) => {
		var text = document.createElement('P');
		text.innerHTML = part;
		secret_list.appendChild(text);
	});
	if (i !== last_question) {
		var line = document.createElement('P');
		line.innerHTML = '---';
		secret_list.appendChild(line);
	}
});

function secretText(event) {
	if (allow_secret_typing === true) {
		if (event.keyCode === 83) {
			secret_index = 1;
		}
		else if (event.keyCode === 69 && secret_index === 1) {
			secret_index = 2;
		}
		else if (event.keyCode === 67 && secret_index === 2) {
			secret_index = 3;
		}
		else if (event.keyCode === 82 && secret_index === 3) {
			secret_index = 4;
		}
		else if (event.keyCode === 69 && secret_index === 4) {
			secret_index = 5;
		}
		else if (event.keyCode === 84 && secret_index === 5) {
			openSecretText();
		}
		else {
			secret_index = 0;
		}
	}
}
function openSecretText() {
	allow_secret_typing = false;
	secret_display.style.display = 'flex';
}

function closeSecretText() {
	secret_display.style.display = 'none';
	allow_secret_typing = true;
}
