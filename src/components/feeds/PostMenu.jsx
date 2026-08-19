import React from "react";
import {
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function PostMenu() {
  const [anchorEl, setAnchorEl] =
    React.useState(null);

  return (
    <>
      <IconButton
        onClick={(event) =>
          setAnchorEl(event.currentTarget)
        }
      >
        <MoreHorizIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem
          onClick={() => setAnchorEl(null)}
        >
          Save post
        </MenuItem>

        <MenuItem
          onClick={() => setAnchorEl(null)}
        >
          Share post
        </MenuItem>

        <MenuItem
          onClick={() => setAnchorEl(null)}
        >
          Report post
        </MenuItem>
      </Menu>
    </>
  );
}

export default PostMenu;