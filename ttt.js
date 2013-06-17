function TicTacToe() {
	this.board = [["_","_","_"],["_","_","_"],["_","_","_"]];
}

function Player(name, symbol) {
	this.name = name;
	this.symbol = symbol;
}

TicTacToe.prototype.makeMove = function(row, column, symbol) {
	var spotIsEmpty = this.board[row][column] === "_";

	if (spotIsEmpty) {
		this.board[row][column] = symbol;
	} else {
		console.log("Invalid move.")
	}
}

TicTacToe.prototype.printBoard = function() {
	for(var i = 0; i < this.board.length; i++) {
		console.log(this.board[i]);
	}
}

TicTacToe.prototype.gameOver = function() {
	return (this.checkRows() || this.checkColumns() || this.checkDiags());
}

TicTacToe.prototype.checkRows = function() {
	// if first row is the same OR second row is the same OR third row is the same
	for(var row = 0; row < this.board.length; row++) {
		var thisRow = this.board[row];
		var winner = this.tripletWinner(thisRow);
		if (winner) {
			return winner;
		}
	}
	return false;
}

TicTacToe.prototype.checkColumns = function() {
	for (var col = 0; col < this.board.length; col++) {
		var thisCol = [this.board[0][col], this.board[1][col], this.board[2][col]];
		var winner = this.tripletWinner(thisCol); // ASK TA
		if (winner) {
			return winner;
		}
	}
	return false;
}

TicTacToe.prototype.checkDiags = function() {
	var diagBackSlash = [this.board[0][0], this.board[1][1], this.board[2][2]];
	var diagForwardSlash = [this.board[0][2], this.board[1][1], this.board[2][0]];
	winner = this.tripletWinner(diagBackSlash);
	if (winner) {
		return winner;
	}
	winner = this.tripletWinner(diagForwardSlash);
	if (winner) {
		return winner;
	}
	return false;
}


TicTacToe.prototype.tripletWinner = function(triplet) {
	var first = triplet[0];
	var second = triplet[1];
	var third = triplet[2];
	// if any is an underscore, return false, if they're all equal return the first
	if (first === "_" || second === "_" || third === "_") {
		return false;
	} else if (first === second && second === third){
		return first;
	} else {
		return false;
	}
}

boardie = new TicTacToe()
console.log(boardie.gameOver())