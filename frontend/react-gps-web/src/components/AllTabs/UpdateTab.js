import React, { useState } from "react";

import "./AllTabs.css";

const UpdateTab = () => {
  const [form, setForm] = useState({});

  const onChange = (event) => {
    setForm((previousState) => {
      return { ...form, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Am ajuns aici");
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
