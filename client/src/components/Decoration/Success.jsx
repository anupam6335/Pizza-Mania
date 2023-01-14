import React from "react";
import styles from "./Decorate.module.css";
const Success = ({ success }) => {
  return <div classNameName={`container ${styles.loader__screen}`}>
      <div className={`${styles.success__message}`}>{success}</div> 
    </div>;
};

export default Success;
