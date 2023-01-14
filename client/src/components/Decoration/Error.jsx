import React from "react";
import styles from "./Decorate.module.css";
const Error = ({ error }) => {
  return (
    <div classNameName={`container ${styles.loader__screen}`}>
      <div className={`${styles.error__div}`}>
        <h2 className={`${styles.h2__error}`}> {error ? error : "check your internet connection"}</h2>
      </div>
    </div>
  );
};

export default Error;
