document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    const apiKey = '2c4a9fe6';
    const url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Response Data:', data);
            if (data.Response === 'True') {
                displayMovies(data.Search);
            } else {
                console.error('Error:', data.Error);
                document.getElementById('results-container').innerHTML = `<p>No movies found</p>`;
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayMovies(movies) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');

        movieItem.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}">
            <h2>${movie.Title}</h2>
            <p>Release Year: ${movie.Year}</p>
            <button onclick="fetchMovieDetails('${movie.imdbID}')">More Info</button>
        `;

        resultsContainer.appendChild(movieItem);
    });
}

function fetchMovieDetails(imdbID) {
    const apiKey = '2c4a9fe6';
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(movieDetails => {
            console.log('Movie Details:', movieDetails);
            displayMovieDetails(movieDetails);
        })
        .catch(error => console.error('Error fetching movie details:', error));
}

function displayMovieDetails(movie) {
    const modal = document.getElementById('modal');
    const movieDetailsContainer = document.getElementById('movie-details');

    movieDetailsContainer.innerHTML = `
        <h2>${movie.Title}</h2>
        <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}">
        <p><strong>Release Year:</strong> ${movie.Year}</p>
        <p><strong>Genre:</strong> ${movie.Genre}</p>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Actors:</strong> ${movie.Actors}</p>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
        <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
    `;

    modal.style.display = 'block';
}

document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
