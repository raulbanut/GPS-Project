import React, { useEffect, useState } from "react";

import "./AllTabs.css";
import axios from "axios";

const UpdateTab = (props) => {
  const { position, positions } = props;

  const [form, setForm] = useState({
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    const obiect = updatePositionObject(position);
    setForm({
      id: obiect?.id,
      latitude: position?.latitude,
      longitude: position?.longitude,
    });
  }, [position]);

  const updatePositionObject = (position) => {
    const searchedPosition = positions.find(
      (item) =>
        item.latitude === position?.latitude &&
        item.longitude === position?.longitude
    );
    return searchedPosition;
  };

  const onChange = (event) => {
    setForm((previousState) => {
      return { ...form, [event.target.name]: event.target.value };
    });
  };

  useEffect(() => {
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePosition();
    setForm({ latitude: "", longitude: "" });
  };

  const updatePosition = async () => {
    try {
      const response = await axios.put(
        "http://localhost:8081/positions/update/" + form.id,
        { latitude: form.latitude, longitude: form.longitude }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="UpdateTab">
      <form onSubmit={handleSubmit}>
        <div className="textInput">
          <label>Latitude</label>

          <input
            className="form-control form-control-md"
            name="latitude"
            type="text"
            value={form.latitude}
            onChange={onChange}
          />
        </div>

        <div className="textInput">
          <label>Longitude</label>

          <input
            className="form-control form-control-md"
            name="longitude"
            type="text"
            value={form.longitude}
            onChange={onChange}
          />
        </div>

        <div className="textInput">
          <input className="submitButton" type="submit" value="Update" />
        </div>
      </form>
    </div>
  );
};

export default UpdateTab;
