import React from "react";
import {
  Box,
  Chip,
} from "@mui/material";

function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        overflowX: "auto",
        pb: 1,
        mb: 2,
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {categories.map((category) => (
        <Chip
          key={category.id}
          label={`${category.icon} ${category.name}`}
          onClick={() =>
            onCategoryChange(category.id)
          }
          color={
            activeCategory === category.id
              ? "primary"
              : "default"
          }
          variant={
            activeCategory === category.id
              ? "filled"
              : "outlined"
          }
          sx={{
            flexShrink: 0,
            borderRadius: 2,
          }}
        />
      ))}
    </Box>
  );
}

export default CategoryFilter;