import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Adminscreen.module.css";
import {Editpizza, Userslist , Orderslist, Pizzaslist, Addpizza } from '../allScreens';
const Adminscreen = () => {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div className={`container ${styles.home__screen}`}>
     <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <span style={{ fontSize: "35px", fontWeight: 'bold' }} className={`${styles.admin__name}`}>Admin Panel</span>

          <ul className={`${styles.adminfunctions}`}>
            <li>
              <Link to={'/admin/userslist'} style={{color: 'white'}}>Users List</Link>
            </li>
            <li>
            <Link to={'/admin/pizzaslist'} style={{color: 'white'}}>Pizzas List</Link>
            </li>
            <li>
            <Link to={'/admin/addpizza'} style={{color: 'white'}}>Add Pizza</Link>
            </li>
            <li>
            <Link to={'/admin/orderslist'} style={{color: 'white'}}>Orders List</Link>
            </li>

            
          </ul>


          <Switch>
          <Route path="/admin" component={Userslist} exact/>
              <Route path="/admin/userslist" component={Userslist} exact/>
              <Route path="/admin/orderslist" component={Orderslist} exact/>
              <Route path="/admin/pizzaslist" component={Pizzaslist} exact/>
              <Route path="/admin/addpizza" component={Addpizza} exact/>
              <Route path="/admin/editpizza/:pizzaid" component={Editpizza} exact/>
          </Switch>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Adminscreen;
