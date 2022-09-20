import React, { useEffect } from "react";
import { SubmitButton } from "../TablePage/ButtonsPages";
import { useFormik } from "formik";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
  Button,
} from "@mui/material";
export const FormPage = () => {
  const [Values, setValues] = useState({
    Firstname: "",
    Lastname: "",
    mobile: "",
    email: "",
  });
  const form = useFormik({
    initialValues: {
      Firstname: "",
      Lastname: "",
      mobile: "",
      email: "",
    },

    onSubmit: (values, { resetForm }) => {
      axios
        .post(
          "https://crudformandtable-default-rtdb.asia-southeast1.firebasedatabase.app/register",
          Values
        )
        .then(() => alert("successfully entered db"));
      console.log(values);
      alert("you are successfully logged in");
      resetForm();
      setValues(values);
      console.log(setValues);
    },
    validate: (values) => {
      let errors = {};

      if (!values.Firstname) {
        errors.Firstname = "required";
      }
      if (!values.Lastname) {
        errors.Lastname = "required";
      }
      if (!values.mobile) {
        errors.mobile = "required";
      }
      if (!values.email) {
        errors.email = "email required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
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
          <form className="form" onSubmit={form.handleSubmit}>
            <TextField
              id="standard-basic"
              label="Firstname"
              variant="standard"
              type="string"
              name="Firstname"
              onChange={form.handleChange}
              value={form.values.Firstname}
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
              onChange={form.handleChange}
              value={form.values.Lastname}
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
              name="mobile"
              onChange={form.handleChange}
              value={form.values.mobile}
            />
            {form.errors.mobile ? (
              <div className="mobile">{form.errors.mobile}</div>
            ) : null}
            <br></br>

            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              type="email"
              name="email"
              onChange={form.handleChange}
              value={form.values.email}
            />
            <br></br>
            {form.errors.email ? (
              <div className="email">{form.errors.email}</div>
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
              <SubmitButton />

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "green",
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
      );
    </div>
  );
};
