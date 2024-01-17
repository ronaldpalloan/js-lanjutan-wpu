// const janji1 = new Promise(resolve => {
// 	setTimeout(() => {
// 		resolve('berhasil');
// 	}, 1000)
// });

// // console.log(janji1);
// janji1.then(() => console.log(janji1));

function cobaPromise() {
	return new Promise((resolve, reject) => {
		const waktu = 6000;
		if ( waktu < 5000) {
			setTimeout(() => {
				resolve('berhasil');
			}, waktu)
		} else {
			reject('gagal');
		}
	});
}

// const coba = cobaPromise();
// coba
// 	.then(response => console.log(response))
// 	.catch(response => console.log(response));
// coba.then(coba => console.log(coba));

async function cobaAsync() {
	try {
		const coba = await cobaPromise();
		console.log(coba);
	} catch (resp) {
		console.log(resp);
	}
}

cobaAsync();