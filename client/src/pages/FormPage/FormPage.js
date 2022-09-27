import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
  Button,
} from "@mui/material";
export const FormPage = () => {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/create", {
        Firstname: Firstname,
        Lastname: Lastname,
        Mobile: Mobile,
        Email: Email,
      })
      .then(() => {
        alert("data logged successfully");
      });
  };

  const form = useFormik({
    initialValues: {
      Firstname: "",
      Lastname: "",
      Mobile: "",
      Email: "",
    },

    // onSubmit: (values, { resetForm }) => {
    //   axios
    //     .post("http://localhost:3001/formdata", {
    //       Firstname: Firstname,
    //       Lastname: Lastname,
    //       Mobile: Mobile,
    //       Email: Email,
    //     })
    //     .then(() => alert("data logged successfully"));

    //   console.log(values);
    //   alert("you are successfully logged in");
    //   resetForm();
    //   // setValues(values);
    //   // console.log(setValues);
    // },
    validate: (values) => {
      let errors = {};

      if (!values.Firstname) {
        errors.Firstname = "required";
      }
      if (!values.Lastname) {
        errors.Lastname = "required";
      }
      if (!values.Mobile) {
        errors.Mobile = "required";
      }
      if (!values.Email) {
        errors.Email = "email required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
      ) {
        errors.Email = "Invalid email address";
      }

      return errors;
    },
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <br></br>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ backgroundColor: "#A10035", color: "#FFE7BF", margin: "#FFE7BF" }}
      >
        Open form
      </Button>
      <Dialog open={open}>
        <CancelIcon
          onClick={handleClose}
          sx={{
            color: "red",
          }}
        ></CancelIcon>
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          Please fill the form
        </DialogTitle>
        <DialogContent>
          <form className="form">
            <TextField
              id="standard-basic"
              label="Firstname"
              variant="standard"
              type="string"
              name="Firstname"
              onChange={(e) => setFirstname(e.target.value)}
              // onChange={form.handleChange}
              // value={form.values.Firstname}
            />
            {form.errors.Firstname ? (
              <div className="Firstname">{form.errors.Firstname}</div>
            ) : null}
            <br></br>
            <TextField
              id="standard-basic"
              label="Lastname"
              variant="standard"
              type="string"
              name="Lastname"
              onChange={(e) => setLastname(e.target.value)}
              // onChange={form.handleChange}
              // value={form.values.Lastname}
            />
            {form.errors.Lastname ? (
              <div className="Lastname">{form.errors.Lastname}</div>
            ) : null}
            <br></br>
            <TextField
              id="standard-basic"
              label="mobile"
              variant="standard"
              type="number"
              name="Mobile"
              onChange={(e) => setMobile(e.target.value)}

              // onChange={form.handleChange}
              // value={form.values.Mobile}
            />
            {form.errors.Mobile ? (
              <div className="mobile">{form.errors.Mobile}</div>
            ) : null}
            <br></br>

            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              type="Email"
              name="Email"
              onChange={(e) => setEmail(e.target.value)}

              // onChange={form.handleChange}
              // value={form.values.Email}
            />
            <br></br>
            {form.errors.Email ? (
              <div className="email">{form.errors.Email}</div>
            ) : null}
            <br></br>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              item
              xs={15}
              columnGap="20px"
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "green",
                  width: "20px",
                  height: "20px",
                  fontSize: "10px",
                }}
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "red",
                  width: "20px",
                  height: "20px",
                  fontSize: "10px",
                }}
                type="reset"
                onClick={form.resetForm}
              >
                Reset
              </Button>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
