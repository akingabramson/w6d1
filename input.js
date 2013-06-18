fs = require('fs');
_ = require('./underscore.js')

var data = ""



for (var i = 1; i <= 100; i++) {
	data += i;
	data += "\n";
}

fs.writeFile('numbers.txt', data, function(err){
	if (err) throw err;
	console.log("Saved!");
})

