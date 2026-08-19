import React from "react";
import {
  Box,
  Button,
  Card,
  Stack,
  Typography,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import Avatar from "../common/Avatar";
import VerifiedBadge from "../common/VerifiedBadge";

import PostMedia from "./PostMedia";
import PostActions from "./PostActions";
import PostMenu from "./PostMenu";

function PostCard({
  post,
  provider,
  onLike,
  onSave,
  onShare,
  onComment,
  onViewProvider,
}) {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        mb: 2,
        overflow: "hidden",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: 2 }}
      >
        <Stack
          direction="row"
          spacing={1.25}
          alignItems="center"
        >
          <Avatar
            src={provider?.avatar}
            name={provider?.name}
          />

          <Box>
            <Stack direction="row">
              <Typography
                fontWeight={700}
              >
                {provider?.name}
              </Typography>

              {provider?.verified && (
                <VerifiedBadge />
              )}
            </Stack>

            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
            >
              <Typography
                variant="caption"
                color="text.secondary"
              >
                {provider?.category}
              </Typography>

              <Typography
                variant="caption"
                color="text.secondary"
              >
                ·
              </Typography>

              <LocationOnOutlinedIcon
                sx={{
                  fontSize: 14,
                  color: "text.secondary",
                }}
              />

              <Typography
                variant="caption"
                color="text.secondary"
              >
                {provider?.location}
              </Typography>

              <Typography
                variant="caption"
                color="text.secondary"
              >
                · {post.createdAt}
              </Typography>
            </Stack>
          </Box>
        </Stack>

        <PostMenu />
      </Stack>

      <Box sx={{ px: 2, pb: 2 }}>
        <Typography sx={{ lineHeight: 1.7 }}>
          {post.content}
        </Typography>
      </Box>

      <PostMedia media={post.media} />

      <Box sx={{ p: 1.5 }}>
        <Button
          variant="outlined"
          size="small"
          onClick={() =>
            onViewProvider(provider.id)
          }
          sx={{
            textTransform: "none",
          }}
        >
          View provider
        </Button>
      </Box>

      <PostActions
        post={post}
        onLike={() => onLike(post.id)}
        onSave={() => onSave(post.id)}
        onShare={() => onShare(post.id)}
        onComment={() => onComment(post.id)}
      />
    </Card>
  );
}

export default PostCard;