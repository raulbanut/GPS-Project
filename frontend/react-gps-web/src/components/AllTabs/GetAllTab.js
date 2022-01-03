import React, { useEffect } from "react";

import "./AllTabs.css";
import axios from "axios";

const GetAllTab = (props) => {
  const { updatePositions } = props;

   useEffect(() => {
     getAllPositions();
   }, []);

  const getAllPositions = async () => {
    try {
      const response = await axios.get("http://localhost:8081/positions/all");
      updatePositions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="GetAllTab">
      <p>All positions are displayed on map</p>
    </div>
  );
};

export default GetAllTab;
