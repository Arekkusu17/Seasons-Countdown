var springEquinox = '';
var fallEquinox = '';
var summerSolstice = '';
var winterSolstice = '';
const present = new Date();
const presentYear = present.getFullYear();

// CODING THE FUNCTIONS FOR THE CHECKBOXS
function onWhichHemisphere () {
	var northCheckBox = document.getElementById('north');
	var southCheckBox = document.getElementById('south');
	if (northCheckBox.checked) {
		console.log('estamos en el nh mi bro');
		springEquinox = `21 March ${presentYear}`;
		fallEquinox = `22 September ${presentYear}`;
		summerSolstice = `21 June ${presentYear}`;
		winterSolstice = `21 December ${presentYear}`;
	}

	if (southCheckBox.checked) {
		console.log('estamos en el sh mi bro');
		springEquinox = `21 September ${presentYear}`;
		fallEquinox = `21 March ${presentYear}`;
		summerSolstice = `21 December ${presentYear}`;
		winterSolstice = `21 June ${presentYear}`;
	}
}

// Programming the seasons-btn to show the right img

var indexImg = 1;
showImage(indexImg);
function season_chosen (num) {
	showImage((indexImg = num));
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
		console.log('here mi bro');
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

// TESTING

function countdowns () {
	countdown(summerSolstice);
	countdown(winterSolstice);
	countdown(springEquinox);
	countdown(fallEquinox);
}

window.onload = countdowns();

setInterval(countdowns, 1000);
