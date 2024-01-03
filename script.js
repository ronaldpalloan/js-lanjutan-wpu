// Cara Bikin Object

// 1. Object Literal
// let mahasiswa = {
// 	nama: 'Ronald',
// 	energi: 20,

// 	makan: function(porsi) {
// 		this.energi += porsi;
// 		console.log(`kamu makan, energi: ${this.energi}`);
// 	},

// 	main: function(jam) {
// 		this.energi -= jam;
// 		console.log(`kamu main, energi: ${this.energi}`);
// 	}
// }

// 2. Function Expression
// function Mahasiswa(nama, energi) {
// 	let mhs = {};
// 	mhs.nama = nama;
// 	mhs.energi = energi;

// 	mhs.makan = function(porsi) {
// 		this.energi += porsi;
// 		console.log(`kamu makan, energi: ${this.energi}`);
// 	}

// 	mhs.main = function(jam) {
// 		this.energi -= jam;
// 		console.log(`kamu main, energi: ${this.energi}`);
// 	}
// 	return mhs;
// }

// let Ronald = Mahasiswa('Ronald', 20);

// // 3. Konstruktor
// function Mahasiswa(nama, energi) {
// 	this.nama = nama;
// 	this.energi = energi;

// 	this.makan = function(porsi) {
// 		this.energi += porsi;
// 		console.log(`kamu makan, energi: ${this.energi}`);
// 	}

// 	this.main = function(jam) {
// 		this.energi -= jam;
// 		console.log(`kamu main, energi: ${this.energi}`);
// 	}
// }

// let Ronald = new Mahasiswa('Ronald', 20);

// 4. Object Create
const methodMahasiswa = {
	makan: function(porsi) {
		this.energi += porsi;
		console.log(`kamu makan, energi: ${this.energi}`);
	},

	main: function(jam) {
		this.energi -= jam;
		console.log(`kamu main, energi: ${this.energi}`);
	},

	tidur: function(jam) {
		this.energi += jam * 2;
		console.log(`kamu tidur, energi: ${this.energi}`);
	}
}

function Mahasiswa(nama, energi) {
	let mhs = Object.create(methodMahasiswa);
	mhs.nama = nama;
	mhs.energi = energi;

	return mhs;
}

let Ronald = Mahasiswa('Ronald', 20);