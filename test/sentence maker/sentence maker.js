/*
https://stackoverflow.com/questions/8889014/setting-vendor-prefixed-css-using-javascript
http://www.java2s.com/ref/javascript/javascript-string-isdigit.html

https://www.youtube.com/results?search_query=spin+wheel+css
https://www.youtube.com/results?search_query=odometer+css

TODO
----
	* select regular, irregular or both
	* add link to wordreference for verb
	* option to show all verbs in lists (and choose ones you want to show)
	
	for future
	----------

	** change amount of verbs shown on wheel
*/

const
regular = [
	'answer',	'arrive',	'ask',		'borrow',	'call',		'carry',	'change',	'clean',	'close',	'count',
	'cover',	'dance',	'decide',	'die',		'dry',		'enjoy',	'explain',	'finish',	'fix',		'follow',
	'guess',	'help',		'imagine',	'improve',	'join',		'jump',		'like',		'listen',	'live',		'look',
	'love',		'move',		'need',		'notice',	'open',		'pass',		'play',		'pull',		'push',		'remember',
	'remove',	'roll',		'share',	'shout',	'smile',	'start',	'stay',		'stop',		'study',	'try',
	'use',		'visit',	'wait',		'walk',		'want',		'watch'
],
past_reg = [
	'answered',	'arrived',	'asked',	'borrowed',	'called',	'carried',	'changed',		'cleaned',	'closed',	'counted',
	'covered',	'danced',	'decided',	'died',		'dried',	'enjoyed',	'explained',	'finished',	'fixed',	'followed',
	'guessed',	'helped',	'imagined',	'improved',	'joined',	'jumped',	'liked',		'listened',	'lived',	'looked',
	'loved',	'moved',	'needed',	'noticed',	'opened',	'passed',	'played',		'pulled',	'pushed',	'remembered',
	'removed',	'rolled',	'shared',	'shouted',	'smiled',	'started',	'stayed',		'stopped',	'studied',	'tried',
	'used',		'visited',	'waited',	'walked',	'wanted',	'watched'
],
irregular = [
	'be',			'begin',	'bend',		'bite',		'break',	'bring',	'build',	'buy',	'choose',	'come',
	'cut',			'do',		'draw',		'drink',	'eat',		'fall',		'feel',		'find',	'fly',		'forget',
	'get',			'give',		'go',		'have',		'hear',		'hide',		'hit',		'know',	'learn',	'leave',
	'lend',			'lose',		'make',		'put',		'read',		'ride',		'run',		'say',	'see',		'sell',
	'sing',			'sit',		'sleep',	'speak',	'stand',	'swim',		'take',		'tell',	'think',	'throw',
	'understand',	'wear',		'win',		'write'
],
past_irreg = [
	''/*SPECIAL*/,	'began',	'bent',		'bit',		'broke',	'brought',	'built',	'bought',	'chose',	'came', // see helpBtn.onclick function
	'cut',			'did',		'drew',		'drank',	'ate',		'fell',		'felt',		'found',	'flew',		'forgot',
	'got',			'gave',		'went',		'had',		'heard',	'hid',		'hit',		'knew',		'learnt',	'left',
	'lent',			'lost',		'made',		'put',		'read',		'rode',		'ran',		'said',		'saw',		'sold',
	'sang',			'sat',		'slept',	'spoke',	'stood',	'swam',		'took',		'told',		'thought',	'threw',
	'understood',	'wore',		'won',		'wrote'
],
regularsLength = regular.length,
all_indexes = [],
inUseVerbs = [],
inUsePasts = [],
wheel = document.getElementById('wheel'),
segmentTexts = Array.from(document.getElementsByTagName('span')),
timeInner = document.getElementById('time-inner'),
formInner = document.getElementById('form-inner'),
spinBtn = document.getElementById('spin-btn'),
helpBtn = document.getElementById('help-btn'),
sentence = document.getElementById('sentence');
		
var
allowClick = true,
clickController,
verb,
past,
time = 'Present',
form = 'Affirmative',
verbSet = 'irregular',
wheelPosition = 0;

selectVerbs();

function selectVerbs() {
	if (allowClick === true) {
		sentence.innerHTML = '';
		
		let
		random,
		index,
		currentSet,
		currentPasts;
	
		while (inUseVerbs.length > 0) {
			inUseVerbs.pop();
			inUsePasts.pop();
		}
		while (inUseVerbs.length < 20) { // TODO change here if using a different amount of verbs on the wheel
			if (all_indexes.length === 0) {
				addIndexes();
			}
			do {
				random = Math.floor(Math.random() * all_indexes.length);
				index = all_indexes[random];
				
				if (verbSet === 'regular') {
					currentSet = regular;
					currentPasts = past_reg;
				}
				else if (verbSet === 'irregular') {
					currentSet = irregular;
					currentPasts = past_irreg
				}
			}
			while (inUseVerbs.includes(currentSet[index%regularsLength]));
			
			all_indexes.splice(random,1);
			
			inUseVerbs.push(currentSet[index%regularsLength]);		// update if using both 'regular' and ''irregular verbs
			inUsePasts.push(currentPasts[index%regularsLength]);	// update if using both 'regular' and ''irregular verbs
		}
	
		segmentTexts.forEach((text, index) => {
			text.innerHTML = inUseVerbs[index];
		});
	
		verb = inUseVerbs[wheelPosition];
		past = inUsePasts[wheelPosition];
	}
}

function addIndexes() {
	if (verbSet === 'both') {
		// TODO code to add both indexes
	}
	else {
		let numberOfVerbs = verbSet === 'regular' ? regular.length : irregular.length;
		
		for (let i = 0; i < numberOfVerbs; i++) {
			all_indexes.push(i);
		}
	}
}

function toggleTime(timeToToggle) {
	toggle(timeToToggle, timeInner, 'time');
}

function toggleForm(formToToggle) {
	toggle(formToToggle, formInner, 'form');
}

function toggle(itemToToggle, inner, type) {
	let
	innerElements = Array.from(inner.children),
	array = [];
	
	innerElements.forEach( element => {
		array.push(element.children[0].innerHTML)
	});
	
	if (array.includes(itemToToggle)) {
		if (array.length > 1) {
			let arrayIndex = array.indexOf(itemToToggle);
			array.splice(arrayIndex, 1);
			
			innerElements.forEach( (child, index) => {
				if (child.children[0].innerHTML === itemToToggle) {
					inner.removeChild(child);
				}
			});
			
			if (type === 'time') {
				time = inner.children[0].children[0].innerHTML;
			}
			else {
				form = inner.children[0].children[0].innerHTML;
			}
		}
		else {
			document.getElementById(itemToToggle).checked = true;
		}
	}
	else {
		if (array.length === 1) {
			appendItem(inner, type, itemToToggle);
		}
		else {
			if (type === 'time') {
				if ((time === 'Past' && itemToToggle === 'Future') || (time === 'Present' && itemToToggle === 'Past') || (time === 'Future' && itemToToggle === 'Present')) {
					appendItem(inner, type, itemToToggle);
				}
				else {
					insertItem(inner, type, itemToToggle);
				}
			}
			else {
				if ((form === 'Affirmative' && itemToToggle === 'Question') || (form === 'Negative' && itemToToggle === 'Affirmative') || (form === 'Question' && itemToToggle === 'Negative')) {
					appendItem(inner, type, itemToToggle);
				}
				else {
					insertItem(inner, type, itemToToggle);
				}
			}
		}
	}
}

function appendItem(inner, type, text) {
	var newDiv = document.createElement('DIV');
	newDiv.classList.add(`${type}-div`);
	inner.appendChild(newDiv);

	var newText = document.createElement('P');
	newText.classList.add('text');
	newText.innerHTML = text;
	newDiv.appendChild(newText);
}

function insertItem(inner, type, text) {
	let lastText = inner.children[1].children[0].innerHTML;
	inner.children[1].children[0].innerHTML = text;
	appendItem(inner, type, lastText);
}

spinBtn.onclick = () => {
	if (allowClick === true) {
		allowClick = false;
		sentence.innerHTML = '';

		let
		numberOfRotations = Math.floor(Math.random() * 18) + 61,	// 61 : 3 full turns + [/1-19/]
		timeSpins = timeInner.childElementCount > 1 ? Math.floor(Math.random() * 3) + 6 : 0,
		formSpins = formInner.childElementCount > 1 ? Math.floor(Math.random() * 3) + 6 : 0,
		wheelTime = numberOfRotations * 0.04,
		timeTime = Math.ceil( (timeSpins * 0.35) * 100) / 100,
		formTime = Math.ceil( (formSpins * 0.35) * 100) / 100;
		
		if (timeTime > wheelTime || formTime > wheelTime) {
			clickController = timeSpins >= formSpins ? 'time' : 'form';
		}
		else {
			clickController = 'wheel';
		}
		
		rotate(numberOfRotations);
		moveTimeDivs(timeSpins);
		moveFormDivs(formSpins);
	}
};

function rotate(rotations) {
	if (rotations === 0) {
		wheelPosition = (20 - ((getDegrees(wheel.style.transform)%360) / 18)) % 20;
		
		verb = inUseVerbs[wheelPosition];
		past = inUsePasts[wheelPosition];
		
		if (clickController === 'wheel') {
			allowClick = true;
		}
	}
	else {
		let rotation = getDegrees(wheel.style.transform);
		rotation += 18;
		wheel.style.transform = `rotate(${rotation}deg)`;
		
		setTimeout ( () => {
			rotate(rotations-1);
		}, 40);
	}
}

// .filter() ??
function getDegrees(string) {
	let
	charArray = string.split(''),
	digitString = '';
				
	charArray.forEach( char => {
		if (isDigit(char)) {
			digitString += char;
		}
	});
	return Number (digitString);
}

function isDigit(char) {
	return /[0-9]/.test(char);
}


function moveTimeDivs(number) {
	if (number === 0) {
		time = Array.from(document.getElementsByClassName(`time-div`))[0].children[0].innerHTML;
		if (clickController === 'time') {
			allowClick = true;
		}
		return;
	}
	else {
		moveDivs('time', timeInner, number);
	}
}

function moveFormDivs(number) {
	if (number === 0) {
		form = Array.from(document.getElementsByClassName(`form-div`))[0].children[0].innerHTML;
		if (clickController === 'form') {
			allowClick = true;
		}
		return;
	}
	else {
		moveDivs('form', formInner, number);
	}
}

function moveDivs(type, inner, number) {
	let
	div = Array.from(document.getElementsByClassName(`${type}-div`))[0],
	text = div.children[0].innerHTML;

	div.style.marginTop = '-5.4vw';
	
	appendItem(inner, type, text);
	
	setTimeout ( () => {
		inner.removeChild(div);
		if (type === 'time') {
			moveTimeDivs(number-1);
		}
		else {
			moveFormDivs(number-1);
		}
	}, 350);
}

helpBtn.onclick = () => {
	if (allowClick === true) {
		if (time === 'Present') {
			if (form === 'Affirmative') {
				sentence.innerHTML = verb === 'be' ? 'I am ......' : `I ${verb} ......`;
			}
			else if (form === 'Negative') {
				sentence.innerHTML = verb === 'be' ? 'I am not ......' : `I don't ${verb} ......`;
			}
			else {
				sentence.innerHTML = verb === 'be' ? 'Are you ...... ?' : `Do you ${verb} ...... ?`;
			}
		}
		else if (time === 'Past') {
			if (form === 'Affirmative') {
				sentence.innerHTML = verb === 'be' ? 'I was ......' : `I ${past} ......`;
			}
			else if (form === 'Negative') {
				sentence.innerHTML = verb === 'be' ? 'I was not ......' : `I didn't ${verb} ......`;
			}
			else {
				sentence.innerHTML = verb === 'be' ? 'Were you ...... ?' : `Did you ${verb} ...... ?`;
			}
		}
		else {
			if (form === 'Affirmative') {
				sentence.innerHTML = `I will ${verb} ......`;
			}
			else if (form === 'Negative') {
				sentence.innerHTML = `I won't ${verb} ......`;
			}
			else {
				sentence.innerHTML = `Will you ${verb} ...... ?`;
			}
		}
	}
}
