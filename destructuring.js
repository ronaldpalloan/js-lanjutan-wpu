// destructuring array
// const mhs = ['ronald', 'alex', 'olivia'];

// const [a, b, c] = mhs;
// console.log(a);
// console.log(b);
// console.log(c);



// swap array
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);

// [a, b] = [b, a];

// console.log(a);
// console.log(b);



// return pada function
// function coba() {
// 	return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);
// console.log(b);



// REST PARAMETER
// const angka = [1, 2, 3, 4, 5, 6];

// const [a, , ...values] = angka;
// console.log(a);
// console.log(values);



// DESTRUCTURING OBJECT
// const mhs = {
// 	nama: 'ronald',
// 	umur: 22
// }

// const {nama, umur} = mhs;
// console.log(nama);
// console.log(umur);

// ASSIGN KE NAMA BARU
// const mhs = {
// 	nama: 'ronald',
// 	umur: 22
// }

// const {nama: n, umur: u} = mhs;
// console.log(n);
// console.log(u);

// MEMBERI DEFAULT VALUE
// const mhs = {
// 	nama: 'ronald',
// 	umur: 22,
// }

// const {nama, umur, email = 'rpalloan@dfault.com'} = mhs;
// console.log(nama);
// console.log(umur);
// console.log(email);

// REST PARAMETER
// const mhs = {
// 	nama: 'ronald',
// 	umur: 22,
// 	email: 'r@gmail.com'
// }

// const {nama, ...values} = mhs;
// console.log(nama);
// console.log(values)

// AMBIL FIELD PADA OBJECT SETELAH DIKIRM SBG PARAMETER UNTUK FUNCTION
// const ronpal = {
// 	id: 21512,
// 	nama: 'ronald',
// 	umur: 22,
// 	email: 'r@gmail.com'
// }

// function getIdMhs({id, nama}) {
// 	return `${id} ${nama}`;
// }

// console.log(getIdMhs(ronpal))



// DESTRUCTURING FUNGSI ARRAY
// function calc(a, b) {
// 	return [a+b, a-b, a*b, a/b]
// }

// const [tambah, kurang, kali, bagi] = calc(2,3);
// console.log(kali);



// DESTRUCTURING FUNGSI OBJECT
// function calc(a, b) {
// 	return {
// 		tambah: a+b,
// 		bagi: a/b,
// 		kurang: a-b,
// 		kali: a*b
// 	}
// }

// const {kurang, kali, bagi, tambah} = calc(2,3);
// console.log(bagi);



// DESTRUCTURING FUNCTION ARGUMENTS
// const mhs1 = {
// 	nama: 'ronald',
// 	umur: 22,
// 	email: 'halo@gmail.com',
// 	nilai: {
// 		tugas: 90,
// 		uas: 98,
// 		uts: 85	
// 	}
// }

// function cetakMhs({nama, umur, nilai:{tugas, uts, uas}}) {
// 	return `Halo ${nama}, yang berumur ${umur}, nilai uas: ${uas}`
// }

// console.log(cetakMhs(mhs1))


const buah = ['apel', 'anggur', 'melon', 'semangka'];

function getBuah([a,b,...value]) {
	return `buah 1 ${a}, buah 2 ${b}, buah 3 ${value.join(' & ')}`;
}

console.log(getBuah(buah));