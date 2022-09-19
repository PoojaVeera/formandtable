import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import React from "react";
import { useFormik } from "formik";
import { ResetButton, SubmitButton } from "../TablePage/ButtonsPages";
export const FormPage = () => {
  const form = useFormik({
    initialValues: {
      Firstname: "",
      Lastname: "",
      mobile: "",
      email: "",
    },
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
            <SubmitButton />
            <br></br>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "green",
                width: "20px",
                height: "20px",
                fontSize: "10px",
              }}
            >
              Reset
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
