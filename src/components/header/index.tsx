import React from "react";
import { Box, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box
      sx={{
        borderBottom: 2,
        borderColor: "divider",
        padding: "0 10px",
      }}
    >
      <Typography
        sx={{ mt: 3, mb: 3, fontWeight: "bold" }}
        variant="h5"
        component="h5"
      >
        Where in the world?
      </Typography>
    </Box>
  );
};
