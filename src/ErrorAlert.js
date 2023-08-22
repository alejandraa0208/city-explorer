import React from 'react';
import { Alert } from 'react-bootstrap';

function ErrorAlert({ statusCode, message }) {
    return (
        <Alert variant='danger'>
            <Alert.Heading>Error {statusCode}</Alert.Heading>
            <p>{message}</p>
        </Alert>
    );
}

export default ErrorAlert;