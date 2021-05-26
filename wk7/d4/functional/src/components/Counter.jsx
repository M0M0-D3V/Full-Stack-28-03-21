import React, { useState } from "react";

const Counter = (props) => {
  const [state, setState] = useState({
    clickCount: 0,
  });
  const [number, setNumber] = useState(0);

  const countUp = () => {
    setNumber(number + 1);
    setState({ clickCount: state.clickCount + 1 });
  };

  return (
    <div>
      <p>state.clickCount: {state.clickCount}</p>
      <p>number: {number}</p>
      <button onClick={countUp}>Count Up!</button>
    </div>
  );
};

export default Counter;
