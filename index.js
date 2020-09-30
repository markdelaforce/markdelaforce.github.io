var
inUseItems = Array.from(document.getElementsByClassName('in-use')),
itemPics = Array.from(document.getElementsByClassName('item-pic')),
notInUseItems = Array.from(document.getElementsByClassName('not-in-use'));

inUseItems.forEach(item => {
	var
	child = item.children[0],
	size_1 = child.classList[1].substring(1),
	size_2 = (Number (size_1) +2).toString();
	item.addEventListener('mouseover', () => {
		child.style.height = `${size_2}%`;
		child.style.width = `${size_2}%`;
		child.style.opacity = '1';
		
	});
	item.addEventListener('mouseout', () => {
		child.style.height = `${size_1}%`;
		child.style.width = `${size_1}%`;
		child.style.opacity = '0.9';
	});
});

notInUseItems.forEach(item => {
	var child = item.children[0];
	item.addEventListener('mouseover', () => {
		child.style.opacity = '0.5';
		
	});
	item.addEventListener('mouseout', () => {
		child.style.opacity = '0.8';
	});
});

function boardgame(theme) {
	sessionStorage.setItem('theme', theme);
	window.location.href ='games/boardgames/title.html';
}
