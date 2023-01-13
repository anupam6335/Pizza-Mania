import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import {useDispatch} from 'react-redux'
import styles from "./Pizza.module.css";
import { addToCart } from "../../actions/cartActions";

const Pizza = ({ pizza }) => {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()

  function addtocart()
  {
    console.log('add to cart clicked')
    dispatch(addToCart(pizza , quantity , varient))
  }

  return (
    <div className={`container ${styles.pizza__container}`}>
      <div className={`${styles.pizza__container} grid`}>
        <article className={`${styles.pizza__card}`}>
          <img  onClick={handleShow}
            src={pizza.image}
            alt=""
            className={`${styles.pizza__img}`}
            style={{ height: "12.5rem", width: "12.5rem" }}
          />

          <h3 className={`${styles.pizza__name}`}>{pizza.name}</h3>
          <div className={`${styles.pizza__vq_container}`}>
            <div className={`w-100`}>
              <h6 className={`${styles.mb}`}>Varients</h6>

              <select
                className={`form-control ${styles.var__select}`}
                value={varient}
                onChange={(e) => {
                  setvarient(e.target.value);
                }}
              >
                {pizza.varients.map((varient) => {
                  return <option value={varient}>{varient}</option>;
                })}
              </select>
            </div>
            <div className={`w-100 ${styles.quan}`}>
              <h6 className={`${styles.mb}`}>Quantity</h6>

              <select
                className={`form-control ${styles.var__select}`}
                value={quantity}
                onChange={(e) => {
                  setquantity(e.target.value);
                }}
              >
                {[...Array(10).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
            </div>
          </div>


          <div className={`flex-container ${styles.pizza__btnprice_container}`}>
            <div className="m-1 w-100">
              <h1 className={`mt-1 ${styles.pizza__price}`}>
                Price : {pizza.prices[0][varient] * quantity} ₹
              </h1>
            </div>
            <div className="m-1 w-100">
              <button className={`${styles.add__to_cart}`} onClick={addtocart}>
                <i className="bx bx-shopping-bag"></i>
              </button>
            </div>
          </div>
        </article>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image} className={`img-fluid ${styles.modal__img}`} style={{height:'400px'}}/>
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  );
};

export default Pizza;
