import { List } from "@mui/material";
import React from "react";
import { v4 as uuid } from "uuid";

export const TableItems = (rowItem, Id) => {
  return (
    <div>
      TableItems
      <List key={uuid()}>{rowItem.rows}</List>
    </div>
  );
};
