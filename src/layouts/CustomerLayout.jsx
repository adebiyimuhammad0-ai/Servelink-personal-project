import React from "react";
import {
  Box,
  Container,
} from "@mui/material";

function CustomerLayout({
  children,
}) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor:
          "background.default",
      }}
    >
      {children}
    </Box>
  );
}

export default CustomerLayout;