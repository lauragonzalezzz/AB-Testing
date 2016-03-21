
var trackingApp = (function trackTheThings(){

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');

var reportDiv = document.getElementById('report');

var reportBtn1 = document.getElementById('reportBtn1');
var btn1Count = 0;
var reportBtn2 = document.getElementById('reportBtn2');
var btn2Count = 0;
var reportBtn3 = document.getElementById('reportBtn3');
var btn3Count = 0;
var reportBtn4 = document.getElementById('reportBtn4');
var btn4Count = 0;
var reportBtn5 = document.getElementById('reportBtn5');
var btn5Count = 0;
var clickHere = document.getElementById('clickHere');
clickHere.addEventListener('click', registerClick);
var clickHereCount = 0;


var showReport = document.getElementById('showReport');
showReport.addEventListener('click', getReport);


var alltheButtons = document.querySelectorAll('button');

function addEventListeners() {
	for (var i = 0; i < alltheButtons.length; i++) {
		alltheButtons[i].addEventListener('click', registerClick);
	}
}
addEventListeners();

function registerClick(event) {
	if (this === btn1) {
		btn1Count += 1;
	}
	else if (this === btn2) {
		btn2Count += 1;
	}
	else if (this === btn3) {
		btn3Count += 1;
	}
	else if (this === btn4) {
		btn4Count += 1;
	}
	else if (this === btn5) {
		btn5Count += 1;
	}
	else if (this === clickHere) {
		clickHereCount += 1;
	}
}


function getReport(event) {
	reportDiv.id = '';
	reportDiv.id = 'newReport';
	reportBtn1.innerHTML = "Button 1 has been clicked " + btn1Count + " times.";
	reportBtn2.innerHTML = "Button 2 has been clicked " + btn2Count + " times.";
	reportBtn3.innerHTML = "Button 3 has been clicked " + btn3Count + " times.";
	reportBtn4.innerHTML = "Button 4 has been clicked " + btn4Count + " times.";
	reportBtn5.innerHTML = "Button 5 has been clicked " + btn5Count + " times.";
	reportBtn6.innerHTML = "Click Here Image has been clicked " + clickHereCount + " times.";
}

})();
