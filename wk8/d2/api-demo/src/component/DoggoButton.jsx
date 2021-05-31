import axios from "axios";
import React from "react";

const DoggoButton = ({ setDoggos, showDoggos }) => {
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
      <h1>Showing Doggos</h1>
      {showDoggos.length > 0 &&
        showDoggos.map((doggo, index) => {
          return (
            <img
              key={index}
              src={`https://random.dog/${doggo}`}
              style={{ width: "200px" }}
              alt="doggo"
            />
          );
        })}
    </>
  );
};

export default DoggoButton;
