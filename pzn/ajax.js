// BUAT AJAX
const ajax = new XMLHttpRequest();
ajax.open('GET', 'api/hello.json');

// CALLBACK UTK MENERIMA RESPONS DARI SERVER
ajax.addEventListener('load', () => {
	const response = JSON.parse(ajax.responseText);
	console.log(response);
	const header = document.getElementById('header');
	header.textContent = `Halo ${response.nama} yang umurnya ${response.umur} tahun`;
})

// KIRIM AJAX KE SERVER
ajax.send();


AJAX STATUS

const ajax = new XMLHttpRequest();
// NGECEK STATE AJAX
ajax.addEventListener('readystatechange', function() {
	console.log(ajax.readyState);
})

ajax.open('GET', 'api/hello.json');

ajax.addEventListener('load', () => {
	function tampilkan(x) {
		const header = document.getElementById('header');
		header.textContent = x.response;
	}

	if (ajax.status === 200) {
		const response = JSON.parse(ajax.responseText);
		tampilkan(response);
	} else {
		tampilkan({response: `tidak bisa, error dengan kode ${ajax.status}`});
	}
})

ajax.send();





KIRIM DATA AJAX KE SERVER
function doLogin() {
	const ajax = new XMLHttpRequest();
	ajax.open('POST', 'https://eoy6gjmjg3h456f.m.pipedream.net/');

	ajax.addEventListener('load', () => {
		const response = document.getElementById('footer');
		response.textContent = ajax.responseText;
	})

	ajax.setRequestHeader('Content-Type', 'application/json');

	const json = {
		nama: document.getElementById('nama').value,
		password: document.getElementById('password').value
	}

	ajax.send(JSON.stringify(json));
}

document.getElementById('login').addEventListener('click', doLogin);