// BUAT AJAX
// const ajax = new XMLHttpRequest();
// ajax.open('GET', 'pzn/api/hello.json');

// // CALLBACK UTK MENERIMA RESPONS DARI SERVER
// ajax.addEventListener('load', () => {
// 	const response = ajax.responseText;
// 	console.log(response);
// 	const header = document.getElementById('header');
// 	header.textContent = `Halo ${response.nama} yang umurnya ${response.umur} tahun`;
// })

// // KIRIM AJAX KE SERVER
// ajax.send();

console.log('mulai');

$.ajax({
	url: 'pzn/api/hello.json',
	success: mhs => {
		for (let props in mhs) {
			console.log(mhs[props]);
		}
	},
	error: e => {
		console.log(e.responseText);
	}
})

console.log('selesai');