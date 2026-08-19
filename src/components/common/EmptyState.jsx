import React from "react";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";

function EmptyState({
  title = "Nothing here yet",
  description = "There is nothing to display.",
  actionLabel,
  onAction,
}) {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 8,
        px: 3,
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
      >
        {title}
      </Typography>

      <Typography
        color="text.secondary"
        sx={{
          maxWidth: 450,
          mx: "auto",
          mt: 1,
        }}
      >
        {description}
      </Typography>

      {actionLabel && (
        <Button
          variant="contained"
          onClick={onAction}
          sx={{
            mt: 3,
            textTransform: "none",
          }}
        >
          {actionLabel}
        </Button>
      )}
    </Box>
  );
}

export default EmptyState;