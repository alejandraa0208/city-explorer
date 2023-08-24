import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';

const CityExplorerForm = ({ onCityExplorerSubmit }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const apiKey = 'YOUR_ACCESS_TOKEN'; // Replace with your access token
      const response = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${city}&format=json`
      );

      if (response.data.length > 0) {
        const { lat, lon, display_name } = response.data[0];
        onCityExplorerSubmit({ displayName: display_name, latitude: lat, longitude: lon });
      } else {
        setError('City not found');
      }
    } catch (error) {
      setError('Error fetching city data');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <Form.Group controlId="cityInput">
        <Form.Label>Enter City Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Explore!
      </Button>
      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
    </Form>
  );
};

export default CityExplorerForm;
