import React from "react";
import {
  Avatar,
  Box,
  Stack,
  Typography,
} from "@mui/material";

function NotificationItem({
  notification,
}) {
  return (
    <Box
      sx={{
        p: 2,
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Stack
        direction="row"
        spacing={1.5}
      >
        <Avatar
          src={notification.avatar}
        >
          {notification.name?.charAt(0)}
        </Avatar>

        <Box>
          <Typography variant="body2">
            <strong>
              {notification.name}
            </strong>{" "}
            {notification.message}
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
          >
            {notification.time}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default NotificationItem;