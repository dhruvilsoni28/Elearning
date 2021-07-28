import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Formik, Form, Field } from "formik";

import { connect } from "react-redux";

import { AddCourse } from "../../features/courses";
import * as Yup from "yup";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const newCourse = Yup.object({
  author: Yup.string().required("Required!"),
  description: Yup.string().required("Required!"),
});
console.log(newCourse);

const AddNewCourse = (props, course) => {
  const coureId = props.match.params.id;
  let courseLists = props.courses;

  let author;
  let title;
  let image;
  let description;
  let date;
  courseLists.forEach((data) => {
    if (coureId == data.id) {
      console.log("true");
      author = data.author;
      title = data.title;
      image = data.image;
      description = data.description;
      date = data.date;
    }
  });

  const handleonEdit = (id) => {
    console.log(id);

    if (!coureId) {
      return courseLists;
    } else {
      return { ...courseLists };
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
      <b style={{ alignSelf: "center" }}>
        {coureId ? <span>Edit</span> : <span>Add</span>}
        &nbsp; Course
      </b>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Formik
          initialValues={{
            id: Math.floor(Math.random() * 50000),
            author: "",
            title: "",
            date: "",
            image: "",
            description: "",
          }}
          validationSchema={newCourse}
          onSubmit={async (values) => {
            console.log(values);
            props.AddCourse(values);
            alert("New Course Added!!");
          }}
        >
          {({ values, errors, touched, handleChange, setFieldValue }) => {
            return (
              <Form>
                <Field
                  error={touched.author && errors.author}
                  as={TextField}
                  name="author"
                  label="Author"
                  value={author}
                  onChange={handleChange}
                  helperText={errors.author}
                />

                <Field
                  error={touched.title && errors.title}
                  as={TextField}
                  name="title"
                  label="Title"
                  value={title}
                  onChange={handleChange}
                  helperText={errors.title}
                />

                <KeyboardDatePicker
                  errorText={errors.date}
                  error={touched.date && errors.date}
                  margin="normal"
                  id="date-picker-dialog"
                  format="MM/dd/yyyy"
                  name="date"
                  value={date}
                  onChange={(e) => setFieldValue("date", e)}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />

                <Field
                  error={touched.image && errors.image}
                  as={TextField}
                  label="image"
                  name="image"
                  value={image}
                  onChange={handleChange}
                  helperText={errors.image}
                />

                <Field
                  error={touched.description && errors.description}
                  as={TextField}
                  label="description"
                  name="description"
                  value={description}
                  onChange={handleChange}
                  helperText={errors.description}
                />

                {coureId ? (
                  <>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      onClick={() => handleonEdit(coureId)}
                    >
                      Edit Course
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="contained" color="primary" type="submit">
                      Add Course
                    </Button>
                  </>
                )}
              </Form>
            );
          }}
        </Formik>
      </MuiPickersUtilsProvider>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  courses: state.courses.courses,
});

const mapDispatchToProps = (dispatch) => ({
  AddCourse: (payload) => dispatch(AddCourse(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCourse);
