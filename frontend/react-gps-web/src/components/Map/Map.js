import React, { useEffect, useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

import "./Map.css";
import axios from "axios";

function MapComponent(props) {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    console.log("Use effect!");
    getAllPositions();
  }, []);

  const getAllPositions = async () => {
    try {
      const response = await axios.get("http://localhost:8081/positions/all");
      setPositions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePosition = (latitude, longitude) => {};

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
            <Marker position={{ lat: item.latitude, lng: item.longitude }} />
          );
        })}
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA8rjqjRaZFQgNMrdk6oM8fAb1Vtrec7qs",
})(MapComponent);
