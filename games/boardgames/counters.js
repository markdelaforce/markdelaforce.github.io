var
theme = sessionStorage.theme,
choices = Array.from(document.getElementsByClassName('choice')),
images = Array.from(document.getElementsByClassName('image')),
texts = Array.from(document.getElementsByClassName('text')),
selectedDisplay = document.getElementById('selected-display'),
startBtn = document.getElementById('start-btn'),
pathToImages = 'images/',
playerPieces,
selectedElements = [],
selectedIndexes = [],
players = 0;

switch (theme) {
case 'Food':
	pathToImages += 'food/';
	playerPieces =	['apple', 'banana', 'carrot', 'cheese', 'egg',  'juice', 'pepper', 'sausage'];
	break;
}

images.forEach((image, index) => {
	image.src = pathToImages + playerPieces[index] + '.png';
});

texts.forEach((text, index) => {
	text.innerHTML = playerPieces[index];
});

choices.forEach((choice, index) => {
	choice.setAttribute('onclick', 'choose(' + index + ')');
});

function choose(index) {
	if (!(selectedIndexes.includes(index))) {
		selectedIndexes.push(index);
		toggleChoice(index, 'off');
	
		var selectedItem = document.createElement('div');
		selectedItem.classList.add('pic-holder', 'selectable');
		selectedDisplay.appendChild(selectedItem);		
		selectedElements.push(selectedItem);
		selectedItem.setAttribute('onclick', 'remove(' + index + ')');
			
		var image = document.createElement('img');
		image.classList.add('image');
		image.src = pathToImages + playerPieces[index] + '.png';
		selectedItem.appendChild(image);
		
		players++;
		if (players === 2) {
			startBtn.classList.add('ready-btn');
		}
	}
}

function remove(index) {
	for (let i = 0; i < players; i++) {
		let word = selectedElements[i].childNodes[0].src.split('/')[11].split('.')[0];
		if (word === playerPieces[index]) {
			selectedDisplay.removeChild(selectedElements[i]);
			selectedElements.splice(i, 1);
			break;
		}
	}
	selectedIndexes = selectedIndexes.filter(i => { return i !== index} );
	toggleChoice(index, 'on');
	players--;
	if (players === 1) {
		startBtn.classList.remove('ready-btn');
	}
}

function toggleChoice(index, toggle) {
	choices[index].style.opacity = toggle === 'off' ? '0.1' : '1';
	choices[index].classList.remove((toggle === 'off') ? 'selectable' : 'selected');
	choices[index].classList.add((toggle === 'off') ? 'selected' : 'selectable');
}

function start() {
	if (players >= 2) {
		let gameCounters = [];
		selectedIndexes.forEach(index => {
			gameCounters.push(playerPieces[index]);
		});
		sessionStorage.setItem('pathToImages', pathToImages);
		sessionStorage.setItem('gameCounters', gameCounters);
		window.location.href = 'game.html';
	}
}
