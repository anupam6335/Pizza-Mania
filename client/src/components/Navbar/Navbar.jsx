import React from "react";
import styles from "./Navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../actions/userActions";

const Navbar = () => {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  
  const dispatch = useDispatch();
  return (
    <>
      <header className={`${styles.header}`} id="header">
        <nav className={`${styles.nav} ${styles.container}`}>
          <div className={`${styles.center}`}>
            <img src="assets/pizzaMania.png" alt="" />
            <a href="/" className={`${styles.nav__logo}`}>
              Pizza Mania
            </a>
          </div>
          {currentUser ? (
            <div className={`${styles.nav__menu}`} id="nav-menu">
              <ul className={`${styles.nav__list}`}>
                <li className={`${styles.nav__item}`}>
                  <a href="/" className={`${styles.nav__link}`}>
                    <i className="bx bx-home-alt nav__icon"></i>
                    <span className={`${styles.nav__name}`}>Home</span>
                  </a>
                </li>

                <li className={`${styles.nav__item}`}>
                  <a href="/cart" className={`${styles.nav__link}`}>
                    {cartstate.cartItems.length ? (
                      <i className="bx bx-shopping-bag">
                        {cartstate.cartItems.length}
                      </i>
                    ) : (
                      <i className="bx bx-shopping-bag"></i>
                    )}

                    <span className={`${styles.nav__name}`}>Cart </span>
                  </a>
                </li>
                <li className={`${styles.nav__item}`}>
                  <a href="/orders" className={`${styles.nav__link}`}>
                    <i className="bx bx-basket"></i>
                    <span className={`${styles.nav__name}`}>Orders </span>
                  </a>
                </li>
                <li className={`${styles.nav__item}`}>
                  <a href="/login" className={`${styles.nav__link}`}>
                    <i className="bx bx-user-circle"></i>
                    <span className={`${styles.nav__name}`}>
                      {currentUser.name.charAt(0).toUpperCase() + currentUser.name.slice(1, 7)}
                    </span>
                  </a>
                </li>

                <li className={`${styles.nav__item}`}>
                  <a
                    href="/login"
                    className={`${styles.nav__link}`}
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    <i className="bx bx-log-out-circle"></i>
                    <span className={`${styles.nav__name}`}>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div className={`${styles.nav__menu}`} id="nav-menu">
              <ul className={`${styles.nav__list}`}>
                <li className={`${styles.nav__item}`}>
                  {/* <a href="#home" className={`${styles.nav__link} ${styles.active__link}`}> */}
                  <a href="/" className={`${styles.nav__link}`}>
                    <i className="bx bx-home-alt nav__icon"></i>
                    <span className={`${styles.nav__name}`}>Home</span>
                  </a>
                </li>

                <li className={`${styles.nav__item}`}>
                  <a href="/cart" className={`${styles.nav__link}`}>
                    <i className="bx bx-shopping-bag">
                      {cartstate.cartItems.length}
                    </i>
                    <span className={`${styles.nav__name}`}>Cart </span>
                  </a>
                </li>

                <li className={`${styles.nav__item}`}>
                  <a href="/login" className={`${styles.nav__link}`}>
                    <i className="bx bx-log-in-circle"></i>
                    <span className={`${styles.nav__name}`}>Login</span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
