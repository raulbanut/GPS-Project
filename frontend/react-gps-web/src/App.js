// import logo from "./logo.svg";
import MapComponent from "./components/Map";
import Tabs from "./components/Tabs";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="header">
          <Tabs />
        </div>
        <div className="content">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
