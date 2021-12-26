import React, { useState } from "react";

import DeleteTab from "../AllTabs/DeleteTab";
import UpdateTab from "../AllTabs/UpdateTab";
import GetAllTab from "../AllTabs/GetAllTab";
import GetAllDateTab from "../AllTabs/GetAllDateTab";
import GetAllTerminalID from "../AllTabs/GetAllTerminalIdTab";

import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tabGetAllDate");

  const handleTabDelete = () => {
    setActiveTab("tabDelete");
  };
  const handleTabUpdate = () => {
    setActiveTab("tabUpdate");
  };
  const handleTabGetAll = () => {
    setActiveTab("tabGetAll");
  };
  const handleTabGetAllDate = () => {
    setActiveTab("tabGetAllDate");
  };
  const handleTabGetAllTerminalID = () => {
    setActiveTab("tabGetAllTerminalID");
  };

  return (
    <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "tabDelete" ? "active" : ""}
          onClick={handleTabDelete}
        >
          Delete
        </li>

        <li
          className={activeTab === "tabUpdate" ? "active" : ""}
          onClick={handleTabUpdate}
        >
          Update
        </li>

        <li
          className={activeTab === "tabGetAll" ? "active" : ""}
          onClick={handleTabGetAll}
        >
          Get All
        </li>

        <li
          className={activeTab === "tabGetAllDate" ? "active" : ""}
          onClick={handleTabGetAllDate}
        >
          Get by Date
        </li>

        <li
          className={activeTab === "tabGetAllTerminalID" ? "active" : ""}
          onClick={handleTabGetAllTerminalID}
        >
          Get by ID
        </li>
      </ul>

      <div className="outlet">
        {activeTab === "tabUpdate" ? (
          <UpdateTab />
        ) : activeTab === "tabGetAll" ? (
          <GetAllTab />
        ) : activeTab === "tabGetAllTerminalID" ? (
          <GetAllTerminalID />
        ) : activeTab === "tabGetAllDate" ? (
          <GetAllDateTab />
        ) : (
          <DeleteTab />
        )}
      </div>
    </div>
  );
};

export default Tabs;
