import React from 'react';
import axios from 'axios';
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

class Movie extends React.Component {
  render() {
    const { image_url, title, description } = this.props.movie;
    return (
      <div className="card">
        <img src={image_url} className='card-img-top' alt={title} />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
        </div>
      </div>
    );
  }
}

class Movies extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            error: null,
        }
    }

    componentDidMount = () => {
        this.handleMovies();
    }

    handleMovies = async () => {

        axios.get(`${SERVER_URL}/movies?city=${this.props.searchQuery}`)
        .then(response => {
            this.setState({ movies: response.data });
        })
        .catch(error => {
            console.error('Unable to provide movie', error);
            this.setState({ error: error.message });
        });
    }

    render() {
        let { movies } = this.state;
        console.log(this.state);
        return (
          <div>
            <h2>Movies For Your City</h2>
            {movies.map((movie, idx) => (
              <Movie key={idx} movie={movie} />
            ))}
          </div>
        );
    }
}

export default Movies;

