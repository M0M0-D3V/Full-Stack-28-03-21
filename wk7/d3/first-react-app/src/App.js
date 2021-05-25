import "./App.css";
import ToDo from "./components/ToDo";
import NewComponent from "./components/NewComponent";
import LightSwitch from "./components/LightSwitch";
// function App() {
//   // do logic here
//   return (
//     <>
//       <h1>Hello World</h1>
//       <p>This is a paragraph</p>
//       <ToDo />
//     </>
//   );
// }

// export default App;

import React, { Component } from "react";

class App extends Component {
  render() {
    const alertMessage = () => {
      alert("This button has been clicked!");
      console.log("yay we have successfully done an alert (:");
    };
    return (
      <>
        <h1>Hello World</h1>
        <p>This is a paragraph</p>
        <button onClick={alertMessage}>
          {/* function() {alert("message")} */}
          Click Me
        </button>
        <ToDo
          charmander="this is char char!"
          prop1="something else"
          number={42}
        />
        <NewComponent bananaa={"Header Prop"}>
          <p>This is a child</p>
          <p>This is another child</p>
          <p>This is even another child</p>
        </NewComponent>
        <LightSwitch />
      </>
    );
  }
  componentDidMount() {
    console.log("component just mounted (:");
  }
}

export default App;
