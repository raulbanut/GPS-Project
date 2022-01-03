import React, { useEffect, useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

import "./Map.css";

function MapComponent(props) {
  const { positions: searchedPositions, updatePosition } = props;
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    setPositions(searchedPositions);
  }, [searchedPositions]);

  const onMarkerClick = (e) => {
    if (updatePosition && typeof updatePosition === "function") {
      updatePosition({ latitude: e.position.lat, longitude: e.position.lng });
    }
  };

  return (
    <div className="map-wrapper">
      <Map
        google={props.google}
        initialCenter={{
          lat: 46.770439,
          lng: 23.591423,
        }}
        zoom={13}
      >
        {positions.map((item) => {
          return (
            <Marker
              key={item.id}
              onClick={onMarkerClick}
              position={{ lat: item.latitude, lng: item.longitude }}
            />
          );
        })}
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapComponent);
