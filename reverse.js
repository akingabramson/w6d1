fs = require('fs');

fs.readFile('numbers.txt', 'utf8', function(err, data){
	var text = data
	console.log(text.constructor)

	var reversedData = text.split("\n").reverse().join("\n")

	fs.writeFile('reversednumbers.txt', reversedData, function(err){
		if (err) throw err;
		console.log("Saved.");
	})
})