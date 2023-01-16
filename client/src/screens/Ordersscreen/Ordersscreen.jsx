import React, { useEffect } from "react";
import styles from "./Ordersscreen.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../actions/orderActions";
import Loading from "../../components/Decoration/Loading";
import Error from "../../components/Decoration/Error";

import AOS from 'aos'
import 'aos/dist/aos.css';
const Ordersscreen = () => {
  AOS.init({
    duration:1100,
  })
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = orderstate;

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  return (
    <div className={`container ${styles.order__screen}`}>
      <div className={`${styles.order__table_container}`}>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        <table class="table align-middle mb-0 bg-white">
          <thead class="bg-light">
            <tr>
              <th>Items</th>
              <th>Address</th>
              <th>Order Id</th>
              <th>status</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Transaction Id</th>
            </tr>
          </thead>

          <tbody>
            {orders &&
              orders.map((order) => {
                return (
                  <tr  className={`${styles.order__tbody}`}  data-aos='fade-down'  >
                    <td>
                    {order.orderItems.map(item=>{
                      return <div class="d-flex align-items-center">
                        <img
                          src={item.image}
                          alt=""
                          style={{ width: "45px", height: "45px" }}
                          class="rounded-circle"
                        />
                        <div class="ms-3">
                          <p class="fw-bold mb-1">{item.name}</p>
                          <p class={`text-muted mb-0 ${styles.order__mail}`}>{order.email}</p>
                        </div>
                      </div>
                      })}
                    </td>
                    <td>
                      <p class="fw-normal mb-1">{order.shippingAddress.street} , {order.shippingAddress.city}</p>
                      <p class="text-muted mb-0">Pincode : {order.shippingAddress.pincode} ,Country : {order.shippingAddress.country}</p>
                    </td>
                    <td>
                      {order._id}
                    </td>
                    <td>
                      {order.isDelivered ? "Delivered ✅" : 'on the way'}
                    </td>
                    <td>{order.orderAmount} /-</td>
                    <td>
                     {order.createdAt.substring(0,10)}
                    </td>
                    <td>
                     {order.transactionId}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ordersscreen;
