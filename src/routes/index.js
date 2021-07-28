import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../pages/login";

import SignUp from "../pages/signup";

import Home from "../pages/Home";

import AddNewCourse from "../pages/admin/addnewcourse";
import ViewCourse from "../pages/admin/viewcourse";
import Navbar from "../pages/navbar/navbar";
import Cart from "../pages/cart/cart";

export default function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/addNewcourse/:id?" component={AddNewCourse} />
        <Route path="/viewcourse" component={ViewCourse} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}
