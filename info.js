var
infoDiv = document.getElementById('info'),
infoHeader = document.getElementById('info-header'),
infoText = document.getElementById('info-text');

function aboutInfo() {
	infoDiv.style.display = 'flex';
	infoHeader.innerHTML = '<strong>About ESL games online</strong>';
	infoText.innerHTML = 
	'<strong>ESL games online</strong> is a collection of games designed for use by teachers in ESL classrooms. They can be ' +
	'used as a complement to other teaching methods and materials. The games are themed, so you can use them as a fun ' +
	'activity while studying a partictular topic.<br><br>Currently the collection only has a few board games, but with time ' +
	'it will grow to include both new themes for the board games and completely new games.';
}

function contactInfo() {
	infoDiv.style.display = 'flex';
	infoHeader.innerHTML = '<strong>Contact info</strong>';
	infoText.innerHTML = 
	'If you have any questions or comments about <strong>ESL games online</strong> please feel free to send an e-mail to <strong>inglesconmark@gmail.com</strong> .' +
	'<br><br>I would love to hear your suggestions about what would make the site better and any other improvements or additions that could be included.';
}

function termsInfo() {
	infoDiv.style.display = 'flex';
	infoHeader.innerHTML = '<strong>Terms of use</strong>';
	infoText.innerHTML = '';
}

function closeInfo() {
	infoDiv.style.display = 'none';
}