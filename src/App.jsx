import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CityExplorer from './components/CityExplorer';
import Weather from './components/Weather';
import Movies from './components/Movies';
import axios from 'axios';


const API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      searchQuery: '',
      location: null,
      error: null,
      forecastData: null,
    }
  }

  handleSearch = (e) => {
    console.log('Form Submitted');
    e.preventDefault();
    console.log(API_KEY);
    axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.searchQuery}&format=json`)
    .then(response => {
      console.log('Here is your info: ', response.data);
        this.setState({ location: response.data[0] });
        const { lat, lon } = response.data[0];
        axios.get(`${SERVER_URL}/weather?lat=${lat}&lon=${lon}`)
        .then(response => {
          this.setState({forecastData: response.data});
        })
        .catch(error => {
          console.error('Something went wrong!', error)
        });
        console.log(`${SERVER_URL}/movies?search=${this.state.searchQuery}`);
      })
      .catch(error => {
        console.error('Error fetching location data: ', error);
        this.setState({ error: error.message });
      });
  }
  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  setSearchQuery = (query) => {
    this.setState({ searchQuery: query });
  }

  render() {
    
    return (
      <>
        <header>
          <h1>Welcome to City Explorer!</h1>
        </header>
          <form onSubmit={this.handleSearch}>
            <input placeholder="Begin your search" type="text" name="city" onChange={this.handleChange} />
            <button type='submit'>
              Explore!
            </button>
          </form>
          <CityExplorer location={this.state.location} query={this.state.searchQuery} />
          {this.state.movies && this.state.movies.length > 0 && <Movies movies={this.state.movies} />}
        {this.state.error
          ? (
            <h2>
              {this.state.error.message}<span onClick={() => this.setState({ error: null })}>X</span>
            </h2>
          )
          : null}
          {this.state.forecastData ? (
            < Weather forecastData={this.state.forecastData} />
          ) : null}
          <Movies searchQuery={this.state.searchQuery}/>
      </>
    )
  }
}


export default App
