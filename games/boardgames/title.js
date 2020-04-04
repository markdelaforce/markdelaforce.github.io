var
theme = sessionStorage.theme,
themeDisplay = document.getElementById('theme'),
titlePage = document.getElementById('page'),
creditsDisplay = document.getElementById('credits-display');

themeDisplay.innerHTML = theme;

function credits() {
	titlePage.style.visibility = 'hidden';
	creditsDisplay.style.visibility = 'visible';
}

function hide() {
	creditsDisplay.style.visibility = 'hidden';
	titlePage.style.visibility = 'visible';
}
