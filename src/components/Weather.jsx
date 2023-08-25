import React from "react";
import axios from "axios";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

class Weather extends React.Component {
  constructor() {}
}

const Weather = ({ forecastData }) => {

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
};
axios.get(`${SERVER_URL}/weather?lat=${lat}&lon=${lon}`)
.then(response => {
  this.setState({forecastData: response.data});
})
.catch(error => {
  console.error('Cannot load forecast', error)
});


export default Weather;

