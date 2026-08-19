import React from "react";
import { Tooltip } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";

function VerifiedBadge({ size = 16 }) {
  return (
    <Tooltip title="Verified provider">
      <VerifiedIcon
        sx={{
          fontSize: size,
          color: "primary.main",
          ml: 0.5,
        }}
      />
    </Tooltip>
  );
}

export default VerifiedBadge;