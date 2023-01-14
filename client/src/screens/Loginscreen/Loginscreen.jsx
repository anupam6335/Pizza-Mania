import React, { useEffect, useState } from "react";
import styles from "./Loginscreen.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/userActions";
import Error from "../../components/Decoration/Error";
import Loading from "../../components/Decoration/Loading";
import { toast } from "react-hot-toast";

const Loginscreen = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function login() {

  if(!email || !email.includes('@') || !email.includes('.com') || !password) {
      toast("please fill the first", {
        icon: "🤔",
        style: {
          borderRadius: "10px",
          background: "#0B6623",
          color: "#fff",
        },
      });
      return;
    }
    const user = { email, password };
    dispatch(loginUser(user));
  }
  return (
    <div className={`container ${styles.login__screen}`}>
      <div className={`${styles.login__screen_margin}`}>
        <div className={`${styles.login__container}`}>
          {loading && <Loading />}
          {error && <Error error="Invalid Credentials ☹️☹️" />}
          <div className={`${styles.drop}`}>
            <div className={`${styles.content}`}>
              <h2>Sign in</h2>
              <form>
                <div className={`${styles.inputBox}`}>
                  <input
                    type="email"
                    placeholder="email"
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

                <div className={`${styles.inputBox}`} onClick={login}>
                  <input type="submit" value="Login" />
                </div>
              </form>
            </div>
          </div>
          <Link to="/register" className={`${styles.btns}`}>
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Loginscreen;
