import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Adminscreen.module.css";
import { addPizza } from "../../actions/pizzaActions";
import { Error, Success, Loading } from "../../components/allComp";
const Addpizza = () => {
  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const dispatch = useDispatch();

  const addpizzastate = useSelector((state) => state.addPizzaReducer);
  const { success, error, loading } = addpizzastate;

  function formHandler(e) {
    e.preventDefault();
    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallprice,
        medium: mediumprice,
        large: largeprice,
      },
    };

    // console.log(pizza);
    dispatch(addPizza(pizza));
  }
  return (
    <div className={`container ${styles.all__small_screen}`}>
      <h2
        style={{ fontWeight: "bold", fontSize: "30px", letterSpacing: "10px" }}
      >
        Add Pizzas
      </h2>

      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="New Pizza added successfully" />}
      <form onSubmit={formHandler} className={`${styles.add__pizza_form}`}>
        <input
          className={`form-control ${styles.add__pizza_input}`}
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          className={`form-control ${styles.add__pizza_input}`}
          type="text"
          placeholder="small varient price"
          value={smallprice}
          onChange={(e) => {
            setsmallprice(e.target.value);
          }}
        />
        <input
          className={`form-control ${styles.add__pizza_input}`}
          type="text"
          placeholder="medium varient price"
          value={mediumprice}
          onChange={(e) => {
            setmediumprice(e.target.value);
          }}
        />
        <input
          className={`form-control ${styles.add__pizza_input}`}
          type="text"
          placeholder="large varient price"
          value={largeprice}
          onChange={(e) => {
            setlargeprice(e.target.value);
          }}
        />
        <input
          className={`form-control ${styles.add__pizza_input}`}
          type="text"
          placeholder="category"
          value={category}
          onChange={(e) => {
            setcategory(e.target.value);
          }}
        />
        <input
          className={`form-control ${styles.add__pizza_input}`}
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
        <input
          className={`form-control ${styles.add__pizza_input}`}
          type="text"
          placeholder="image url"
          value={image}
          onChange={(e) => {
            setimage(e.target.value);
          }}
        />
        <button className={`${styles.btn}`} type="submit">
          Add Pizza
        </button>
      </form>
    </div>
  );
};

export default Addpizza;
