import React, { useState } from "react";

import "./AllTabs.css";
import axios from "axios";

const GetAllDateTab = (props) => {
  const { updatePositions } = props;
  const [form, setForm] = useState({});

  const onChange = (event) => {
    setForm((previousState) => {
      return { ...form, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getAllPositionsDate();
  };

  const getAllPositionsDate = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/positions/find/allByCreationDate",
        {
          params: {
            startDate: form.startDate,
            endDate: form.endDate,
          },
        }
      );
      // console.log(response.data);
      updatePositions(response.data);
    } catch (error) {
      alert("There are no positions between the input dates!");
      console.error();
    }
  };

  return (
    <div className="GetAllDateTab">
      <form onSubmit={handleSubmit}>
        <div className="textInput">
          <label>Start Date</label>

          <input
            className="form-control form-control-md"
            name="startDate"
            type="datetime-local"
            value={form.startDate}
            onChange={onChange}
          />
        </div>

        <div className="textInput">
          <label>End Date</label>

          <input
            className="form-control form-control-md"
            name="endDate"
            type="datetime-local"
            value={form.endDate}
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
