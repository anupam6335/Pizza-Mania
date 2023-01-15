import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Adminscreen.module.css";
import { Error, Filter, Loading } from "../../components/allComp";
import { getAllPizzas, deletePizza } from "../../actions/pizzaActions";
const Pizzaslist = () => {
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasstate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div className={`container ${styles.all__small_screen}`}>
      <div>
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "30px",
            letterSpacing: "10px",
          }}
        >
          Pizzas List
        </h2>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}

        <table className="table table-bordered table-responsive-sm">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Prices</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pizzas &&
              pizzas.map((pizza) => {
                return (
                  <tr className={`${styles.trow__pizza_screen}`}>
                    <td>
                      <img
                        src={pizza.image}
                        alt=""
                        height="50px"
                        width="50px"
                      />{" "}
                      {pizza.name}
                    </td>
                    <td>
                      Small : {pizza.prices[0]["small"]} <br />
                      Medium : {pizza.prices[0]["medium"]} <br />
                      Large : {pizza.prices[0]["large"]}
                    </td>
                    <td>{pizza.category}</td>
                    <td className={`${styles.edit__del}`}>
                      <i
                        className={` ri-delete-bin-5-line ${styles.delete__box__pizza_screen}`}
                        onClick={() => {
                          dispatch(deletePizza(pizza._id));
                        }}
                      ></i>
                      <Link to={`/admin/editpizza/${pizza._id}`}>
                        <i
                          className={`bx bxs-edit ${styles.edit__btn_pizza_screen}`}
                        ></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      ;
    </div>
  );
};

export default Pizzaslist;
