import React, { useState } from "react";
import styles from "./Registerscreen.module.css";
import { Link } from "react-router-dom";
const Registerscreen = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  function register(e) {
    e.preventDefault();
    if (password != cpassword) {
      alert("passwords not matched");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
    }
  }

  return (
    <div className={`container ${styles.login__screen}`}>
      <div className={`${styles.login__screen_margin}`}>
        <div className={`${styles.login__container}`}>
          <div className={`${styles.drop}`}>
            <div className={`${styles.content}`}>
              <h2>Sign up</h2>
              <form>
                <div className={`${styles.inputBox}`}>
                  <input
                    type="text"
                    placeholder="name"
                    required
                    value={name}
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                  />
                </div>
                <div className={`${styles.inputBox}`}>
                  <input
                    type="email"
                    placeholder="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                </div>
                <div className={`${styles.inputBox}`}>
                  <input
                    type="password"
                    placeholder="password"
                    value={password}
                    required
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                </div>
                <div className={`${styles.inputBox}`}>
                  <input
                    type="password"
                    placeholder="confirm password"
                    value={cpassword}
                    required
                    onChange={(e) => {
                      setcpassword(e.target.value);
                    }}
                  />
                </div>

                <div className={`${styles.inputBox}`} onClick={register}>
                  <input type="submit" value="Register" />
                </div>
              </form>
            </div>
          </div>
          <Link to="/login" className={`${styles.btns}`}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registerscreen;
