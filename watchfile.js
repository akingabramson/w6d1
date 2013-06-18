var fs = require('fs')
var util = require('util')

var contents = 'Christoper Columbus was a great man.';

fs.writeFile('termpaper.txt', contents, function(err) {
	if (err) throw err;
	console.log("Created termpaper.txt");
})

// function listener(curr, prev) {
// 	console.log("Content was: " + prev);
// 	console.log("Content is now: " + curr);
// }

// fs.watchFile('termpaper.txt', listener(curr, prev));

fs.watchFile('termpaper.txt', function(curr, prev){
	// debugger;
	console.log("Content last edited:" + util.inspect(prev));
	console.log("Content now edited: " + curr);
});