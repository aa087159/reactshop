import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
    width: '100%',
    height: '40vh'
  }

export class GoogleMap extends Component {
  render() {
    return (
        <Map
            google={this.props.google}
            style={style}
            initialCenter={{
            lat: 25.059908,
            lng: 121.535580
            }}
            zoom={15}
            onClick={this.onMapClicked}
        >
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>my map</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_MAP_KEY)
})(GoogleMap)