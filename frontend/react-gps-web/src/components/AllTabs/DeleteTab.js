import React, { useState } from "react";

import "./AllTabs.css";

const DeleteTab = () => {
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
    <div className="DeleteTab">
      <form onSubmit={handleSubmit}>
        <div className="textInput">
          <label>ID</label>

          <input
            className="form-control form-control-md"
            name="id"
            type="text"
            value={form.id}
            onChange={onChange}
          />
        </div>

        <div className="textInput">
          <input className="submitButton" type="submit" value="Delete" />
        </div>
      </form>
    </div>
  );
};

export default DeleteTab;
