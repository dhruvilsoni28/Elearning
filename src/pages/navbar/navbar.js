import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = ({ cart }) => {
  const classes = useStyles();

  const [cartCount, setCartCount] = useState(0);

  useEffect(
    () => {
      let count = 0;

      const lenght = cart.length;

      count += lenght;

      setCartCount(count);
    },
    [cart],
    cartCount
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link
              to="/viewcourse"
              style={{ color: "white", textDecoration: "none" }}
            >
              Admin
            </Link>

            <Link
              to="/home"
              style={{
                color: "white",
                marginLeft: "20px",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
          </Typography>
          <Badge badgeContent={cartCount} color="secondary">
            <Link
              to="/cart"
              style={{
                color: "white",
                marginLeft: "20px",
                textDecoration: "none",
              }}
            >
              {" "}
              <ShoppingCartIcon></ShoppingCartIcon>
            </Link>
          </Badge>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
// user -
// user type -admin & user

// Admin Panel-
// Add Course

// Home-
// Number of courses
// Number of courses added to Cart
