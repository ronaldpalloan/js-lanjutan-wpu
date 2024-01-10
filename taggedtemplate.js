const nama = 'ronald';
const umur = 22;
const warna = 'hijau';

function coba(strings, ...values) {

	return strings.reduce(function(acc, curr, i) {
		return `${acc}${curr}<span class="hl">${values[i] || ''}</span>`;
	}, '');
}	

const str = coba`Halo ${nama}, yang umurnya ${umur} tahun, warna ${warna}`;

document.body.innerHTML = str;
	// let hasil = '';
	// strings.forEach((a, i) => {
	// 	hasil += `${a}${values[i] || ''}`
	// });
	// return hasil;