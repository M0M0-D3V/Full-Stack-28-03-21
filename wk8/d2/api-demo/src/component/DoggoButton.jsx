import axios from "axios";
import React from "react";

const DoggoButton = ({ setDoggos }) => {
  const getDoggos = () => {
    axios
      .get("https://random.dog/doggos")
      .then((response) => {
        console.log(response.data);
        setDoggos(response.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <button onClick={getDoggos}>Get Doggos!</button>
    </>
  );
};

export default DoggoButton;
