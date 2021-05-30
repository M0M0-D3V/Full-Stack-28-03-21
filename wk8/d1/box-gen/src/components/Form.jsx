import React, { useState } from "react";

// const Form = (props) => {
//   const { boxes, setBoxes } = props;
// destructuring option
const Form = ({ boxes, setBoxes }) => {
  // useState just for the Form
  const [color, setColor] = useState("");
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  // logic
  const submitHandle = (e) => {
    e.preventDefault();
    //   add to boxes
    setBoxes([...boxes, {
        styles: {
            background: color ? color: "blue",
            height: height? `${height}px` : 200 + "px",
            width: width? `${width}px` :200 + "px",
            margin: 5 + "px"
        }
    }]);
    console.log(`adding to boxes array: ${color}`);
    setColor("")
    setHeight(null)
    setWidth(null)



  };
  // return
  return (
    <div>
      <form onSubmit={submitHandle}>
        <label>Color:</label>
        <input
          type="text"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
        <p>
          Height:
          <input
            type="number"
            // min="1"
            step="1"
            onChange={(e) => setHeight(e.target.value)}
            value={height}
          />
        </p>
        <p>
          Width:
          <input
            type="number"
            // min="1"
            step="1"
            onChange={(e) => setWidth(e.target.value)}
            value={width}
          />
        </p>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
