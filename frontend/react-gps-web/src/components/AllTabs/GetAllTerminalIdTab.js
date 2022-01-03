import React, { useState } from "react";

import "./AllTabs.css";
import axios from "axios";

const GetAllTerminalIdTab = (props) => {
  const { updatePositions } = props;
  const [form, setForm] = useState({});

  const onChange = (event) => {
    setForm((previousState) => {
      return { ...form, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getAllPositionsID(form.terminalId);
  };

  const getAllPositionsID = async (item) => {
    try {
      const response = await axios.get(
        "http://localhost:8081/positions/find/" + item
      );
      updatePositions(response.data);
    } catch (error) {
      console.error();
    }
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
