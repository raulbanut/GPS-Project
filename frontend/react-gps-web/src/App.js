import React, { useState, useEffect } from "react";
import MapComponent from "./components/Map";
import Tabs from "./components/Tabs";

import axios from 'axios';
import "./App.css";

function App() {
  const [selectedPosition, setSelectedPosition] = useState();
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    getAllPositions();
  }, []);

  const updatePositions = (positions) => {
    setPositions(positions);
  };

  const getAllPositions = async () => {
    try {
      const response = await axios.get("http://localhost:8081/positions/all");
      setPositions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="page">
        <div className="header">
          <Tabs
            position={selectedPosition}
            positions={positions}
            updatePositions={updatePositions}
          />
        </div>
        <div className="content">
          <MapComponent
            positions={positions}
            updatePosition={setSelectedPosition}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
