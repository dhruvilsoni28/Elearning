import React from "react";
import { connect } from "react-redux";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const ViewCourse = (props) => {
  let courseLists = props.courses;
  const history = useHistory();
  const handleonClick = (courseID) => {
    console.log(courseID);
    history.push(`/addNewcourse/${courseID}`);
  };

  return (
    <div style={{ height: 400, width: "100%", marginTop: "20px" }}>
      <TableContainer>
        <Table
          aria-labelledby="tableTitle"
          size={"medium"}
          aria-label="enhanced table"
        >
          <TableHead>
            <TableRow>
              <TableCell>check</TableCell>
              <TableCell>Id</TableCell>
              <TableCell align="right">Author</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courseLists.map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                  <TableCell padding="checkbox">
                    <Checkbox inputProps={{ "aria-labelledby": labelId }} />
                  </TableCell>
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                  >
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.author}</TableCell>
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">{row.image}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      style={{ marginTop: "15px", marginRight: "5px" }}
                      onClick={() => handleonClick(row.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      style={{ marginTop: "15px" }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "10px" }}
        type="submit"
        onClick={() => props.history.push("/addnewcourse")}
      >
        Add New Course
      </Button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  courses: state.courses.courses,
});

export default connect(mapStateToProps)(ViewCourse);
