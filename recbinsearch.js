Array.prototype.binarysearch = function(target) { // 4
	var midpoint = Math.floor(this.length / 2); // 2
	var midValue = this[midpoint] // [2]

	if (this.length == 0) {
		return false;
	} else if (midValue == target) {
		return midpoint;
	} else if (midValue > target) {
		var leftHalf = this.slice(0, midpoint);
		console.log("lh " + leftHalf);
		return leftHalf.binarysearch(target);
	} else {
		var rightHalf = this.slice(midpoint + 1, this.length);
		console.log("rh " + rightHalf);
		return midpoint + 1 + rightHalf.binarysearch(target);
		// 		 2 				+
	}
}

result = [0,1,2,3,4,5,6,7,8,9].binarysearch(5);
console.log(result);