import React from "react";
import {
  Box,
  Button,
  Divider,
  Stack,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function PostActions({
  post,
  onLike,
  onComment,
  onShare,
  onSave,
}) {
  return (
    <>
      <Box
        sx={{
          px: 2,
          py: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{post.likes} likes</span>
        <span>
          {post.comments} comments · {post.shares} shares
        </span>
      </Box>

      <Divider />

      <Stack direction="row">
        <Button
          fullWidth
          onClick={onLike}
          startIcon={
            post.liked ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteBorderIcon />
            )
          }
          sx={{
            textTransform: "none",
          }}
        >
          Like
        </Button>

        <Button
          fullWidth
          onClick={onComment}
          startIcon={
            <ChatBubbleOutlineIcon />
          }
          sx={{
            textTransform: "none",
          }}
        >
          Comment
        </Button>

        <Button
          fullWidth
          onClick={onShare}
          startIcon={
            <ShareOutlinedIcon />
          }
          sx={{
            textTransform: "none",
          }}
        >
          Share
        </Button>

        <Button
          onClick={onSave}
          startIcon={
            post.saved ? (
              <BookmarkIcon />
            ) : (
              <BookmarkBorderIcon />
            )
          }
        />
      </Stack>
    </>
  );
}

export default PostActions;