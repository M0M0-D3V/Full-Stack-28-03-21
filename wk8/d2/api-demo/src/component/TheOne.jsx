import React, { useEffect, useState } from "react";
import axios from "axios";
const TheOne = (rule) => {
  const [theOnes, setTheOnes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  //   USING FETCH:
  //   useEffect(() => {
  //     fetch("https://the-one-api.dev/v2/book")
  //       .then((response) => response.json())
  //       .then((response) => {
  //         console.log(response.docs);
  //         setTheOnes(response.docs);
  //         setIsLoaded(true);
  //       });
  //   }, [isLoaded]);

  // USING AXIOS
  useEffect(() => {
    axios.get("https://the-one-api.dev/v2/book").then((response) => {
      console.log(response.data);
      setTheOnes(response.data.docs);
    });
  }, []);

  return (
    <>
      <h1>Lord Of The Ring Books</h1>
      {theOnes.length > 0 &&
        theOnes.map((theOne, index) => {
          return <div key={index}>{theOne.name}</div>;
        })}
    </>
  );
};

export default TheOne;
