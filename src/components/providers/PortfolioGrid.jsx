import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";

function PortfolioGrid({
  images = [],
}) {
  return (
    <Box>
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{ mb: 2 }}
      >
        Portfolio
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
          },
          gap: 1,
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image}
            alt={`Portfolio ${index + 1}`}
            sx={{
              width: "100%",
              aspectRatio: "1 / 1",
              objectFit: "cover",
              borderRadius: 2,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default PortfolioGrid;