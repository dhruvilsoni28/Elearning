import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { setActiveUser } from "../../features/auth";
const Schema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required!"),
  password: Yup.string().min(8, "Minimum 8 characters").required("Required!"),
});
const Login = (props) => {
  console.log(props.users);

  const handleLogin = (data) => {
    let user = props.users.find((user) => {
      return user.email === data.email && user.password === data.password;
    });
    if (!!user) {
      props.history.push("/home");
    } else {
      alert("Invalid Credentials!!");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        width: "20%",
        padding: "10px",
      }}
    >
      <p></p>
      <b style={{ fontSize: "20px" }}>Login</b>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Schema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          handleLogin(values);
          setSubmitting(false);
        }}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form>
            <Field as={TextField} label="Email-Id" name="email" type="email" />
            {errors.email && touched.email ? (
              <div className="validate">{errors.email}</div>
            ) : null}
            <Field
              as={TextField}
              label="Password"
              name="password"
              type="password"
            />
            {errors.password && touched.password ? (
              <div className="validate">{errors.password}</div>
            ) : null}

            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
              style={{ marginTop: "15px" }}
            >
              Log In
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "15px" }}
              onClick={() => props.history.push("/")}
            >
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  users: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveUser: (payload) => dispatch(setActiveUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
