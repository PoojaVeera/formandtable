import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  ButtonGroup,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { StyledTableRow, StyledTableCell, TABLEPage } from "./TablePage.styles";
import Axios from "axios";
import CancelIcon from "@mui/icons-material/Cancel";
import "./TablePage.styles";

export const TablePage = () => {
  const [employeeList, setemployeeList] = useState([]);
  const [open1, setOpen1] = useState(false);
  const [open, setOpen] = useState(false);
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Mobile, setMobile] = useState(0);
  const [Email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/create", {
      Firstname: Firstname,
      Lastname: Lastname,
      Mobile: Mobile,
      Email: Email,
    }).then(() => {
      alert("data logged successfully");
    });
  };

  const handleUpdate = (e) => {};
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setemployeeList(response.data);
    });
  };

  const deleteTask = (Id) => {
    const delTask = [...employeeList];
    delTask.splice(Id, 1);
    setemployeeList(delTask);
    console.log("task deleted");
  };
  return (
    <TABLEPage>
      <div>
        {" "}
        <Dialog open={open1}>
          <CancelIcon
            onClick={handleClose}
            sx={{
              color: "red",
            }}
          ></CancelIcon>
          <DialogTitle
            sx={{
              display: "flex",
              flexDirection: "column",
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
                value={Firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <br></br>

              <TextField
                id="standard-basic"
                label="Lastname"
                variant="standard"
                type="string"
                name="Lastname"
                onChange={(e) => setLastname(e.target.value)}
              />
              <br></br>

              <TextField
                id="standard-basic"
                label="mobile"
                variant="standard"
                type="number"
                name="Mobile"
                onChange={(e) => setMobile(e.target.value)}
              />
              <br></br>

              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                type="Email"
                name="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br></br>
              <br></br>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "green",
                  width: "20px",
                  height: "20px",
                  fontSize: "10px",
                }}
                type="submit"
                onClick={handleUpdate}
              >
                Update
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="form">
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
              flexDirection: "column",
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
              />
              <br></br>

              <TextField
                id="standard-basic"
                label="Lastname"
                variant="standard"
                type="string"
                name="Lastname"
                onChange={(e) => setLastname(e.target.value)}
              />
              <br></br>

              <TextField
                id="standard-basic"
                label="mobile"
                variant="standard"
                type="number"
                name="Mobile"
                onChange={(e) => setMobile(e.target.value)}
              />
              <br></br>

              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                type="Email"
                name="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br></br>
              <br></br>

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
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <br></br>
      <Box>
        <ButtonGroup variant="outlined">
          <Button onClick={handleClickOpen}>add member</Button>

          <Button onClick={getEmployees}>get info</Button>
        </ButtonGroup>
        <br></br>
        <TableContainer component={Paper} align="center">
          <Table size="small" sx={{ minWidth: 650 }}>
            <TableHead>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>FIRST NAME</StyledTableCell>
              <StyledTableCell>LAST NAME</StyledTableCell>
              <StyledTableCell>MOBILE</StyledTableCell>
              <StyledTableCell>EMAIL</StyledTableCell>
              <StyledTableCell />
              <StyledTableCell />
            </TableHead>
            <TableBody>
              {employeeList.map((row, key) => (
                <StyledTableRow>
                  <StyledTableCell>{row.Id}</StyledTableCell>
                  <StyledTableCell>{row.Firstname}</StyledTableCell>
                  <StyledTableCell>{row.Lastname}</StyledTableCell>
                  <StyledTableCell>{row.Mobile}</StyledTableCell>
                  <StyledTableCell>{row.Email}</StyledTableCell>
                  <StyledTableCell>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "blue",
                        width: "12px",
                        height: "15px",
                        fontSize: "10px",
                      }}
                      onClick={deleteTask}
                    >
                      Delete
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: "green",
                        width: "12px",
                        height: "15px",
                        fontSize: "10px",
                      }}
                      onClick={handleClickOpen1}
                    >
                      edit
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </TABLEPage>
  );
};
