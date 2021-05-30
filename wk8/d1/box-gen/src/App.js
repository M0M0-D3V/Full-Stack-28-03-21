import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";
function App() {
  const [boxes, setBoxes] = useState([]);
      {/* default value is empty array */}
  return (
    <div className="App">
      <Form boxes={boxes} setBoxes={setBoxes} />
      {/* array of objects for boxes gets sent */}
      <Display boxes={boxes} />
    </div>
  );
}

export default App;
