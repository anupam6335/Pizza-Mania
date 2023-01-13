import React from "react";
import styles from "./Registerscreen.module.css";
import { Link } from "react-router-dom";
const Registerscreen = () => {
  return (
    <div className={`container ${styles.login__screen}`}>
      <div className={`${styles.login__screen_margin}`}>
        <div className={`${styles.login__container}`}>
          <div className={`${styles.drop}`}>
            <div className={`${styles.content}`}>
              <h2>Sign up</h2>
              <form>
                <div className={`${styles.inputBox}`}>
                  <input type="text" placeholder="name" />
                </div>
                <div className={`${styles.inputBox}`}>
                  <input type="email" placeholder="email" />
                </div>
                <div className={`${styles.inputBox}`}>
                  <input type="password" placeholder="Password" />
                </div>
                <div className={`${styles.inputBox}`}>
                  <input type="password" placeholder="Confirm Password" />
                </div>

                <div className={`${styles.inputBox}`}>
                  <input type="submit" value="Register" />
                </div>
              </form>
            </div>
          </div>
          <Link to="/login" className={`${styles.btns}`}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Registerscreen;
