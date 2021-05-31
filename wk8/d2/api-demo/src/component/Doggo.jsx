import axios from "axios";
import React, { useEffect, useState } from "react";

const Doggo = ({ showDoggos }) => {
  // const [showDoggos, setDoggos] = useState([]);

  //   useEffect(() => {
  //     fetch("https://random.dog/doggos")
  //       .then((response) => response.json())
  //       .then((response) => {
  //         console.log(response);
  //         setDoggos(response);
  //       });
  //   }, []);

  // useEffect(() => {
  //   axios.get("https://random.dog/doggos").then((response) => {
  //     console.log(response.data);
  //     setDoggos(response.data);
  //   });
  // });

  return (
    <>
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

export default Doggo;
