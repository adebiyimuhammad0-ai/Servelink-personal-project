import React from "react";
import {
  Avatar,
  Box,
  Stack,
  Typography,
} from "@mui/material";

function ConversationItem({
  conversation,
  active,
  onClick,
}) {
  return (
    <Box
      onClick={onClick}
      sx={{
        p: 1.5,
        cursor: "pointer",
        borderRadius: 2,
        backgroundColor: active
          ? "action.selected"
          : "transparent",
        "&:hover": {
          backgroundColor:
            "action.hover",
        },
      }}
    >
      <Stack
        direction="row"
        spacing={1.25}
      >
        <Avatar src={conversation.avatar}>
          {conversation.name?.charAt(0)}
        </Avatar>

        <Box
          sx={{
            minWidth: 0,
            flex: 1,
          }}
        >
          <Typography
            fontWeight={600}
            noWrap
          >
            {conversation.name}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            noWrap
          >
            {conversation.lastMessage}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default ConversationItem;