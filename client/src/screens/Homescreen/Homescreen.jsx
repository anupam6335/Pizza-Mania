import React from "react";
import pizzas from "../../pizzaMania";
import styles from "./Homescreen.module.css";
import Pizza from "../../components/Pizza/Pizza";

const Homescreen = () => {
  return (
    <div className={`container ${styles.home__screen}`}>
      <div className="row">
        {pizzas.map((pizza) => {
          return (
            <div className="col-md-4">
              <div>
                <Pizza pizza={pizza} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homescreen;
