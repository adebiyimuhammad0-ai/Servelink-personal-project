import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";

function MessageBubble({
  message,
  own,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: own
          ? "flex-end"
          : "flex-start",
        mb: 1,
      }}
    >
      <Box
        sx={{
          maxWidth: "75%",
          px: 1.75,
          py: 1,
          borderRadius: 2.5,
          backgroundColor: own
            ? "primary.main"
            : "action.hover",
          color: own
            ? "primary.contrastText"
            : "text.primary",
        }}
      >
        <Typography variant="body2">
          {message.text}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            display: "block",
            mt: 0.5,
            opacity: 0.7,
          }}
        >
          {message.time}
        </Typography>
      </Box>
    </Box>
  );
}

export default MessageBubble;