import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import { ResetButton, SubmitButton } from "../TablePage/ButtonsPages";
export const FormPage = () => {
  const form = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      alert("you are successfully logged in");
      resetForm();
    },
    validate: (values) => {
      let errors = {};
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
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Please fill the form</DialogTitle>
        <DialogContent>
          <form onSubmit={form.handleSubmit} className="form">
            <TextField
              id="standard-basic"
              label="Id"
              variant="standard"
              type="number"
              name="Id"
            />
            <br></br>
            <TextField
              id="standard-basic"
              label="Firstname"
              variant="standard"
              type="string"
              name="Firstname"
            />
            <br></br>
            <TextField
              id="standard-basic"
              label="Lastname"
              variant="standard"
              type="string"
              name="Lastname"
            />
            <br></br>
            <TextField
              id="standard-basic"
              label="mobile"
              variant="standard"
              type="number"
              name="mobile"
            />
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
            {form.errors.email ? (
              <div className="email">{form.errors.email}</div>
            ) : null}
            <br></br>
            <p>
              <ResetButton />
              <SubmitButton />
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
