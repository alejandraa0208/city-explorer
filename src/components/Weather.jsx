import React, { Component } from "react";
import axios from "axios";
import { Alert } from 'react-bootstrap'; 
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

class WeatherDay extends Component {
  render() {
    const { date, temperature } = this.props;
    return (
      <li className="list-group-item">
        <p>Date: {date}</p>
        <p>Temperature: {temperature}°C</p>
      </li>
    );
  }
}

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastData: [],
      error: null
    };
  }

  componentDidMount() {
    const { lat, lon } = this.props;
    axios.get(`${SERVER_URL}/weather?lat=${lat}&lon=${lon}`)
      .then(response => {
        this.setState({ forecastData: response.data });
      })
      .catch(error => {
        console.error('Cannot load forecast', error);
        this.setState({ error: 'Failed to load weather forecast' });
      });
  }

  render() {
    const { forecastData, error } = this.state;
    return (
      <div className="mt-4">
        <h2>Weather Forecast</h2>
        {error ? (
          <Alert variant="danger">{error}</Alert>
        ) : (
          <div className="card">
            <ul className="list-group list-group-flush">
              {forecastData.map((data, index) => (
                <WeatherDay
                key={index}
                date={data.date}
                temperature={data.temperature}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Weather;

