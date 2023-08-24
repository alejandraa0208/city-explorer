import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

function Weather() {
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('http://localhost:3001/weather');
        setForecastData(response.data);
      } catch (error) {
        setError('Error fetching weather data');
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="mt-4">
      <h2>Weather Forecast</h2>
      {error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <div className="card">
          <ul className="list-group list-group-flush">
            {forecastData.map((data, index) => (
              <li className="list-group-item" key={index}>
                <p>Date: {data.date}</p>
                <p>Temperature: {data.temperature}°C</p>
                {/* Add more weather details here */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Weather;

