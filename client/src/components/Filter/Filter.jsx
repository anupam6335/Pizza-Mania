import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Filter.module.css";
import { filterPizzas } from "../../actions/pizzaActions";
const Filter = () => {
  const dispatch = useDispatch();
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");
  
  return (
    <div className={`${styles.filter__content}`}>
      <div className={`${styles.search__box}`}>
        <input
          type="text"
          onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            value={searchkey}
          className={`${styles.search__box_input}`}
          placeholder="search pizzas"
        />
      </div>
      <div className={`${styles.dropdown}`}>
        <select
          className={`${styles.dropdown__select}`}
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="veg">Veg</option>
          <option value="nonveg">Non Veg</option>
          <option value="panner">panner</option>
          <option value="parathapizza">paratha pizza</option>
          <option value="gourmetpizza">gourmet pizza</option>
        </select>
      </div>
      <button className={`${styles.search} ${styles.btn}`} onClick={()=>{dispatch(filterPizzas(searchkey , category))}}> Filter </button>
    </div>
  );
};

export default Filter;
