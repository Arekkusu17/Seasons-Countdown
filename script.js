var springEquinox = '';
var fallEquinox = '';
var summerSolstice = '';
var winterSolstice = '';
const present = new Date();
const presentYear = present.getFullYear();
const buttons = document.getElementsByTagName('BUTTON');
const targetDate = document.getElementById('target');

// CODING THE FUNCTIONS FOR THE CHECKBOXS
function onWhichHemisphere () {
	var northCheckBox = document.getElementById('north');
	var southCheckBox = document.getElementById('south');
	if (northCheckBox.checked) {
		springEquinox = `21 March ${presentYear}`;
		fallEquinox = `22 September ${presentYear}`;
		summerSolstice = `21 June ${presentYear}`;
		winterSolstice = `21 December ${presentYear}`;
		document.getElementById('count-container').style.display = 'none';
	}

	if (southCheckBox.checked) {
		springEquinox = `21 September ${presentYear}`;
		fallEquinox = `21 March ${presentYear}`;
		summerSolstice = `21 December ${presentYear}`;
		winterSolstice = `21 June ${presentYear}`;
		document.getElementById('count-container').style.display = 'none';
	}
}

// Programming the seasons-btn to show the right img

var indexImg = 1;
showImage(indexImg);
function season_chosen (num) {
	showImage((indexImg = num));
	document.getElementById('count-container').style.display = 'flex';
}

function showImage (num) {
	//create an array for the images
	const img = document.querySelectorAll('img');
	//iterate through the array to hidde every image
	for (var i = 0; i < img.length; i++) {
		img[i].style.display = 'none';
	}
	//make visible the img that it's needed
	img[indexImg].style.display = 'block';
}

//CODING THE COUNTDOWN

function countdown (season) {
	const daysEl = document.getElementById('days');
	const hourEl = document.getElementById('hours');
	const minsEl = document.getElementById('mins');
	const secsEl = document.getElementById('secs');

	const seasonDate = new Date(season);
	const currentDate = new Date();

	if (seasonDate - currentDate < 0) {
		seasonDate.setFullYear(presentYear + 1);
	}

	const totalSeconds = Math.floor(seasonDate - currentDate) / 1000;

	const seconds = Math.floor(totalSeconds) % 60;
	const minutes = Math.floor(totalSeconds / 60) % 60;
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const days = Math.floor(totalSeconds / 86400);

	daysEl.innerHTML = formatTime(days);
	hourEl.innerHTML = formatTime(hours);
	minsEl.innerHTML = formatTime(minutes);
	secsEl.innerHTML = formatTime(seconds);
}

function formatTime (time) {
	return time < 10 ? `0${time}` : time;
}

var intervalA;

function summerCountdown () {
	clearInterval(intervalA);
	document.getElementById('count-container').style.display = 'block';
	countdown(summerSolstice);
	intervalA = setInterval(function () {
		countdown(summerSolstice);
	}, 1000);
}

function fallCountdown () {
	clearInterval(intervalA);
	document.getElementById('count-container').style.display = 'block';
	countdown(fallEquinox);
	intervalA = setInterval(function () {
		countdown(fallEquinox);
	}, 1000);
}
function springCountdown () {
	clearInterval(intervalA);
	document.getElementById('count-container').style.display = 'block';
	countdown(springEquinox);
	intervalA = setInterval(function () {
		countdown(springEquinox);
	}, 1000);
}
function winterCountdown () {
	clearInterval(intervalA);
	document.getElementById('count-container').style.display = 'block';
	countdown(winterSolstice);
	intervalA = setInterval(function () {
		countdown(winterSolstice);
	}, 1000);
}
