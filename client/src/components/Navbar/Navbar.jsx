import React from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <header className={`${styles.header}`} id="header">
        <nav className={`${styles.nav} ${styles.container}`}>
          <div className={`${styles.center}`}>
            <img src="assets/pizzaMania.png" alt="" />
            <a href="#" className={`${styles.nav__logo}`}>
              Pizza Mania
            </a>
          </div>
          <div className={`${styles.nav__menu}`} id="nav-menu">
            <ul className={`${styles.nav__list}`}>
              <li className={`${styles.nav__item}`}>
                {/* <a href="#home" className={`${styles.nav__link} ${styles.active__link}`}> */}
                <a href="#home" className={`${styles.nav__link}`}>
                  <i className="bx bx-home-alt nav__icon"></i>
                  <span className={`${styles.nav__name}`}>Home</span>
                </a>
              </li>

              <li className={`${styles.nav__item}`}>
                <a href="#about" className={`${styles.nav__link}`}>
                  <i className="bx bx-cart-alt"></i>

                  <span className={`${styles.nav__name}`}>Cart</span>
                </a>
              </li>

              <li className={`${styles.nav__item}`}>
                <a href="#skills" className={`${styles.nav__link}`}>
                  <i className="bx bx-log-in-circle"></i>
                  <span className={`${styles.nav__name}`}>Login</span>
                </a>
              </li>
            </ul>
          </div>

          {/* <img src="assets/img/perfil.png" alt="" className="nav__img"/> */}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
