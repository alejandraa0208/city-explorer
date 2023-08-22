import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function MapDisplay() {
    const { cityName, latitude, longitude } = useParams();
    const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=pk.4805ccba01b330989855f08a1d425e8b&center=${latitude},${longitude}&zoom=12`;
  
    return (
      <div className="mt-3">
        <h2>Map of {cityName}</h2>
        <Card>
            <Card.Img variant='top' src={mapUrl} alt={`Map of ${cityName}`} />
            <Card.Body>
                <Card.Title>{cityName}</Card.Title>
                <Card.Text>Latitude: {latitude}</Card.Text>
                <Card.Text>Longitude: {longitude}</Card.Text>
            </Card.Body>
        </Card>
      </div>
    );
  }
  
  export default MapDisplay;