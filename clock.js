var timeStart = new Date();
console.log(timeStart)

setInterval( function() {
	timeStart = new Date(timeStart.getTime() + 5000);
	console.log(timeStart.getHours() + ":" + timeStart.getMinutes() + ":" + timeStart.getSeconds());
} , 5000)

