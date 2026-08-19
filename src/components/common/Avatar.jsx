import React from "react";
import { Avatar as MuiAvatar } from "@mui/material";

function Avatar({
  src,
  name = "",
  size = 44,
}) {
  return (
    <MuiAvatar
      src={src}
      alt={name}
      sx={{
        width: size,
        height: size,
      }}
    >
      {!src && name.charAt(0).toUpperCase()}
    </MuiAvatar>
  );
}

export default Avatar;