import React from 'react';
import { useParams } from 'react-router-dom';

function MapDisplay(props) {
    const { cityName, latitude, longitude } = useParams();
    const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=YOUR_AUTHENTICATION_KEY&center=${latitude},${longitude}&zoom=12`;
  
    return (
      <div className="mt-3">
        <h2>Map of {cityName}</h2>
        <img src={mapUrl} alt={`Map of ${cityName}`} className="img-fluid" />
      </div>
    );
  }
  
  export default MapDisplay;