import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ErrorAlert from './ErrorAlert';
import { useErrorContext } from './ErrorContext';

function CityInfo(props) {
    const { cityName, latitude, longitude } = useParams();
    const { error } = useErrorContext;

    return (
        <div className='mt-3'>
            <h2>City Information</h2>
            {error && <ErrorAlert statusCode={error.statusCode} message={error.message} />}
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
