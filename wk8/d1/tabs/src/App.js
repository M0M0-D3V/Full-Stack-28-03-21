import "./App.css";
import React, { useState } from "react";
// import Form from './components/Form'
import Display from "./components/Display";
function App() {
  // what info do we need to pass?
  const [tabs, setTabs] = useState([
    {
      // array of objects
      title: "First",
      content: "Tab 1 content is showing here",
    },
    {
      title: "Second",
      content: "Tab 2 content is showing here",
    },
    {
      title: "Third",
      content: "Tab 3 content is showing here",
    },
  ]);
  return (
    <div className="App">
      <Display tabs={tabs} />
    </div>
  );
}

export default App;
