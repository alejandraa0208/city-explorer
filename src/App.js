import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CityExplorer from './CityExplorer';
import CityInfo from './CityInfo';
import Map from './Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <Container className='mb-4'>
        <h1 className='mb-4'>Welcome to City Explorer!</h1>
        <Routes>
          <Route path='/' element={<CityExplorer />} />
          <Route path='city-info/:cityName/:latitude/:longitude' element={<CityInfo />} />
          <Route path='/map/:cityName/:latitude/:longitude' element={<Map />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
