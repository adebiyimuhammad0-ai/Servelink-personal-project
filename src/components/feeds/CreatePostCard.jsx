import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Stack,
} from "@mui/material";

import ImageIcon from "@mui/icons-material/Image";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

function CreatePostCard({
  currentUser,
  onCreatePost,
}) {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        mb: 2,
      }}
    >
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
        >
          <Avatar>
            {currentUser?.name?.charAt(0)}
          </Avatar>

          <Button
            fullWidth
            variant="outlined"
            onClick={onCreatePost}
            sx={{
              justifyContent: "flex-start",
              borderRadius: 5,
              color: "text.secondary",
              textTransform: "none",
            }}
          >
            Share something about your work...
          </Button>
        </Stack>
      </Box>

      <Divider />

      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{ py: 0.5 }}
      >
        <Button
          startIcon={<ImageIcon />}
          onClick={onCreatePost}
          sx={{
            textTransform: "none",
          }}
        >
          Photo
        </Button>

        <Button
          startIcon={<VideoLibraryIcon />}
          onClick={onCreatePost}
          sx={{
            textTransform: "none",
          }}
        >
          Video
        </Button>
      </Stack>
    </Card>
  );
}

export default CreatePostCard;