import React from "react";
import {
  Chip,
} from "@mui/material";

const labels = {
  pending: "Pending",
  accepted: "Accepted",
  "in-progress": "In progress",
  completed: "Completed",
  cancelled: "Cancelled",
};

function RequestStatus({
  status,
}) {
  return (
    <Chip
      label={labels[status] || status}
      size="small"
      color={
        status === "completed"
          ? "success"
          : status === "cancelled"
          ? "error"
          : status === "accepted"
          ? "primary"
          : "default"
      }
    />
  );
}

export default RequestStatus;