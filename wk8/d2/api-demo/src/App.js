import "./App.css";
import React, { useEffect, useState } from "react";
import Doggo from "./component/Doggo";
import DoggoButton from "./component/DoggoButton";
import Kitteh from "./component/Kitteh";
import TheOne from "./component/TheOne";
function App() {
  const [doggos, setDoggos] = useState([]);

  return (
    <div className="App">
      <h1>Hello here are the results!</h1>
      <DoggoButton setDoggos={setDoggos} showDoggos={doggos} />
      {/* <Doggo showDoggos={doggos} /> */}
      {/* <Kitteh /> */}
      {/* <TheOne /> */}
    </div>
  );
}

export default App;

function doSomething() {
  // something
  
}

function doSomethingElse() {
  // something else
}