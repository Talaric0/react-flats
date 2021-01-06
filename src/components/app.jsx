import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from "../../data/flats";
import FlatList from "./flat_list";


const Marker = ({ text }) => {
  return (
    <div className="marker">
      { text }
    </div>);
};
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlatId: 0
    };
  }

  selectFlat = (id) => {
    this.setState({
      selectedFlatId: id
    });
  }

  center() {
    return {
      lat: flats[this.state.selectedFlatId].lat,
      lng: flats[this.state.selectedFlatId].lng
    };
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} selectFlat={this.selectFlat} />
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
            defaultCenter={{
              lat: 48.85,
              lng: 2.35
            }}
            defaultZoom={13}
          >
            {flats.map((flat) => {
              return (
                <Marker
                  lat={flat.lat}
                  lng={flat.lng}
                  key={flat.id}
                  text={<i className="fas fa-home"></i>}
                />
              );
            })}

          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
