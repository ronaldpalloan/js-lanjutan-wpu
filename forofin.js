// 1. FOR ...OF
// const mhs = ['ronald', 'alex', 'olivia'];

// for(let i = 0; i < mhs.length; i++) {
// 	console.log(mhs[i]);
// }

// mhs.forEach(a => console.log(a));

// for (const nama of mhs) {
// 	console.log(nama.toUpperCase());
// }



// 2.STRING
// const nama = 'ronald'

// for (const huruf of nama) {
// 	console.log(huruf);
// }



// 3. ENTRIES
// const mhs = ['ronald', 'alex', 'olivia'];

// // mhs.forEach((nama, index) => console.log(`${nama} adalah mahasiswa ke-${index + 1}`));

// for (let [indeks, nama] of mhs.entries()) {
// 	console.log(`${nama} adalah mahasiswa ke-${indeks + 1}`)
// }

// 4. NODE LIST
// const liNama = document.querySelectorAll('ul li');

// // liNama.forEach(a => console.log(a.textContent));

// for (let nama of liNama) {
// 	console.log(nama.innerHTML);
// }

// 5. ARGUMENTS
// function jumlah() {
// 	let hasil = 0;
// 	for (let angka of arguments) {
// 		hasil += angka;
// 	}
// 	return hasil;
// }

// console.log(jumlah(1,2,3,4,5));

// 6. FOR ...IN
// const orang = {
// 	nama: 'ronald',
// 	umur: 22,
// 	kelas: 'ipa'
// }

// for (let props in orang) {
// 	console.log(props);
// 	console.log(orang[props]);
// } 