import React from "react";
import {
  Box,
  Stack,
  Typography,
} from "@mui/material";

function ProviderStats({
  provider,
}) {
  const stats = [
    {
      label: "Jobs",
      value: provider.completedJobs,
    },
    {
      label: "Reviews",
      value: provider.reviewCount,
    },
    {
      label: "Rating",
      value: provider.rating,
    },
  ];

  return (
    <Stack
      direction="row"
      spacing={4}
      sx={{ mt: 2 }}
    >
      {stats.map((stat) => (
        <Box key={stat.label}>
          <Typography
            variant="h6"
            fontWeight={700}
          >
            {stat.value}
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
          >
            {stat.label}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}

export default ProviderStats;