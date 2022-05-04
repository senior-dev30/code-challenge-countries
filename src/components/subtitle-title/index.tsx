import React from "react";
import { Typography } from "@mui/material";

export const SubTitle = (props: any) => {
  return (
    <Typography>
      <strong>{props.subTile}: </strong>
      {props.title}
    </Typography>
  );
};
