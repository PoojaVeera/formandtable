import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  Button,
} from "@mui/material";
import { v4 as uuid } from "uuid";
import React, { useState } from "react";
import { AddNewButton, EditButton } from "./ButtonsPages";
import { StyledTableRow, StyledTableCell, TABLEPage } from "./TablePage.styles";

export const TablePage = () => {
  const [rowsData, setrowsData] = useState([
    {
      Id: uuid(),
      Firstname: "pooja",
      Lastname: "veeranki",
      mobile: 39256037486,
      email: "ajkdhjh",
    },
    {
      Id: uuid(),
      Firstname: "udhay",
      Lastname: "nidhi",
      mobile: 4370635,
      email: "ldfjk",
    },
    {
      Id: uuid(),
      Firstname: "aaisha",
      Lastname: "jameela",
      mobile: 7657834,
      email: "uagsdfg",
    },
  ]);
  const deleteTask = (Id) => {
    const delTask = [...rowsData];
    delTask.splice(Id, 1);
    setrowsData(delTask);
    console.log("task deleted");
  };
  return (
    <TABLEPage>
      <br></br>
      <AddNewButton />
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
            {rowsData.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.Id}
                </StyledTableCell>
                <StyledTableCell>{row.Firstname}</StyledTableCell>
                <StyledTableCell>{row.Lastname}</StyledTableCell>
                <StyledTableCell>{row.mobile}</StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
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
                  <EditButton />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TABLEPage>
  );
};
