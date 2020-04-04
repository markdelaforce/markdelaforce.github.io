var
inUseItems = Array.from(document.getElementsByClassName('in-use')),
innerElements = Array.from(document.getElementsByClassName('inner-element')),
backgroundPics = Array.from(document.getElementsByClassName('background-pic')),
titles = Array.from(document.getElementsByClassName('title'));

inUseItems.forEach((item, index) => {
	item.addEventListener('mouseover', () => {
		innerElements[index].style.opacity = '1';
		titles[index].style.fontSize = '3vw';
		backgroundPics[index].style.height = '92%';
		backgroundPics[index].style.width = '92%';
		backgroundPics[index].style.top = '4%';
		backgroundPics[index].style.left = '4%';
		
	});
	item.addEventListener('mouseout', () => {
		innerElements[index].style.opacity = '0.8';
		titles[index].style.fontSize = '2.9vw';
		backgroundPics[index].style.height = '90%';
		backgroundPics[index].style.width = '90%';
		backgroundPics[index].style.top = '5%';
		backgroundPics[index].style.left = '5%';
	});
});

function boardgame(theme) {
	sessionStorage.setItem('theme', theme);
	window.location.href ='games/boardgames/title.html';
}
