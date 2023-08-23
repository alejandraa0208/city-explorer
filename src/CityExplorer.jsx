import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import ErrorAlert from './ErrorAlert';

const CityExplorer = ({ onCityExplorerSubmit }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const apiKey = 'pk.4805ccba01b330989855f08a1d425e8b';
      const response = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${city}&format=json`
      );

      if(response.data.length > 0) {
        const { lat, lon, display_name } = response.data[0];
        onCityExplorerSubmit({ displayName: display_name, latitude: lat, longitude: lon });
      } else {

      }
    } catch (error) {
      setError(error);

    }
  };

  return (
      <Form onSubmit={handleSubmit} className='mt-4'>
        <Form.Group controlId='cityInput'>
          <Form.Label>Enter City Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder='City Name'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
        </Form.Group>
        <Button variant="primary" type="submit">Explore!</Button>
        {error && <ErrorAlert error={error} />}
      </Form>
    );

}

export default CityExplorer;
