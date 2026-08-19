import React from "react";
import {
  Box,
  Rating as MuiRating,
  Typography,
} from "@mui/material";

function Rating({
  value = 0,
  count,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.5,
      }}
    >
      <MuiRating
        value={value}
        precision={0.1}
        readOnly
        size="small"
      />

      <Typography
        variant="body2"
        color="text.secondary"
      >
        {value.toFixed(1)}
        {count !== undefined
          ? ` (${count})`
          : ""}
      </Typography>
    </Box>
  );
}

export default Rating;