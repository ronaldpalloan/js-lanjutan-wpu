// function init() {
// 	// let nama = 'ronald';
// 	return function(nama) {
// 		console.log(nama);
// 	}
// }

// let panggilNama = init();
// panggilNama('ronald');

// function sayHello(waktu) {
// 	return function(nama) {
// 		console.log(`Halo ${nama}, selamat ${waktu}, good day for you`);
// 	}
// }

// let ucapSalam = sayHello('pagi');
// ucapSalam('ronald');

let add = (function() {
	let counter = 0;
	return function() {
		return ++counter;
		
	}
})();


console.log(add());
console.log(add());
console.log(add());
