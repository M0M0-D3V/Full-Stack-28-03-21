import React, { useEffect, useState } from "react";
import axios from "axios";
const Kitteh = (meow) => {
  const [kittehs, setKittehs] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.thecatapi.com/v1/images/search")
  //       .then((response) => response.json())
  //       .then((response) => {
  //         console.log(response);
  //         setKittehs(response);
  //       });
  //   }, []);

  useEffect(() => {
    axios.get("https://api.thecatapi.com/v1/images/search").then((response) => {
      console.log(response.data);
      setKittehs(response.data);
    });
  }, []);

  return (
    <>
      <h1>Showing Kitteh</h1>
      {kittehs.length > 0 &&
        kittehs.map((kitteh, index) => {
          return (
            <img
              key={index}
              src={kitteh.url}
              style={{ width: "200px" }}
              alt="kitteh"
            />
          );
        })}
    </>
  );
};

export default Kitteh;
