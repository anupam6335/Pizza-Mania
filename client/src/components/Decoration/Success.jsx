import React from "react";
import styles from "./Decorate.module.css";
const Success = ({ success }) => {
  return <div classNameName={`container ${styles.loader__screen}`}>
      <div className={`${styles.success__message}`}></div> 
      <h5 className={styles.success__message_h5}> {success}</h5>
    </div>;
};

export default Success;
