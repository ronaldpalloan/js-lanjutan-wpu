// 1. SPREAED OPERATOR
// MEMECAH ITERABLES JADI SINGLE ELEMENT
// const orang = ['ronald', 'alex', 'olivia'];

// console.log(...orang);
// console.log(...orang[0]);



// 2. GABUNGIN 2 ARRAY
// const ganjil = [1,3,5];
// const genap = [2,4,6];
// const angka = [...ganjil, ...genap];
// const sisipAngka = [...ganjil, 10, ...genap]
// // const angka = ganjil.concat(genap);
// console.log(angka)
// console.log(sisipAngka)




// 3. COPY ARRAY
// const mhs = ['ronald', 'alex', 'olivia'];
// const mhsLuar = [...mhs];

// console.log(mhs);
// console.log(mhsLuar)

// mhsLuar[0] = 'joey';

// console.log(mhs);
// console.log(mhsLuar)




// 4. MASUKKIN ISI TAG HTML KE ARRAY
// const listNama = document.querySelectorAll('ul li');
// const namaMhs = [];

// CARA 1
// for (nama of listNama) {
// 	namaMhs.push(nama.textContent);
// }

// console.log (namaMhs);

// CARA 2
// const mhs = [...listNama].map(a => a.textContent)
// console.log(mhs);



// 5. PRAKTEK HOVER PER HURUF
// const halo = document.querySelector('.sapa');

// const spanHuruf = [...halo.textContent].map(huruf => {
// 	return `<span>${huruf}</span>`
// }).join('');

// halo.innerHTML = spanHuruf;