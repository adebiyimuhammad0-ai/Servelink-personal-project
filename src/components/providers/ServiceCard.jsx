import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Button,
} from "@mui/material";

import Rating from "../common/Rating";
import { formatCurrency } from "../../utils/currencyFormatter";

function ServiceCard({
  service,
  onRequest,
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
      <CardMedia
        component="img"
        height="190"
        image={service.image}
        alt={service.name}
      />

      <CardContent>
        <Typography
          variant="h6"
          fontWeight={700}
        >
          {service.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 0.75 }}
        >
          {service.description}
        </Typography>

        <Rating
          value={service.rating}
          count={service.reviewCount}
        />

        <Typography
          fontWeight={700}
          sx={{ mt: 1.5 }}
        >
          From {formatCurrency(service.priceFrom)}
        </Typography>

        <Button
          fullWidth
          variant="contained"
          onClick={() =>
            onRequest(service.id)
          }
          sx={{
            mt: 2,
            textTransform: "none",
          }}
        >
          Request service
        </Button>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;