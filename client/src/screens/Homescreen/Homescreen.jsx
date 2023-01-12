import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../../actions/pizzaActions";
import styles from "./Homescreen.module.css";
import Pizza from "../../components/Pizza/Pizza";

const Homescreen = () => {
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div className={`container ${styles.home__screen}`}>
      <div className="row">
        {loading ? (
          <h1>Loading... 🤔🤔</h1>
        ) : error ? (
          <h1>Something went wrong 😢😢😢</h1>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-4" key={pizza._id}>
                <div >
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Homescreen;
