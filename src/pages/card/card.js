import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import Rating from "@material-ui/lab/Rating";

import { Button, Tooltip } from "@material-ui/core";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../cart/shopping-actions";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ReviewCard = ({ course, action, ...props }) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      style={{ marginRight: "40px", marginBottom: "40px" }}
    >
      <CardHeader
        avatar={
          <Tooltip title={props.author}>
            <Avatar aria-label="recipe" className={classes.avatar}>
              {props.author[0]}
            </Avatar>
          </Tooltip>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.date}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <div>
          <div style={{ marginBottom: "10px", marginLeft: "5px" }}>
            <Rating name="simple-controlled" value={props.rating} />
          </div>
          <div style={{ marginBottom: "10px", marginLeft: "5px" }}>
            {action === "remove" ? (
              <>
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  onClick={() => props.removeFromCart(props.id)}
                >
                  Remove from cart
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={() => props.addToCart(course)}
                >
                  Add Cart
                </Button>
              </>
            )}
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "10px", marginTop: "10px" }}
              type="submit"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    courses: state.courses.courses,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCard);
