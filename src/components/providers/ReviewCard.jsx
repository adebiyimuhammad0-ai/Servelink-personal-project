import React from "react";
import {
  Avatar,
  Box,
  Stack,
  Typography,
} from "@mui/material";

import Rating from "../common/Rating";

function ReviewCard({
  review,
}) {
  return (
    <Stack
      direction="row"
      spacing={1.5}
      sx={{ mb: 3 }}
    >
      <Avatar src={review.avatar}>
        {review.name?.charAt(0)}
      </Avatar>

      <Box>
        <Typography fontWeight={700}>
          {review.name}
        </Typography>

        <Rating value={review.rating} />

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 0.75 }}
        >
          {review.comment}
        </Typography>
      </Box>
    </Stack>
  );
}

export default ReviewCard;