import React from "react";
import { Button } from "@mui/material";
import { FormPage } from "../FormPage/FormPage";
export const SubmitButton = () => {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "red",
          width: "20px",
          height: "20px",
          fontSize: "10px",
        }}
        type="submit"
      >
        Submit
      </Button>
    </div>
  );
};
export const ResetButton = () => {
  return (
    <div>
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
    </div>
  );
};
// export const DeleteButton = () => {
//   return (
//     <div>
//       <Button
//         variant="contained"
//         sx={{
//           backgroundColor: "blue",
//           width: "12px",
//           height: "15px",
//           fontSize: "10px",
//         }}
//       >
//         Delete
//       </Button>
//     </div>
//   );
// };
export const EditButton = () => {
  return (
    <div>
      <Button
        variant="contained"
        size="small"
        sx={{
          backgroundColor: "green",
          width: "12px",
          height: "15px",
          fontSize: "10px",
        }}
        onClick={() => alert("Edited")}
      >
        Edit
      </Button>
    </div>
  );
};
export const AddNewButton = () => {
  return (
    <div>
      <Button variant="contained" onClick={() => FormPage()}>
        add member
      </Button>
    </div>
  );
};
