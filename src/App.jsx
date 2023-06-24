/* eslint-disable no-undef */
import React from 'react';
import { LoadScript } from '@react-google-maps/api';
import { Map } from './pages/Map';

function App() {
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyCtZxUCmNcWBhajlml7HRa-vbjwcK21Rmo">
        <Map />
      </LoadScript>
    </div>
  );
}

export default App;
