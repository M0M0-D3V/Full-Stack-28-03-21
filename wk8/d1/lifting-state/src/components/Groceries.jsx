import React from "react";

const Groceries = (props) => {
  // this could just as easily come from props
  const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
  return (
    <ul>
      {groceryList.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

export default Groceries;
