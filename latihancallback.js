$.ajax({
	url: 'http://www.omdbapi.com/?apikey=e9a97dc6&s=avengers',
	success: hasil => {
		console.log(hasil);
		const movies = hasil.Search;
		console.log(movies); 

		movies.forEach(item => {
			const img = item.Poster;
			const title = item.Title;
			const year = item.Year;
			let data = ''
			let data = `
			<div class="row">
    		<div class="col-md-4 my-3">
    			<div class="card">
					  <img src="${img}" class="card-img-top">
					  <div class="card-body">
					    <h5 class="card-title">${title}</h5>
					    <h6 class="card-subtitle mb-2 text-muted">${year}</h6>
					    <a href="#" class="btn btn-primary">Show Details</a>
					  </div>
					</div>
    		</div>
    	</div>`
    	return data;
		})
  	const container = document.querySelector('.container')
  	container.innerHTML = data;
	},
	error: e => {
		console.log(e.responseText);
	}
})

