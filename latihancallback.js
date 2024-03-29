// $('.search-button').on('click', function() {
// 	$.ajax({
// 		url: 'http://www.omdbapi.com/?apikey=e9a97dc6&s=' + $('.input-keyword').val(),
// 		success: hasil => {
			// console.log(hasil);
			// const movies = hasil.Search;
			// console.log(movies); 
			// let daftar = '';

			// movies.forEach(a => {
			// 	daftar += daftarMovie(a);
			// })
	    
	  //   $('.listMovies').html(daftar);

	  //   $('.detail-button').on('click', function() {
	  //   	$.ajax({
	  //   		url: 'http://www.omdbapi.com/?apikey=e9a97dc6&i=' + $(this).data('imdb'),
	  //   		success: a => {
	  //   			const movieDetail = daftarDetail(a);

	  //     		$('.modal-body').html(movieDetail);
// 	    		},
// 	    		error: e => {
// 						console.log(e.responseText);
// 					}
// 	    	})
// 	    })
// 		},
// 		error: e => {
// 			console.log(e.responseText);
// 		}
// 	})	
// })



// FETCH
// const searchButton = document.querySelector('.search-button');

// searchButton.addEventListener('click', function() {
// 	const inputJudul = document.querySelector('.input-keyword');
// 	fetch('http://www.omdbapi.com/?apikey=e9a97dc6&s=' + inputJudul.value)
// 		.then(response => response.json())
// 		.then(response => {
// 			const movies = response.Search;
// 			let daftar = '';
// 			movies.forEach(a => daftar += daftarMovie(a));
// 			document.querySelector('.listMovies').innerHTML = daftar;

// 			const detailButton = document.querySelectorAll('.detail-button');
// 			detailButton.forEach(btn => {
// 				btn.addEventListener('click', function() {
// 					console.log(this.dataset.imdb);
// 					fetch(`http://www.omdbapi.com/?apikey=e9a97dc6&i=${this.dataset.imdb}`)
// 						.then(response => response.json())
// 						.then(response => {
// 							const movieDetail = daftarDetail(response);
// 							document.querySelector('.modal-body').innerHTML = movieDetail;
// 						});
// 				})
// 			})
			
// 		});

// })


// FETCH REFACTORING, ASYNC AWAIT
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', async function() {
	try {
		const inputJudul = document.querySelector('.input-keyword');
		const movies = await getMovies(inputJudul.value);
		updateList(movies);
	} catch(error) {
		alert(error);	
	}
});

function getMovies(movies) {
	return fetch('http://www.omdbapi.com/?apikey=e9a97dc6&s=' + movies)
		.then(response => {
			// MENANGANI LINK YG ERROR
			if (response.ok === false) {
				throw new Error(response.status);
			} 
			return response.json();
		})
		.then(response => {
			// MENANGANI JUDUL
			if (response.Response === 'False') {
				throw new Error(response.Error);
			}
			return response.Search;
		})
}

function updateList(movies) {
	let daftar = '';
	movies.forEach(a => daftar += daftarMovie(a));
	document.querySelector('.listMovies').innerHTML = daftar;
}

// DETAIL MOVIE KETIKA DIKLIK
document.addEventListener('click', async function(e) {
	if (e.target.classList.contains('detail-button')) {
		try {
			const imdb = e.target.dataset.imdb;
			const detailMovie = await getDetail(imdb);
			updateDetail(detailMovie);
		} catch(error) {
			alert(error);
		}
	}
})

function getDetail(imdb) {
	return fetch(`http://www.omdbapi.com/?apikey=e9a97dc6&i=${imdb}`)
			.then(response => {
				if (response.ok === false) {
					throw new Error(response.status);
				} else {
					return response.json();
				}
			})
			.then(response => response);
}

function updateDetail(response) {
	const movieDetail = daftarDetail(response);
	document.querySelector('.modal-body').innerHTML = movieDetail;
}

function daftarMovie(a) {
	return (
	`<div class="col-md-4 my-3">
  			<div class="card">
				  <img src="${a.Poster}" class="card-img-top">
				  <div class="card-body">
				    <h5 class="card-title">${a.Title}</h5>
				    <h6 class="card-subtitle mb-2 text-muted">${a.Year}</h6>
				    <a href="#" class="btn btn-primary detail-button" data-toggle="modal" data-target="#detailMovieModal" data-imdb="${a.imdbID}">Show Details</a>
				  </div>
				</div>
  		</div>`
  )
}

function daftarDetail(a) {
	return (
	`<div class="container-fluid">
		<div class="row">
			<div class="col-md-3">
				<img src="${a.Poster}" alt="" class="img-fluid">
			</div>
			<div class="col-md">
				<ul class="list-group">
				  <li class="list-group-item"><h4>${a.Title} (${a.Year})</h4></li>
				  <li class="list-group-item"><strong>Director: </strong>${a.Director}</li>
				  <li class="list-group-item"><strong>Actors: </strong>${a.Actors}</li>
				  <li class="list-group-item"><strong>Writer: </strong>${a.Writer}</li>
				  <li class="list-group-item"><strong>Plot: </strong><br>${a.Plot}</li>
				</ul>
			</div>
		</div>
	</div>`
	)
}

