import React from "react";
import { connect } from "react-redux";

import ReviewCard from "../card/card";

const Home = (props) => {
  const cartList = props.cart;
  return (
    <div>
      <header className="App-header">
        <div style={{ display: "flex", flexDirection: "row", margin: "40px" }}>
          {props.courses.map((course) => {
            let ac = cartList.findIndex((cart) => cart.id === course.id);
            return (
              <ReviewCard
                course={course}
                id={course.id}
                author={course.author}
                title={course.title}
                date={course.date}
                image={course.image}
                description={course.description}
                rating={course.rating}
                action={ac !== -1 ? "remove" : "add"}
              />
            );
          })}
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  courses: state.courses.courses,
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(Home);
