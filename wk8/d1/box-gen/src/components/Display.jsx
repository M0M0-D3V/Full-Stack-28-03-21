import React from "react";
import styles from "./BoxStyle.module.css";
const Display = ({ boxes }) => {
  //
  return (
    <>
      <h1>Showing the Boxes</h1>
      <div className={styles.boxes}>
        {boxes
          ? boxes.map((box, i) => (
              <div
                  style={box.styles}
                // style={{ backgroundColor: box, height: "200px", width: "200px"}}
                key={i}
              ></div>
            ))
          : "no boxes to show"}
      </div>
    </>
  );
};

export default Display;
