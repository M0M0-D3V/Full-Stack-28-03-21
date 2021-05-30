import "./App.css";
import React, { useState } from "react";
import Groceries from "./components/Groceries";
import MessageForm from "./components/MessageForm";
import MessageDisplay from "./components/MessageDisplay";
import OtherInputs from "./components/OtherInputs";
function App() {
  const [msg, setMsg] = useState("There is no messages");
  const [msgList, setMsgList] = useState([]);
  return (
    <div className="App">
      <Groceries />
      <MessageForm
        setMessage={setMsg}
        message={msg}
        setList={setMsgList}
        list={msgList}
      />
      <MessageDisplay message={msg} messageList={msgList} />
      <OtherInputs />
    </div>
  );
}

export default App;
