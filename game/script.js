'use strict';

//Кликер
let points = 0
function onClick(){
	points += clickLevel
	document.getElementById('button').innerHTML = points

	localStorage.points = points
}

//Магазин
	//Двойной клик
let clickLevel = 1
let infPrice = 200
function buyInf(){
	if (points >= infPrice){
		points -= infPrice
		infPrice *= 3
		clickLevel *= 2
		document.getElementById('button').innerHTML = points
		document.getElementById('infPrice').innerHTML = 'Цена:' + infPrice

		localStorage.clickLevel = clickLevel
		localStorage.infPrice = infPrice
	}
}


	// Поупка Автокликера
let autoPrice = 800
let autoLevel = 0
function buyAuto(){
	if (points >= autoPrice){
		points -= autoPrice
		autoPrice *= 2
		autoLevel += 2
		document.getElementById('button').innerHTML = points
		document.getElementById('autoPrice').innerHTML = 'Цена:' + autoPrice

		localStorage.autoPrice = autoPrice
		localStorage.autoLevel = autoLevel
	}
}
		// Автокликер
setInterval(
	() => {
		points += autoLevel;
		document.getElementById('button').innerHTML = points

		localStorage.points = points
	},
	2000
);


		//Больше монет за конфеты
let candyLevel = 4
let candyPrice = 700
function upgradeCandy(){
	if (points >= candyPrice){
		points -= candyPrice
		candyPrice *= 2
		candyLevel += 2
		document.getElementById('button').innerHTML = points
		document.getElementById('candyPrice').innerHTML = 'Цена:' + candyPrice
		document.getElementById('tradePrice').innerHTML = '5 конфет = ' + candyLevel + ' монет'
	}
}



//Конфеты
let candies = 0
	// Добыча
setInterval(
	() => {
		candies++
		localStorage.candies = candies
		document.getElementById('candyCount').innerHTML = 'Конфеты:' + candies
	},
	1000
);
//Продажа
function trade(){
	if (candies >= 5){
		candies -= 5
		points += candyLevel
		localStorage.candies = candies
		localStorage.points = points
		document.getElementById('button').innerHTML = points
		document.getElementById('candyCount').innerHTML = 'Конфеты:' + candies
	}
}


//Жизни
let health = 10
function healthUp(){
	if (candies >= 29 && health <= 9){
		candies -= 29
		health += 1
		document.getElementById('healthCount').innerHTML = 'HP: ' + health
	}
}
//Отнятие жизней
setInterval(
	() => {
		if (health >= 2){
			health -= 1
		} else if (health == 1){
			health = 10
			if (points > infPrice / 2){
				points -= infPrice / 2
			} else {
				points = 0
			}
		}
		document.getElementById('healthCount').innerHTML = 'HP: ' + health
		localStorage.health = health
	},
	40000
);


function load(){
	candies = Number(localStorage.candies)
	if (localStorage.points){
		points = Number(localStorage.points)
	} else {
		localStorage.points = 0
		points = 0
		localStorage.clickLevel = 1
		clickLevel = 1
		localStorage.infPrice = 200
		infPrice = 200
		localStorage.autoPrice = 800
		autoPrice = 800
		localStorage.autoLevel = 0
		autoLevel = 0
		localStorage.candies = 0
		candies = 0
		localStorage.health = 10
		health = 10
		localStorage.candyLevel = 4
		candyLevel = 4
		localStorage.candyPrice = 700
		candyPrice = 700
		document.getElementById('button').innerHTML = points
		document.getElementById('autoPrice').innerHTML = 'Цена:' + autoPrice
		document.getElementById('infPrice').innerHTML = 'Цена:' + infPrice
		document.getElementById('candyPrice').innerHTML = 'Цена:' + candyPrice
		document.getElementById('healthCount').innerHTML = 'HP:' + health
		document.getElementById('candyCount').innerHTML = 'Конфеты:' + candies
	}

	clickLevel = Number(localStorage.clickLevel)
	infPrice = Number(localStorage.infPrice)
	autoPrice = Number(localStorage.autoPrice)
	autoLevel = Number(localStorage.autoLevel)
	candyLevel = Number(localStorage.candyLevel)
	candyPrice = Number(localStorage.candyPrice)
	health = Number(localStorage.health)

	document.getElementById('button').innerHTML = points
	document.getElementById('autoPrice').innerHTML = 'Цена:' + autoPrice
	document.getElementById('infPrice').innerHTML = 'Цена:' + infPrice
	document.getElementById('healthCount').innerHTML = 'HP:' + health
	document.getElementById('candyCount').innerHTML = 'Конфеты:' + candies
	document.getElementById('tradePrice').innerHTML = '5 конфет = ' + candyLevel + ' монет'
}
function clearAll(){
	localStorage.points = 0
	points = 0
	localStorage.clickLevel = 1
	clickLevel = 1
	localStorage.infPrice = 200
	infPrice = 200
	localStorage.autoPrice = 800
	autoPrice = 800
	localStorage.autoLevel = 0
	autoLevel = 0
	localStorage.candies = 0
	candies = 0
	localStorage.health = 10
	health = 10
	localStorage.candyPrice = 700
	candyPrice = 700
	localStorage.candyLevel = 4
	candyLevel = 4
	document.getElementById('button').innerHTML = points
	document.getElementById('autoPrice').innerHTML = 'Цена:' + autoPrice
	document.getElementById('infPrice').innerHTML = 'Цена:' + infPrice
	document.getElementById('candyPrice').innerHTML = 'Цена:' + candyPrice
	document.getElementById('healthCount').innerHTML = 'HP:' + health
	document.getElementById('candyCount').innerHTML = 'Конфеты:' + candies
	document.getElementById('tradePrice').innerHTML = '5 конфет = ' + candyLevel + ' монет'
}