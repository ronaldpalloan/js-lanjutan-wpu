// const x = 10;
// console.log(`${alert('halo')}`);


// 1.HTML Fragments
// const mhs = {
// 	nama: 'ronald',
// 	umur: 22
// }

// const el = 
// `<div class="container">
// 	<h1>${mhs.nama}</h1>
// 	<p>${mhs.umur} tahun</p>
// </div>`;

// console.log(el);


// 2.Looping
// const mhs = [
// 	{
// 		nama: 'ronald',
// 		umur: 22
// 	},

// 	{
// 		nama: 'alex',
// 		umur: 25
// 	},

// 	{
// 		nama: 'olivia',
// 		umur: 20
// 	}
// ];

// const el = 
// `<div class="mhs">
// 	${mhs.map(a => `<ul>
// 		<li>${a.nama}</li>
// 		<li>${a.umur} tahun</li>
// 	</ul>`).join('')}
// </div>`;

// 3. Conditionals
// ternary
// const lagu = {
// 	judul: 'wss',
// 	band: 'bloo',
// 	feat: 'crown'
// }

// const el = 
// `<div class="cont">
// 	<ul>
// 		<li>${lagu.band} ${(lagu.feat) ? `(feat. ${lagu.feat})` : '(solo)'}</li>
// 		<li>${lagu.judul}</li>
// 	</ul>
// </div>
// `

// 4. Nested
// html fragments bersarang
const dci = {
	nama: 'Drum Corps International',
	season: 2023,
	team: [
	'Blue Devils',
	'Bluecoats',
	'Carolina Crown',
	'Boston Crusaders'
	]
};

function cetakInfo(nama, season) {
	return `
	<h2>${nama}</h2>
	<span>Seasonss: ${season}</span>
	<h3>Top 4: </h3>`
}

function cetakTim(team) {
	return `
	<ol>
		${team.map(a => `<li>${a}</li>`
		).join('')}
	</ol>`
}

const el =
`<div class="container">
	${cetakInfo(dci.nama, dci.season)}
  ${cetakTim(dci.team)}
</div>`

document.body.innerHTML = el;

