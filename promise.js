PROMISE
Object yg merepresent keberhasilan/kegagalan sebuah even yg async di masa yg akan datang
janji (terpenuhi / ingkar)
states (fulfilled / rejected / pending)
callback (resolve / reject / finally)
aksi (then / catch)


CONTOH 1
let ditepati = false;

const janji1 = new Promise((resolve,reject) => {
	if (ditepati) {
		resolve('janji telah ditepati');
	} else {
		reject('ingkar janji...')
	}
})

janji1
	.then(response => console.log(`yoo ${response}`))
	.catch(response => console.log(`gagal ${response}`));




CONTOH 2
let ditepati = false;

const janji2 = new Promise((resolve, reject) => {
	if (ditepati) {
		setTimeout(() => {
			resolve('ditepati setelah 2 detik');
		}, 2000)
	} else {
		setTimeout(() => {
			reject('tidak ditepati setelah 2 detik');
		}, 2000)
	}
})

console.log('mulai');
// console.log(janji2.then(() => console.log(janji2)));
janji2
	.finally(() => console.log('tunggu usai'))
	.then(response => console.log(`yoo ${response}`))
	.catch(response => console.log(`gagal ${response}`));

console.log('selesai')



PROMISE.ALL()

const film = new Promise(resolve => {
	setTimeout(() => {
		resolve([{
			judul: 'Harry Potter',
			sutradara: 'bobo',
			tahun: 1992
		}])
	}, 1000)
});

const cuaca = new Promise(resolve => {
	setTimeout(() => {
		resolve([{
			kota: 'medan',
			suhu: 23,
			ket: 'hujan'
		}])
	}, 500)
});

film.then(response => console.log(response));
cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
	.then(response => console.log(response));

	.then(response => {
		const [film, cuaca] = response;
		console.log(film);
		console.log(cuaca);
	})
