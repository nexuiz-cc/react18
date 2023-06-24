import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import PlaceInfo from './pages/PageInfo';

const containerStyle = {
  width: '1900px',
  height: '700px',
};
const center = {
  lat: 35.69575,
  lng: 139.77521,
};

function App() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCtZxUCmNcWBhajlml7HRa-vbjwcK21Rmo">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        <PlaceInfo />

      </GoogleMap>
    </LoadScript>
  );
}

export default App;
