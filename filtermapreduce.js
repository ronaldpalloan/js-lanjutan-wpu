// const number = [-3, 4, 5, 2, 7, -8, -9, 1, 6, 3];
// const aboveThree = [];

// cari elemen >3
// for (let i = 0; i < number.length; i++) {

// 	if (number[i] > 3) {
// 		aboveThree.push(number[i]);
// 	}
// }

// console.log(aboveThree);

// const newNumber = number.filter(item => item > 1);

// kali 2 
// const newNumber = number.reduce(function (acc, curr) {
// 	return acc - curr;
// });


// Method chaining
// cari >=5
// kali 2
// tambah semua

// const hasil = number.filter(a => a >= 5)
// 	.map(a => a * 2)
// 	.reduce((acc, curr) => acc + curr);

// console.log(hasil);





// Latihan

// // 1.Ambil semua elemen video
// const allVideo = document.querySelectorAll('ul li')
// // 2.Pilih yg javascript lanjutan
// const jsLanjutan = Array.from(allVideo).filter(function(a) {
// 	return a.textContent.includes('JAVASCRIPT LANJUTAN');
// })
// // 3.Ambil durasi masing2 video
// const durasiVideo = jsLanjutan.map(function(a) {
// 	return a.getAttribute('data-duration');
// })
// // 4.Ubah durasi jadi int, ubah menit jadi detik
// const detikVideo = durasiVideo.map(function(a) {
// 	const [minutes, seconds] = a.split(':').map(Number);
// 	return minutes * 60 + seconds;
// })
// // 5.Jumlahkan semua detik
// const jumlahDetik = detikVideo.reduce(function(acc, curr) {
// 	return acc + curr;
// })
// // 6.Ubah format jadi jam menit detik
// const totalDurasiJS = function(jumlahDetik) {
// 	const jam = Math.floor(jumlahDetik/3600);
// 	const menit = Math.floor((jumlahDetik - jam * 3600)/60);
// 	const detik = jumlahDetik - jam * 3600 - menit * 60;
// 	return `${jam}:${menit}:${detik}`
// }
// // 7.Simpan di DOM
// const wadahJumlahVideo = document.querySelector('.jumlah-video');
// const wadahTotalDurasi = document.querySelector('.total-durasi');
// const tampilDurasi = totalDurasiJS(jumlahDetik);

// wadahJumlahVideo.innerHTML = `${jsLanjutan.length} video`;
// wadahTotalDurasi.innerHTML = tampilDurasi;



// // 1. Tangkap semua elemen video
// const allVideos = Array.from(document.querySelectorAll('[data-duration]'));
// // 2. Cari yg jsnya aja
// let jsVideos = allVideos
// .filter(function(a) {
// 	return a.textContent.includes('JAVASCRIPT LANJUTAN');
// })
// // 3. Ambil data durasi
// .map(function(a) {
// 	return a.dataset.duration;
// })
// // 4. Ubah durasi jadi detik
// .map(function(a) {
// 	const perWaktu = a.split(':').map(function(a) {
// 		return parseFloat(a);
// 	});
// 	return perWaktu[0] * 60 + perWaktu[1];
// })
// // 5. Jumlahkan semua detik
// .reduce(function(acc, curr) {
// 	return acc + curr;
// });
// // 6. Ubah detik ke jam menit detik
// const jam = Math.floor(jsVideos/3600);
// jsVideos -= 7200;
// const menit = Math.floor(jsVideos/60);
// const detik = jsVideos - menit * 60;
// // 7. Tampilin di DOM
// const wadahJumlahVideo = document.querySelector('.jumlah-video');
// const jumlahVideo = allVideos.filter(function(a) {
// 	return a.textContent.includes('JAVASCRIPT LANJUTAN');
// }).length;
// const wadahTotalDurasi = document.querySelector('.total-durasi');
// const totalDurasi = `${jam} jam ${menit} menit ${detik} detik`;
// wadahJumlahVideo.innerText = jumlahVideo;
// wadahTotalDurasi.innerText = totalDurasi;

const allVideos = Array.from(document.querySelectorAll('[data-duration]'));

let jsVideos = allVideos
	.filter(a => a.textContent.includes('JAVASCRIPT LANJUTAN'))
	.map(a => a.dataset.duration.split(':').map(parseFloat))
	.map(([minutes, seconds]) => minutes * 60 + seconds)
	.reduce((a, b) => a + b);

const jam = Math.floor(jsVideos/3600);
const menit = Math.floor((jsVideos - jam * 3600)/60);
const detik = jsVideos - jam * 3600 - menit * 60;

const wadahJumlahVideo = document.querySelector('.jumlah-video');
const jumlahVideo = allVideos.filter(a => a.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const wadahTotalDurasi = document.querySelector('.total-durasi');
const totalDurasi = `${jam} jam ${menit} menit ${detik} detik`;
wadahJumlahVideo.innerText = jumlahVideo;
wadahTotalDurasi.innerText = totalDurasi;
