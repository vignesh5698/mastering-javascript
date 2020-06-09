var addTo = function (outer) {
	var add = function (inner) {
		return inner + outer;
	};
	return add;
};

var addThree = addTo(3);
var addFour = addTo(4);

console.log(addThree(1));
console.log(addFour(2));
