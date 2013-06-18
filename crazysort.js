var readline = require('readline')

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


// function crazySort = function(array) {
// var i = 0;
// var qText = blah blah
// function askUser = function() {
// 	rl.question(qText, function(answer){
// 				if (answer == "n") {
// 					switch em;
// 				}
	//  i++
// 			if i < array.length - 2 {
//        askUser()}
// })
//
//
//
// }
//
// }

var crazySort = function(array) {
	var i = 0;

	function askUser() {
		console.log(array);
		var qText = "Are these in the right order? " + array[i] + ", " + array[i+1] + "\n";
		rl.question(qText, function(answer) {
			if (answer == "n") {
				var temp = array[i];
				array[i] = array[i+1];
				array[i+1] = temp;
			}

			i++;

			if(i < array.length - 1) {
				askUser();
			} else {
				console.log(array);
				rl.question("Is everything in order?", function(answer) {
					if(answer == "y") {
						console.log(array);
				    rl.close();

					} else {
						crazySort(array);
					}
				});
			}
		})
	}
	askUser();

}


// Old version
	//
	// for (var i = 0; i < array.length - 2; i++) {
	// 	var qText = "Are these in the right order? " + array[i] + ", " + array[i+1] + "\n"
	//
	// 	rl.question(qText, function(answer) {
	// 			if (answer == "n") {
	// 				var temp = array[i];
	// 				array[i] = array[i+1];
	// 				array[i+1] = temp;
	// 			}
	// 	console.log(array);
	// 	// advance iteration
	// 	})
	// }



var array = ["apple", "banana", "cucumber", "date", "elk", "fresa"];

crazySort(array);