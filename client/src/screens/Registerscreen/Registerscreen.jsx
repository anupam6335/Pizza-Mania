import React, { useState } from "react";
import styles from "./Registerscreen.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../actions/userActions";
import Loading from "../../components/Decoration/Loading";
// import Success from "../../components/Decoration/Success";
// import Error from "../../components/Decoration/Error";
import { toast } from "react-hot-toast";

const Registerscreen = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const registerstate = useSelector((state) => state.registerUserReducer);
  const {  loading } = registerstate;
  const dispatch = useDispatch();
  function register(e) {
    e.preventDefault();
    if(!name) {
      toast("Enter your name please", {
        icon: "😊",
        style: {
          borderRadius: "10px",
          background: "#0B6623",
          color: "#fff",
        },
      });
      return;
    }
    else if(!email || !email.includes('@') || !email.includes('.com')) {
      toast("Enter your email please", {
        icon: "😊",
        style: {
          borderRadius: "10px",
          background: "#0B6623",
          color: "#fff",
        },
      });
      return;
    }
    else if(!password) {
      toast("Enter your password", {
        icon: "😊",
        style: {
          borderRadius: "10px",
          background: "#0B6623",
          color: "#fff",
        },
      });
      return;
    }
    else if (password !== cpassword) {
      // alert("passwords not matched");
      toast("passwords not matched", {
        icon: "😢",
        style: {
          borderRadius: "10px",
          background: "#b8291f",
          color: "#fff",
        },
      });
      return;
    } else {
      const user = {
        name,
        email,
        password,
      };
      toast("account created succesfully", {
        icon: "😊",
        style: {
          borderRadius: "10px",
          background: "#223033",
          color: "#fff",
        },
      });
      // console.log(user);
      dispatch(registerUser(user));
      window.location.href = "/login";
    }
  }

  return (
    <div className={`container ${styles.login__screen}`}>
      <div className={`${styles.login__screen_margin}`}>
        <div className={`${styles.login__container}`}>
          {loading && <Loading />}

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
