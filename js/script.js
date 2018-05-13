
var m = 0

function showgame() {
	document.getElementById('start').style.display = 'block';
	document.getElementById('menu').style.display = 'none';
	document.getElementById('start_label').innerHTML = 'GAME';
}

function show_money() {
	var c = getRandomInt(1,100);
	if (c < 48) {
		money1()
	}
	else if ( c > 52) {
		money2()
	}
	else {
		money3()
		m++
	}

}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function money1() {
	element = document.getElementById('money')
	element.setAttribute('src', 'img/dol.png')
}

function money2() {
	element = document.getElementById('money')
	element.setAttribute('src', 'img/cent.png')
}

function money3() {
	element = document.getElementById('money')
	element.setAttribute('src', 'img/reb.png')
}

