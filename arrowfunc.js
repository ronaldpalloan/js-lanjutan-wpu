// const tampilNama = (nama) => {
// 	return `Halo ${nama};`
// }


// console.log(tampilNama('ronald'));

// const tampilNama = nama => `Halo ${nama};`

// console.log(tampilNama('ronald'));

// const tampilNama = (nama, waktu) => `Halo ${nama}, selamat ${waktu}`;

// console.log(tampilNama('ronald', 'malam'));

// let mhs = ['aaaa', 'ba', 'ccc'];

// let jumlahHuruf = mhs.map(nama => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mhs.map(nama => ({nama: nama, jmlHuruf: nama.length}));
// console.table(jumlahHuruf);



// This pada arrow function
// const Mahasiswa = function() {
// 	this.nama = 'ronald';
// 	this.umur = 22;
// 	this.sayHello = () => {
// 		return `halo ${this.nama}, umur ${this.umur}`;
// 	}
// };

// const ronald = new Mahasiswa();

// const ronald = {
// 	nama: 'ronald',
// 	umur: 22,
// 	sayHello: () => {
// 		return `halo ${this.nama}, umur ${this.umur}`;
// 	}
// }

// const Mahasiswa = function() {
// 	this.nama = 'ronald';
// 	this.umur = 22;
// 	this.sayHello = () => {
// 		console.log(`halo ${this.nama}, umur ${this.umur}`);
// 		console.log(this);
// 	}

	// setInterval(() => {
	// 	console.log(this.umur++)
	// }, 500);
// }

// const ronald = new Mahasiswa();


const box = document.querySelector('.box');

box.addEventListener('click', function() {
	this.classList.toggle('size');

	setTimeout(() => {
		this.classList.toggle('caption');
	}, 600)
})
