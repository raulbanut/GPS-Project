import React, { useState } from "react";

import "./AllTabs.css";

const GetAllDateTab = () => {
  const [form, setForm] = useState({});

  const onChange = (event) => {
    setForm((previousState) => {
      return { ...form, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form.terminalId);
  };

  return (
    <div className="GetAllDateTab">
      <form onSubmit={handleSubmit}>
        <div className="textInput">
          <label>Start Date</label>

          <input
            className="form-control form-control-md"
            name="id"
            type="text"
            value={form.id}
            onChange={onChange}
          />
        </div>

        <div className="textInput">
          <label>End Date</label>

          <input
            className="form-control form-control-md"
            name="longitude"
            type="text"
            value={form.longitude}
            onChange={onChange}
          />
        </div>

        <div className="textInput">
          <input className="submitButton" type="submit" value="Get" />
        </div>
      </form>
    </div>
  );
};

export default GetAllDateTab;
