import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CityExplorer from './components/CityExplorer';
import CityInfo from './components/CityInfo';
import Movies from './components/Movies';
import Weather from './components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <Router>
      <Container className='mb-4'>
        <h1 className='mb-4'>Welcome to City Explorer!</h1>
        <h2 className='mb-4'>Begin your search below</h2>
        <Routes>
          <Route path='/' element={<CityExplorer />} />
          <Route path='city-info/:cityName/:latitude/:longitude' element={<CityInfo />} />
          <Route path='/weather' element={<Weather />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
