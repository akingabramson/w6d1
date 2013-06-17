Function.prototype.bind = function(object)  {
	var that = this;
	return function() {
		that.apply(object);
	}
}

// Example of usage

function Cat() {
	this.name = 'Cat';
	this.meow = function() {
		console.log(this.name + ": Meow");
	}

}

function Dog() {
	this.name = 'Dog';
	this.meow = function() {
		console.log(this.name + ": Meow");
	}
}

cat = new Cat();
dog = new Dog();

// Normal usage


// Bind works?

var f1 = cat.meow.bind(cat)
var f2 = cat.meow.bind(dog)

f1();
f2();

