import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

import Rating from "../common/Rating";
import VerifiedBadge from "../common/VerifiedBadge";

function ProviderCard({
  provider,
  onViewProfile,
}) {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          spacing={1.5}
        >
          <Avatar
            src={provider.avatar}
            sx={{
              width: 56,
              height: 56,
            }}
          >
            {provider.name.charAt(0)}
          </Avatar>

          <div>
            <Stack direction="row">
              <Typography fontWeight={700}>
                {provider.name}
              </Typography>

              {provider.verified && (
                <VerifiedBadge />
              )}
            </Stack>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {provider.category}
            </Typography>

            <Rating
              value={provider.rating}
              count={provider.reviewCount}
            />
          </div>
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 2 }}
        >
          {provider.description}
        </Typography>

        <Button
          fullWidth
          variant="outlined"
          onClick={() =>
            onViewProfile(provider.id)
          }
          sx={{
            mt: 2,
            textTransform: "none",
          }}
        >
          View profile
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProviderCard;