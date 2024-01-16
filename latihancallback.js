$('.search-button').on('click', function() {
	$.ajax({
		url: 'http://www.omdbapi.com/?apikey=e9a97dc6&s=' + $('.input-keyword').val(),
		success: hasil => {
			console.log(hasil);
			const movies = hasil.Search;
			console.log(movies); 
			let daftar = '';

			movies.forEach(a => {
				daftar += daftarMovie(a);
			})
	    
	    $('.listMovies').html(daftar);

	    $('.detail-button').on('click', function() {
	    	$.ajax({
	    		url: 'http://www.omdbapi.com/?apikey=e9a97dc6&i=' + $(this).data('imdb'),
	    		success: a => {
	    			const movieDetail = daftarDetail(a);

	      		$('.modal-body').html(movieDetail);
	    		},
	    		error: e => {
						console.log(e.responseText);
					}
	    	})
	    })
		},
		error: e => {
			console.log(e.responseText);
		}
	})	
})




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

