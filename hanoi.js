function Hanoi(numberOfDiscs) {
	this.numberOfDiscs = numberOfDiscs;
	this.stacks = [[],[],[]];
}

Hanoi.prototype.fillStack = function() {
	for (var i = this.numberOfDiscs; i > 0 ; i--) {
		this.stacks[0].push(i);
	}
}

// If we were doing UI,
// We'd get the input from user, from stack to stack...

Hanoi.prototype.makeMove = function(from, to) {
	// from(0, 1)
	// already verified that we can make move

	var fromStack = this.stacks[from];
	var toStack = this.stacks[to];

	// check that there's a pieceon the from stack
	var fromPiece = fromStack[fromStack.length - 1]; // might be undefined
	var toPiece = toStack[toStack.length - 1]; // might be undefined

	var validPiece = fromStack.length > 0;
	var toIsEmpty = toStack.length == 0;
	var pieceIsSmaller = fromPiece < toPiece;

	// and the piece on the from stack is less than
	// the piece on the to stack OR the "to" stack is empty

	if (validPiece && ( toIsEmpty || pieceIsSmaller )) {
		var disc = fromStack.pop();
		toStack.push(disc);
	} else {
		console.log("Invalid move.");
	}
}

Hanoi.prototype.gameOver = function() {
	return (this.stacks[1].length == 3 || this.stacks[2].length == 3);
}

// Tests

var hanoi = new Hanoi(10);
console.log(hanoi);
hanoi.fillStack();
console.log(hanoi);

// // if (validPiece &&
// hanoi.makeMove(1,1);
// // toIsEmpty || pieceIsSmaller
// console.log(hanoi);
// hanoi.makeMove(0,1);
// console.log(hanoi);
// hanoi.makeMove(0,2);
// console.log(hanoi);
// hanoi.makeMove(2,1);
// console.log(hanoi);
