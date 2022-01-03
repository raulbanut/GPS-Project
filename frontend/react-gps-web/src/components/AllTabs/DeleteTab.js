import React, { useEffect, useState } from "react";

import "./AllTabs.css";
import axios from "axios";

const DeleteTab = (props) => {
  const { position, positions } = props;

  const [form, setForm] = useState({});

  useEffect(() => {
    const obiect = deletePositionObject(position);
    setForm({
      id: obiect?.id,
    });
  }, [position]);

  const deletePositionObject = (position) => {
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

  const removePosition = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:8081/positions/delete/" + form.id
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    removePosition();
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
