import React, { useState } from "react";

import "./AllTabs.css";

const GetAllTerminalIdTab = () => {
  const [form, setForm] = useState({});

  const onChange = (event) => {
    setForm((previousState) => {
      return { ...form, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.terminalId);
    form.terminalId = "";
  };

  return (
    <div className="GetAllTerminalIdTab">
      <form onSubmit={handleSubmit}>
        <div className="textInput">
          <label>Terminal ID</label>

          <input
            className="form-control form-control-md"
            name="terminalId"
            type="text"
            value={form.terminalId}
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

export default GetAllTerminalIdTab;
