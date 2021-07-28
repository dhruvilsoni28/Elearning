import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Formik, Form, Field } from "formik";

import { connect } from "react-redux";

import { setUser } from "../../features/auth";
import * as Yup from "yup";

const signupSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Mininum 2 characters")
    .max(15, "Maximum 15 characters")
    .required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required!"),
  password: Yup.string().min(8, "Minimum 8 characters").required("Required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password's not match")
    .required("Required!"),
});
console.log(signupSchema);

const SignUp = (props) => {
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
      <b style={{ alignSelf: "center" }}>SIGN UP</b>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          mobileNo: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signupSchema}
        onSubmit={async (values) => {
          console.log(values);
          props.setUser(values);
          props.history.push("/login");
        }}
      >
        {({ errors, touched, handleChange }) => {
          return (
            <Form>
              <Field
                as={TextField}
                name="firstName"
                label="First Name"
                onChange={handleChange}
              />
              {errors.firstName && touched.firstName ? (
                <div className="validate">{errors.firstName}</div>
              ) : null}

              <Field
                as={TextField}
                label="Last Name"
                name="lastName"
                onChange={handleChange}
              />
              {errors.firstName && touched.firstName ? (
                <div className="validate">{errors.firstName}</div>
              ) : null}

              <Field
                as={TextField}
                label="Email-Id"
                name="email"
                type="email"
                onChange={handleChange}
              />
              {errors.email && touched.email ? (
                <div className="validate">{errors.email}</div>
              ) : null}

              <Field
                as={TextField}
                label="Mobile No"
                name="mobileNo"
                onChange={handleChange}
              />

              <Field
                as={TextField}
                label="Password"
                name="password"
                type="password"
                onChange={handleChange}
              />
              {errors.password && touched.password ? (
                <div className="validate">{errors.password}</div>
              ) : null}

              <Field
                as={TextField}
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                onChange={handleChange}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className="validate">{errors.confirmPassword}</div>
              ) : null}

              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "15px" }}
                type="submit"
              >
                SignUp
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "15px" }}
                onClick={() => props.history.push("/login")}
              >
                Login
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  users: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (payload) => dispatch(setUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
