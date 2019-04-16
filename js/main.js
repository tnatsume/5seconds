(function(){
	'use strict'

	var start = document.getElementById('start');
	var stop = document.getElementById('stop');
	var result = document.getElementById('result');
	var reset = document.getElementById('reset');
	var startTime;
	var isstarted = false;
	// var result.ClassName = "standby";
	start.addEventListener('click',function(){
		if ( isstarted == true) {
			return;
		}
		isstarted = true;
		startTime = Date.now();
		this.className = "pushed";
		stop.className = "";
		result.textContent = '0.000';

	});
	stop.addEventListener('click',function(){
		if ( isstarted == false) {

			return;
		}
		this.className = "pushed";
		start.className = "";
		result.className = "";
		var elapsedTime;
		var diff;
		elapsedTime =( Date.now() - startTime) / 1000;
		result.textContent = elapsedTime.toFixed(3);
		diff = 5.0 - elapsedTime;

		if ( Math.abs(diff) < 1.0  ){
			result.className = "perfect";
		}
		isstarted = false;
		alert('差分は' + Math.abs(diff.toFixed(3)) + '秒でした。');
	});
	reset.addEventListener('click',function(){
		isstarted = false;
		start.className = "";
		stop.className = "";
		result.className = "";
		result.textContent = '0.000';
	});
})();
