//Active

let langDiv = document.getElementById('langDiv');

let buttons = document.getElementsByClassName('header__lang-link');

for(var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function() {
		var current = document.getElementsByClassName('active');
		current[0].className = current[0].className.replace(' active', '');
		this.className += ' active';
	});
}

//Burger

var navLinks = document.getElementById('navLinks');

function showMenu() {
	navLinks.style.left = '16%';
}

function hideMenu() {
	navLinks.style.left = '-200px';
}