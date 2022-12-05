import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

// import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import AddFoodItems from "components/FoodItem/AddFoodItems";
import LoginNGO from "components/Login/LoginNGO";
import LoginRestaurant from "components/Login/LoginRestaurant";
import DisplayFoodItems from "components/FoodItem/DisplayFoodItems";
import Navbar from "components/Navbars/AdminNavbar";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/AddFoodItems" exact component={AddFoodItems} />
            <Route
              path="/admin/DisplayFoodItems"
              exact
              component={DisplayFoodItems}
            />
            <Route path="/admin/RemoveFoodItems" exact component={LoginNGO} />
            <Route
              path="/admin/UpdateFootItems"
              exact
              component={LoginRestaurant}
            />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </div>
      </div>
    </>
  );
}
