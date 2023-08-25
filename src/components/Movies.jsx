import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/movies');
        setMovies(response.data);
      } catch (error) {
        setError('Error fetching movie data');
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="mt-4">
      <h2>Movies</h2>
      {error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <div className="card">
          <ul className="list-group list-group-flush">
            {movies.map((movie) => (
              <li className="list-group-item" key={movie.id}>
                <h5>{movie.title}</h5>
                <p>Release Year: {movie.release_year}</p>
                {/* Add more movie details here */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Movies;

