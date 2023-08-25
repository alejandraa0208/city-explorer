import React from 'react';
import weatherData from '../assets/weather.json';

let API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class CityExplorer extends React.Component {

  render() {

    let { location } = this.props;  
    let lat = location ? location.lat : '';
    let lon = location ? location.lon : '';

    
    let staticMapUrl = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${lat},${lon}$zoom=9`;

    return (
      <main>
        <section>
          <h2>Maps</h2>
          <p>{this.props.query}</p>
          <p>City: {location ? location.display_name : 'No location set'}</p>
          <p>MAP PLACEHOLDER</p>
          <img src={location ? staticMapUrl : "https://placehold.co/600x400" }alt="" />
        </section>
        <section>
          <ul>
          {weatherData && weatherData.data ? (
              weatherData.data.map((dailyForecast, index) => (
                <li key={index}>
                  <p>{dailyForecast.datetime}</p>
                  <p>{dailyForecast.temp}</p>
                </li>
              ))
            ) : (
              <li>No weather data available</li>
            )}
          </ul>
        </section>
      </main>
    )
  }
}

export default CityExplorer;