import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../actions/orderActions";
import { Error, Filter, Loading } from "../../components/allComp";
import { deleteUser, getAllUsers } from "../../actions/userActions";
import styles from "./Adminscreen.module.css";
const Userslist = () => {
  const dispatch = useDispatch();
  const usersstate = useSelector((state) => state.getAllUsersReducer);
  const { error, loading, users } = usersstate;
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div className={`container ${styles.all__small_screen}`}>
      <div>
        <h1 style={{ fontWeight: "bold", fontSize: "30px", letterSpacing: "10px" }}>Users list</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        <table className="table table-striped table-bordered table-responsive-sm">
          <thead className="thead-dark">
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {users &&
              users.map((user) => {
                return (
                  <tr className={`${styles.trow__pizza_screens}`}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <i
                        className={`ri-delete-bin-5-line ${styles.delete__box__pizza_screen}`}
                        onClick={() => {
                          dispatch(deleteUser(user._id));
                        }}
                      ></i>
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

export default Userslist;
