
var nama = 'ronald';
console.log(nama);

function hello() {
	console.log(`hallo ${nama}`);
	console.log(arguments);
	console.log(arguments[0]);
}

hello('doddy');