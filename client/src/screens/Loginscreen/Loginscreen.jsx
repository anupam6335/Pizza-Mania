import React from "react";
import styles from "./Loginscreen.module.css";
import { Link } from "react-router-dom";
const Loginscreen = () => {
  return (
    <div className={`container ${styles.login__screen}`}>
      <div className={`${styles.login__screen_margin}`}>
        <div className={`${styles.login__container}`}>
          <div className={`${styles.drop}`}>
            <div className={`${styles.content}`}>
              <h2>Sign in</h2>
              <form>
                <div className={`${styles.inputBox}`}>
                  <input type="email" placeholder="email" />
                </div>
                <div className={`${styles.inputBox}`}>
                  <input type="password" placeholder="Password" />
                </div>

                <div className={`${styles.inputBox}`}>
                  <input type="submit" value="Login" />
                </div>
              </form>
            </div>
          </div>
          <Link to="/register" className={`${styles.btns}`}>Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Loginscreen;
