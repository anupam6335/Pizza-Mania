import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../../actions/pizzaActions";
import pizzas from "../../pizzaMania";
import styles from "./Homescreen.module.css";
import Pizza from "../../components/Pizza/Pizza";

const Homescreen = () => {

  const dispatch = useDispatch();

  // const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  // const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

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
