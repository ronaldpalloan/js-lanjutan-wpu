// REST PARAMETER
// function fungsiKu(a, ...angka) {
// 	return angka;
// }

// console.log(fungsiKu(1, 2, 3, 4, 5))

// PENJUMLAHAN
// function jumlah(...angka) {
// 	return angka.reduce((acc, curr) => acc + curr)
// }

// console.log(jumlah(10, 20, 10, 5, 25));



// ARRAY DESTRUCTURING
// const mhs = ['ronald', 'alex', 'olivia', 'ben', 'malik'];

// const [ketua, wakil, ...anggota] = mhs;
// console.log(ketua);
// console.log(wakil);
// console.log(anggota);



// OBJECT DESTRUCTURING
// const project = {
// 	ketua: 'ronald',
// 	wakil: 'alex',
// 	fe: 'olivia',
// 	be: 'malik'
// }

// const {ketua, ...orang} = project;
// console.log(ketua);
// console.log(orang);



// FILTERING
function filterBy(type, ...values) {
	// return values.filter(a => typeof(a) === type)
	return values.filter(a => {
		if(typeof(a) === type) {
			return a;
		}
	})
}

console.log(filterBy('number', 5, 4, 'olivia', true, false, 10, 'alex'));