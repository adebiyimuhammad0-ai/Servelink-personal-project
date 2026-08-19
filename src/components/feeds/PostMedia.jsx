import React from "react";
import { Box } from "@mui/material";

function PostMedia({ media = [] }) {
  if (!media.length) return null;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns:
          media.length > 1
            ? "repeat(2, 1fr)"
            : "1fr",
        gap: 0.5,
      }}
    >
      {media.slice(0, 4).map((item, index) => (
        <Box
          key={index}
          component="img"
          src={item.url}
          alt={`Work sample ${index + 1}`}
          sx={{
            width: "100%",
            aspectRatio:
              media.length === 1
                ? "16 / 10"
                : "1 / 1",
            objectFit: "cover",
            display: "block",
          }}
        />
      ))}
    </Box>
  );
}

export default PostMedia;