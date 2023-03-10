import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Adminscreen.module.css";
import { editPizza, getPizzaById } from "../../actions/pizzaActions";
import { Error, Success, Loading } from "../../components/allComp";
const Editpizza = ({ match }) => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const getpizzabyidstate = useSelector((state) => state.getPizzaByIdReducer);

  const { pizza, error, loading } = getpizzabyidstate;

  const editpizzastate = useSelector((state) => state.editPizzaReducer)
  const {editloading , editerror , editsuccess} = editpizzastate;
  useEffect(() => {
    if(pizza)
    {
        if(pizza._id==match.params.pizzaid)
        {
            setname(pizza.name)
            setdescription(pizza.description)
            setcategory(pizza.category)
            setsmallprice(pizza.prices[0]['small'])
            setmediumprice(pizza.prices[0]['medium'])
            setlargeprice(pizza.prices[0]['large'])
            setimage(pizza.image)
        }
        else{
            dispatch(getPizzaById(match.params.pizzaid));
        }

    }
    else{
        dispatch(getPizzaById(match.params.pizzaid));
    }
  },[pizza , dispatch]);

  function formHandler(e) {
    e.preventDefault();

    const editedpizza = {
      _id : match.params.pizzaid,
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

    dispatch(editPizza(editedpizza))
  }
  return (
    <div className={`container ${styles.home__screen}`}>
      <h2
        style={{ fontWeight: "bold", fontSize: "30px", letterSpacing: "10px" }}
      >
        Edit Pizza
      </h2>

      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {editsuccess && (<Success success='Pizza details edited successfully'/>)}
      {editloading && (<Loading />)}

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
          Edit Pizza
        </button>
      </form>
    </div>
  );
};

export default Editpizza;
