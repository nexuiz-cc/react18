import React, { Component } from 'react';
import { render } from 'react-dom';
import { LoadScript } from '@react-google-maps/api';
import Map from './pages/Map';


const lib = ['places'];
const key = 'AIzaSyCtZxUCmNcWBhajlml7HRa-vbjwcK21Rmo'; // PUT GMAP API KEY HERE
class App extends React.Component {
  render() {
    return (
      <LoadScript googleMapsApiKey={key} libraries={lib}>
        <Map />
      </LoadScript>
    );
  }
}

render(<App />, document.getElementById('root'));
