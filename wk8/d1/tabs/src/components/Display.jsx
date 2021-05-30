import React, { useState } from "react";
import styles from "./Tabs.module.css";

const Display = ({ tabs }) => {
  // stuff
  const [index, setIndex] = useState(0);
  return (
    <>
      <h1>hi</h1>
      {tabs.map((tab, i) => {
        return (
          <div className={styles.title} key={i} onClick={() => setIndex(i)}>
            {tab.title}
          </div>
        );
      })}

      <div className={styles.content}>{tabs[index].content}</div>
    </>
  );
};
export default Display;
