import React from "react";
import styles from "./Decorate.module.css";
const Loading = () => {
  return (
    <div className={`container ${styles.loader__screen}`}>
      <div className={`${styles.loader}`}>
      </div>
    </div>
  );
};

export default Loading;
