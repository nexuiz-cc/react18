/*global google*/
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {
  withGoogleMap,
  Marker,
  GoogleMap,
  DirectionsRenderer
} from 'react-google-maps';
class Map extends Component {
  state = {
    directions: null,
    markerPos: null,
    centerMarker: null,
    currentLocation: null
  };

  componentDidMount = () => {
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        const pos = { lat, lng };
        this.setState({ currentLocation: pos, centerMarker: pos });
      }
    );
  };

  onMapClick = e => {
    this.setState({ markerPos: e.latLng });
  };

  getDirections = () => {
    const directionsService = new google.maps.DirectionsService();

    const origin = this.state.currentLocation;
    const destination = this.state.markerPos;

    if (origin !== null && destination !== null) {
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    } else {
      console.log('Please mark your destination in the map first!');
    }
  };

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={13}
        center={this.state.currentLocation}
        onClick={this.onMapClick}
      >
        {this.state.centerMarker !== null && (
          <Marker position={this.state.centerMarker} label={'userloc'} />
        )}
        {this.state.markerPos !== null && (
          <Marker position={this.state.markerPos} />
        )}
        {this.state.directions !== null && (
          <DirectionsRenderer
            directions={this.state.directions}
            defaultOptions={{
              suppressMarkers: true
            }}
          />
        )}
      </GoogleMap>
    ));

    return (
      <div>
        <Button onClick={this.getDirections}>Get Direction</Button>
        <GoogleMapExample
          containerElement={<div style={{ height: `500px`, width: '500px' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;
