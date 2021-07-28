import React from "react";
import { connect } from "react-redux";

import ReviewCard from "../card/card";

const Cart = (props) => {
  return (
    <div>
      <header className="App-header">
        <div style={{ display: "flex", flexDirection: "row", margin: "40px" }}>
          {props.cart.map((cart, index) => {
            return (
              <ReviewCard
                id={cart.id}
                author={cart.author}
                title={cart.title}
                date={cart.date}
                image={cart.image}
                description={cart.description}
                rating={cart.rating}
                action="remove"
              />
            );
          })}
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};
export default connect(mapStateToProps)(Cart);
