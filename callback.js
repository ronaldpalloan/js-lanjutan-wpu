// 1. SYNCHRONOUS CALLBACK
// CARA 1
// function halo(nama) {
// 	alert(`Halo ${nama}`)
// }

// function tampilPesan(callback) {
// 	const nama = prompt('masukkan nama mu');
// 	callback(nama);
// }

// tampilPesan(halo);
// CARA 2
// function tampilPesan(callback) {
// 	const nama = prompt('masukkan nama');
// 	callback(nama);
// }

// tampilPesan(a => alert(`Halo ${a}`));