
var m = 0
	ms = 1
	sh1 = 48
	sh2 = 52


window.onload = function () {
	cookiem = document.cookie.replace(/(?:(?:^|.*;\s*)m\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	cookiems = document.cookie.replace(/(?:(?:^|.*;\s*)ms\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	cookiesh1 = document.cookie.replace(/(?:(?:^|.*;\s*)sh1\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	cookiesh2 = document.cookie.replace(/(?:(?:^|.*;\s*)sh2\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	if (cookiem == '') {
		m = 0
		document.cookie = 'm=' + m + ';'
	} else {
		m = parseInt(cookiem)
	}

	if (cookiems == '') {
		ms = 1
		document.cookie = 'ms=' + ms + ';'
	} else {
		ms = parseInt(cookiems)
	}

	if (cookiesh1 == '') {
		sh1 = 48
		document.cookie = 'sh1=' + sh1 + ';'
	} else {
		sh1 = parseInt(cookiesh1)
	}

	if (cookiesh2 == '') {
		sh2 = 52
		document.cookie = 'sh2=' + sh2 + ';'
	} else {
		sh2 = parseInt(cookiesh2)
	}
	var elem = document.getElementById('score')	
	elem.innerHTML = 'MONEY: ' + m;
}

function showmenu() {
	var elem = document.getElementById('score')	
	elem.innerHTML = 'MONEY: ' + m;
	document.getElementById('menu').style.display = 'block';
	document.getElementById('about').style.display = 'none';
	document.getElementById('start').style.display = 'none';
	document.getElementById('market').style.display = 'none';
	document.getElementById('start_label').innerHTML = 'COINS MINER';
	document.getElementById('exit').innerHTML = '';
}

function showgame() {
	var elem = document.getElementById('score')	
	elem.innerHTML = 'MONEY: ' + m;
	document.getElementById('start').style.display = 'block';
	document.getElementById('menu').style.display = 'none';
	document.getElementById('about').style.display = 'none';
	document.getElementById('start_label').innerHTML = 'GAME';
	document.getElementById('exit').innerHTML = '<a href="javascript:void(0)">EXIT TO MENU</a>';
}

function showmarket() {
	var elem = document.getElementById('score')	
	elem.innerHTML = 'MONEY: ' + m;
	document.getElementById('menu').style.display = 'none';
	document.getElementById('status').innerHTML = 'STATUS: NONE';
	document.getElementById('market').style.display = 'block'
	document.getElementById('about').style.display = 'none';
	document.getElementById('start_label').innerHTML = 'MARKETPLACE';
	document.getElementById('exit').innerHTML = '<a href="javascript:void(0)">EXIT TO MENU</a>';
	document.getElementById('plus');
}

function about() {
	var elem = document.getElementById('score')	
	elem.innerHTML = 'MONEY: ' + m;
	document.getElementById('about').style.display = 'block';
	document.getElementById('menu').style.display = 'none';
	document.getElementById('start_label').innerHTML = 'ABOUT';
	document.getElementById('exit').innerHTML = '<a href="javascript:void(0)">EXIT TO MENU</a>';
}

function shplus() {
	element = document.getElementById('plus1')
	if (m >= 35) {
		sh1 = sh1 - 1;
		sh2 = sh2 + 1;
		m = m - 35;
		document.cookie = 'sh1=' + sh1 + ';'
		document.cookie = 'sh2=' + sh2 + ';'
		document.cookie = 'm=' + m + ';'
		elem = document.getElementById('status')
		elem.innerHTML = 'STATUS: You bought improved!'
		var elem1 = document.getElementById('score')
		elem1.innerHTML = 'MONEY: ' + m
	}
	else {
		elem = document.getElementById('status')
		elem.innerHTML = 'STATUS: Not enough money!'
	}
}

function moneyplus1() {
	element = document.getElementById('plus2')
	if (m >= 55) {
		ms = ms + 3;
		m = m - 55;
		document.cookie = 'm=' + m + ';'
		document.cookie = 'ms=' + ms + ';'
		elem = document.getElementById('status')
		elem.innerHTML = 'STATUS: You bought improved!'
		var elem1 = document.getElementById('score')
		elem1.innerHTML = 'MONEY: ' + m
	}
	else {
		elem = document.getElementById('status')
		elem.innerHTML = 'STATUS: Not enough money!'
	}
}

function moneyplus2() {
	element = document.getElementById('plus3')
	if (m >= 100) {
		ms = ms + 4;
		m = m - 100;
		sh1 = sh1 - 2;
		sh2 = sh2 + 2;
		document.cookie = 'm=' + m + ';'
		document.cookie = 'ms=' + ms + ';'
		document.cookie = 'sh1=' + sh1 + ';'
		document.cookie = 'sh2=' + sh2 + ';'
		elem = document.getElementById('status')
		elem.innerHTML = 'STATUS: You bought improved!'
		var elem1 = document.getElementById('score')
		elem1.innerHTML = 'MONEY: ' + m
	}
	else {
		elem = document.getElementById('status')
		elem.innerHTML = 'STATUS: Not enough money!'
	}
}

function moneyplus() {
	element = document.getElementById('plus')
	if (m >= 20) {
		ms = ms + 1;
		m = m - 20;
		document.cookie = 'm=' + m + ';'
		document.cookie = 'ms=' + ms + ';'
		elem = document.getElementById('status')
		elem.innerHTML = 'STATUS: You bought improved!'
		var elem1 = document.getElementById('score')
		elem1.innerHTML = 'MONEY: ' + m
	}
	else {
		elem = document.getElementById('status')
		elem.innerHTML = 'STATUS: Not enough money!'
	}
}

function show_money() {
	var c = getRandomInt(1,100);
	if (c < sh1) {
		money1()
	}
	else if ( c > sh2) {
		money2()
	}
	else {
		money3()
		m = m + ms
		document.cookie = 'm=' + m + ';'
		var elem = document.getElementById('score')
		
		elem.innerHTML = 'MONEY: ' + m
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