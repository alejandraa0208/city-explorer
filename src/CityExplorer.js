import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CityExplorer() {
    const [cityName, setCityName] = useState('');
    const history = useNavigate();

    const handleInputChange = (event) => {
        setCityName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get('https://us1.locationiq.com/v3/search.php', {
                params: {
                    key: 'pk.4805ccba01b330989855f08a1d425e8b',
                    q: cityName,
                    format: 'json'
                }
            });

            const data = response.data[0];
            const latitude = data.lat;
            const longitude = data.lon;

            history.push(`/city-info/${cityName}/${latitude}/${longitude}`);
        } catch (error) {
            console.error('Error fetching city information:', error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Enter City Name:</Form.Label>
            <InputGroup>
              <FormControl
                type="text"
                value={cityName}
                onChange={handleInputChange}
                required
              />
              <Button variant="primary" type="submit">Explore!</Button>
            </InputGroup>
          </Form.Group>
        </Form>
      );
}

export default CityExplorer;
