import React from "react";
import {
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

import RequestStatus from "./RequestStatus";

function RequestCard({
  request,
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
          justifyContent="space-between"
        >
          <div>
            <Typography
              fontWeight={700}
            >
              {request.serviceName}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {request.providerName}
            </Typography>
          </div>

          <RequestStatus
            status={request.status}
          />
        </Stack>

        <Typography
          variant="body2"
          sx={{ mt: 2 }}
        >
          {request.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RequestCard;