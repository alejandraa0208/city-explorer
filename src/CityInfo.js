import React from 'react';
import { Link, useParams } from 'react-router-dom';

function CityInfo(props) {
    const { cityName, latitude, longitude } = useParams();

    return (
        <div className='mt-3'>
            <h2>City Information</h2>
            <p><strong>City Name:</strong> {cityName}</p>
            <p><strong>Latitude:</strong> {latitude}</p>
            <p><strong>Longitude:</strong> {longitude}</p>
            <Link to={`/map/${cityName}/${latitude}/${longitude}`} className="btn btn-primary mt-3">
             Show Map
            </Link>
        </div>
    );
}

export default CityInfo;
