import React from "react";
import styles from "./Cartscreen.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../../actions/cartActions";

const Cartscreen = () => {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  var costDelivery = 49;
  const dispatch = useDispatch()
  return (
    <div classNameName={`container ${styles.cart__screen}`}>
      <section
        className={`h-100 gradient-custom ${styles.cart__screen_section}`}
      >
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">
                    {cartstate.cartItems.length} 🍕 Pizzas
                  </h5>
                </div>
                <div className="card-body">
                  {/* <!-- Single item --> */}
                  {cartItems.map((item) => {
                    return (
                      <>
                        <div className="row">
                          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            {/* <!-- Image --> */}
                            <div
                              className="bg-image hover-overlay hover-zoom ripple rounded"
                              data-mdb-ripple-color="light"
                            >
                              <img
                                src={item.image}
                                className={`w-100`}
                                alt="Blue Jeans Jacket"
                              />
                              <a href="#!">
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor: "rgba(251, 251, 251, 0.2)",
                                  }}
                                ></div>
                              </a>
                            </div>
                            {/* <!-- Image --> */}
                          </div>

                          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                            {/* <!-- Data --> */}
                            <p>
                              <strong>{item.name}</strong>
                            </p>
                            <p>Size: {item.varient}</p>
                            <button
                              type="button"
                              className="btn btn-danger btn-sm mb-2"
                              data-mdb-toggle="tooltip"
                              title="Remove item"
                              onClick={()=>{dispatch(deleteFromCart(item))}}
                            >
                              <i className="bx bxs-box"></i>
                            </button>
                            {/* <!-- Data --> */}
                          </div>

                          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            {/* <!-- Quantity --> */}
                            <div
                              className="d-flex mb-4"
                              style={{ maxWidth: "300px" }}
                            >
                              <button
                                className={`btn px-3 me-2 ${styles.quan__min}`}
                                onClick={()=>{dispatch(addToCart(item , item.quantity-1 , item.varient))}}
                              >
                                <i className="bx bx-minus-circle"></i>
                              </button>

                              <div
                                className={`form-outline ${styles.quan__pizza}`}
                              >
                                <input
                                  id="form1"
                                  min="0"
                                  name="quantity"
                                  value={item.quantity}
                                  type="number"
                                  className={`form-control ${styles.quan__input}`}
                                />
                                <label
                                  className={`form-label ${styles.quan}`}
                                  htmlFor="form1"
                                >
                                  Quantity
                                </label>
                              </div>

                              <button
                                className={`btn px-3 me-2 ${styles.quan__plus}`}
                                onClick={()=>{dispatch(addToCart(item , item.quantity+1 , item.varient))}}
                              >
                                <i className="bx bx-plus-circle"></i>
                              </button>
                            </div>
                            {/* <!-- Quantity --> */}

                            {/* <!-- Price --> */}
                            <p className="text-start text-md-center">
                              <strong>
                                {item.quantity} * {item.prices[0][item.varient]}{" "}
                                = {item.price} ₹
                              </strong>
                            </p>
                            {/* <!-- Price --> */}
                          </div>
                        </div>
                        <hr className="my-4" />
                      </>
                    );
                  })}

                  {/* <!-- Single item --> */}
                </div>
              </div>
            </div>

            <div className={`col-md-4 `}>
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                     Pizzas cost ( {cartstate.cartItems.length} )
                      <span>{subtotal} ₹</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Delivery cost
                      <span> {subtotal ? costDelivery : 0} ₹</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including GST)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>{ subtotal ? subtotal += costDelivery : 0} ₹</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className={`btn btn-lg btn-block ${styles.pizza__btn}`}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cartscreen;
