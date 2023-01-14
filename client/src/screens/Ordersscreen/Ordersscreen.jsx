import React, { useState, useEffect } from "react";
import styles from "./Ordersscreen.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../actions/orderActions";

const Ordersscreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  return (
    <div className={`container ${styles.order__screen}`}>
      <h1>hie</h1>
    </div>
  );
};

export default Ordersscreen;
