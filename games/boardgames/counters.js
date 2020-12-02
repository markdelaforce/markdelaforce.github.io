var
theme = sessionStorage.theme,
choices = Array.from(document.getElementsByClassName('choice')),
images = Array.from(document.getElementsByClassName('image')),
texts = Array.from(document.getElementsByClassName('text')),
selectedDisplay = document.getElementById('selected-display'),
startBtn = document.getElementById('start-btn'),
pathToImages = `images/${theme.toLowerCase()}/`,
playerPieces,
selectedElements = [],
selectedIndexes = [],
players = 0;

switch (theme) {
case 'Food':
	playerPieces =	['apple', 'banana', 'carrot', 'cheese', 'egg',  'juice', 'pepper', 'sausage'];
	break;
	
case 'Space':
	playerPieces =	['alien', 'astronaut', 'comet', 'earth', 'moon',  'planet', 'rocket', 'ufo'];
	break;
	
case 'Sport':
	playerPieces =	['baseball', 'basketball', 'bowling ball', 'cricket ball', 'football', 'golf ball', 'pool ball', 'tennis ball'];
	break;
	
case 'Halloween':
	playerPieces = ['black cat', 'cauldron', 'ghost', 'poison', 'pumpkin', 'tombstone', 'witch\'s hat', 'zombie hand'];
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
			startBtn.classList.remove('not-ready');
			startBtn.classList.add('ready-btn');
		}
	}
}

function remove(index) {
	for (let i = 0; i < players; i++) {
		let word = selectedElements[i].childNodes[0].src.split('/')[7].split('.')[0];
		if (word.includes('%20')) {
			word.replace('%20', ' ');
		}
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
		startBtn.classList.add('not-ready');
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
