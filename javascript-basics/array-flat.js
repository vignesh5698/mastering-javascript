const resultantArray = []
const flatArray = (items) => {

	for(let item of items) {
		Array.isArray(item) ? flatArray(item) : resultantArray.push(item)
	}
}

const arr = [1, [2, 3], 4, [5, [6, 7, [8 , 9], 10], 11], 12];
flatArray(arr)
console.log(resultantArray);
